// 3D chat bubbles. Loaded lazily by BubbleCanvas.astro.
//
// - Hero: a cloud of floating bubbles (customer messages) that parallax with the pointer. They scroll slower than the page, so the next section covers them (clipped at its top edge).
// - Traveler: one bigger bubble that follows the scroll through every `[data-bubble-anchor]` in document order.
//   Anchors carry data-scale / data-tag / data-msg / data-stage, so moving a lane in the markup moves the path.
// - Units: 1 world unit = 1 CSS px on the z=0 plane, so DOM positions map straight to the scene.
import {
  AmbientLight,
  CanvasTexture,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  Scene,
  Shape,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three';

interface Msg { tag: string; msg: string }
type Side = 'customer' | 'assistant';
interface Anchor { x: number; y: number; scale: number; msg: Msg; stage: number | null; hold: boolean; side: Side }
interface Palette { body: Color; ink: string; tag: string }

// Bubble body size in world units (px at z=0), and extrusion.
const W = 260;
const H = 116;
const R = 42;
const DEPTH = 20;
/** Hero cloud bubbles are drawn fainter than the traveler / reply bubbles. */
const CLOUD_OPACITY = 1;
const BEVEL = 8;
const FOV = 30;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => { const c = clamp(t, 0, 1); return c * c * (3 - 2 * c); };
const rand = (i: number) => { const s = Math.sin(i * 12.9898) * 43758.5453; return s - Math.floor(s); };

/** Resolve a CSS token (any color syntax the browser understands, e.g. oklch) to a three Color. */
function tokenColor(name: string): Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const px = document.createElement('canvas');
  px.width = px.height = 1;
  const ctx = px.getContext('2d', { willReadFrequently: true });
  if (!ctx) return new Color(1, 1, 1);
  ctx.fillStyle = raw;
  ctx.fillRect(0, 0, 1, 1);
  const d = ctx.getImageData(0, 0, 1, 1).data;
  return new Color().setRGB((d[0] ?? 255) / 255, (d[1] ?? 255) / 255, (d[2] ?? 255) / 255, SRGBColorSpace);
}

/** Rounded speech-bubble outline with a small tail at the bottom-left (side = 1) or bottom-right (side = -1). */
function bubbleGeometry(side: 1 | -1): ExtrudeGeometry {
  const x = -W / 2, y = -H / 2;
  const X = (v: number) => v * side;
  const s = new Shape();
  s.moveTo(X(x + R + 18), y);
  s.lineTo(X(x + W - R), y);
  s.quadraticCurveTo(X(x + W), y, X(x + W), y + R);
  s.lineTo(X(x + W), y + H - R);
  s.quadraticCurveTo(X(x + W), y + H, X(x + W - R), y + H);
  s.lineTo(X(x + R), y + H);
  s.quadraticCurveTo(X(x), y + H, X(x), y + H - R);
  s.lineTo(X(x), y - 18);
  s.quadraticCurveTo(X(x + 14), y - 6, X(x + R + 18), y);
  const g = new ExtrudeGeometry(s, {
    depth: DEPTH,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 5,
    curveSegments: 12,
  });
  g.center();
  return g;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = word; } else line = test;
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

/** One 3D bubble: extruded body + a flat text plane on its front face. */
class Bubble {
  readonly group = new Group();
  private readonly body: Mesh;
  private readonly mat: MeshStandardMaterial;
  private readonly labelMat: MeshBasicMaterial;
  private readonly canvas = document.createElement('canvas');
  private readonly tex: CanvasTexture;
  private msg: Msg;
  private pal: Palette;

  constructor(geo: ExtrudeGeometry, pal: Palette, msg: Msg) {
    this.pal = pal;
    this.msg = msg;
    this.canvas.width = 512;
    this.canvas.height = 228;
    this.tex = new CanvasTexture(this.canvas);
    this.tex.colorSpace = SRGBColorSpace;
    this.tex.anisotropy = 4;
    this.mat = new MeshStandardMaterial({ color: pal.body, roughness: 0.42, metalness: 0 });
    this.body = new Mesh(geo, this.mat);
    this.group.add(this.body);
    this.labelMat = new MeshBasicMaterial({ map: this.tex, transparent: true, toneMapped: false });
    const label = new Mesh(new PlaneGeometry(W - 20, (W - 20) * (228 / 512)), this.labelMat);
    label.position.z = DEPTH / 2 + BEVEL + 0.6;
    this.group.add(label);
    this.paint();
  }

  /** Fade the whole bubble (body + text). Used for the background cloud so the main bubble stands out. */
  setOpacity(o: number) {
    this.mat.transparent = o < 1;
    this.mat.opacity = o;
    this.labelMat.opacity = o;
    this.mat.needsUpdate = true;
  }

  /** Clip this bubble (body + text) with the given planes. */
  clip(planes: Plane[]) {
    this.mat.clippingPlanes = planes;
    this.labelMat.clippingPlanes = planes;
  }

  /** Swap the body outline (tail left / right) without touching the text. */
  setGeometry(geo: ExtrudeGeometry) {
    this.body.geometry = geo;
  }

  set(msg: Msg, pal: Palette) {
    if (msg.tag === this.msg.tag && msg.msg === this.msg.msg && pal === this.pal) return;
    this.msg = msg;
    this.pal = pal;
    this.mat.color.copy(pal.body);
    this.paint();
  }

  private paint() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    const { width: w, height: h } = this.canvas;
    ctx.clearRect(0, 0, w, h);
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = this.pal.tag;
    ctx.font = '700 25px "Inter Variable", system-ui, sans-serif';
    ctx.fillText(this.msg.tag.toUpperCase(), 36, 52);
    ctx.fillStyle = this.pal.ink;
    // Shrink long messages until they fit in two lines (or the smallest size), so the bottom padding stays even.
    let size = 38;
    let lines: string[] = [];
    for (const s of [38, 34, 31]) {
      size = s;
      ctx.font = `600 ${s}px "Inter Variable", system-ui, sans-serif`;
      lines = wrapText(ctx, this.msg.msg, w - 72);
      if (lines.length <= 2) break;
    }
    const top = 52 + size * 1.45;
    lines.forEach((l, i) => ctx.fillText(l, 36, top + i * size * 1.2));
    this.tex.needsUpdate = true;
  }
}

// Normalised hero slots (u across, v down) keeping the left text column clear on desktop.
const SLOTS_WIDE: [number, number][] = [
  [0.58, 0.16], [0.78, 0.1], [0.93, 0.26], [0.64, 0.36], [0.97, 0.58], [0.68, 0.66],
  [0.8, 0.8], [0.95, 0.9], [0.7, 0.94], [0.6, 0.92], [0.98, 0.4], [0.5, 0.07],
];
const SLOTS_NARROW: [number, number][] = [
  [0.14, 0.93], [0.52, 0.9], [0.88, 0.94], [0.3, 1.0], [0.74, 1.02], [0.9, 0.97], [0.08, 0.97], [0.94, 0.12],
];

export async function mountScene(canvas: HTMLCanvasElement): Promise<void> {
  const cloudMsgs: Msg[] = JSON.parse(canvas.dataset.cloud ?? '[]');
  const anchorEls = Array.from(document.querySelectorAll<HTMLElement>('[data-bubble-anchor]'));
  const stageEls = Array.from(document.querySelectorAll<HTMLElement>('[data-stage-item]'));

  try { await document.fonts.load('600 38px "Inter Variable"'); } catch { /* fall back to system font */ }

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.localClippingEnabled = true;
  // Hides cloud bubbles below the top edge of the section after the hero, as if that section covered them.
  const occluder = document.getElementById('channels');
  const cover = new Plane();
  const camPos = new Vector3();
  const coverNormal = new Vector3();
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 10, 8000);
  scene.add(new AmbientLight(0xffffff, 1.9));
  const key = new DirectionalLight(0xffffff, 2.6);
  key.position.set(-320, 520, 900);
  scene.add(key);
  const fill = new DirectionalLight(0xffffff, 0.9);
  fill.position.set(500, -200, 400);
  scene.add(fill);

  // Palettes from design tokens.
  const surface = tokenColor('--color-surface');
  const ink = tokenColor('--color-ink');
  const inkCss = ink.getStyle();
  const palettes: Record<'blue' | 'white' | 'mint' | 'pale', Palette> = {
    blue: { body: tokenColor('--color-brand-500'), ink: surface.getStyle(), tag: tokenColor('--color-brand-100').getStyle() },
    white: { body: surface, ink: inkCss, tag: tokenColor('--color-brand-600').getStyle() },
    mint: { body: tokenColor('--color-mint-300'), ink: inkCss, tag: tokenColor('--color-ink-muted').getStyle() },
    pale: { body: tokenColor('--color-brand-100'), ink: inkCss, tag: tokenColor('--color-brand-600').getStyle() },
  };
  const order = ['white', 'blue', 'pale', 'mint', 'white', 'pale', 'blue', 'white', 'mint', 'pale', 'white', 'blue'] as const;

  const geos = [bubbleGeometry(1), bubbleGeometry(-1)];

  // Hero cloud.
  interface Cloud { b: Bubble; baseScale: number; z: number; phase: number; speed: number; bx: number; by: number }
  const cloud: Cloud[] = cloudMsgs.slice(0, SLOTS_WIDE.length).map((msg, i) => {
    const b = new Bubble(geos[i % 2] as ExtrudeGeometry, palettes[order[i % order.length] as keyof typeof palettes], msg);
    b.clip([cover]);
    b.setOpacity(CLOUD_OPACITY);
    scene.add(b.group);
    return { b, baseScale: 0.5 + rand(i + 1) * 0.42, z: (rand(i + 7) - 0.5) * 300, phase: rand(i + 3) * 6.28, speed: 0.7 + rand(i + 5) * 0.8, bx: 0, by: 0 };
  });

  // Traveler.
  const first = anchorEls[0];
  const startMsg: Msg = { tag: first?.dataset.tag ?? '', msg: first?.dataset.msg ?? '' };
  const traveler = new Bubble(geos[0] as ExtrudeGeometry, palettes.blue, startMsg);
  scene.add(traveler.group);

  // Reply: a second bubble (other speaker, mint, tail on the right) that pops in beside the traveler when its lane
  // scrolls into view, as if the assistant just answered. Placed by a `[data-reply-anchor]` element.
  const replyEl = document.querySelector<HTMLElement>('[data-reply-anchor]');
  const reply = replyEl
    ? new Bubble(geos[1] as ExtrudeGeometry, palettes.mint, { tag: replyEl.dataset.tag ?? '', msg: replyEl.dataset.msg ?? '' })
    : null;
  if (reply) { reply.group.visible = false; scene.add(reply.group); }
  const replyAnchor = { x: 0, y: 0, scale: 1 };
  let popStart = -1;
  const easeOutBack = (t: number) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

  // ---- Layout state -------------------------------------------------------
  let w = innerWidth, h = innerHeight, narrow = false, k = 1;
  let anchors: Anchor[] = [];

  function readAnchors() {
    if (replyEl) {
      const r = replyEl.getBoundingClientRect();
      replyAnchor.x = r.left + r.width / 2 + scrollX;
      replyAnchor.y = r.top + r.height / 2 + scrollY;
      replyAnchor.scale = Number(replyEl.dataset.scale ?? 1);
    }
    anchors = anchorEls.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 + scrollX,
        y: r.top + r.height / 2 + scrollY,
        scale: Number(el.dataset.scale ?? 1),
        msg: { tag: el.dataset.tag ?? '', msg: el.dataset.msg ?? '' },
        stage: el.dataset.stage !== undefined ? Number(el.dataset.stage) : null,
        hold: el.hasAttribute('data-hold'),
        side: el.dataset.side === 'assistant' ? 'assistant' : 'customer',
      };
    });
  }

  function layout() {
    w = innerWidth; h = innerHeight;
    narrow = w < 1024; // matches the lg: stacked layout
    k = clamp(w / 1200, 0.55, 1.15) * (narrow ? 0.72 : 1);
    renderer.setPixelRatio(Math.min(devicePixelRatio, narrow ? 1.5 : 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.z = h / 2 / Math.tan((FOV * Math.PI) / 360);
    camera.updateProjectionMatrix();
    const slots = narrow ? SLOTS_NARROW : SLOTS_WIDE;
    cloud.forEach((c, i) => {
      const s = slots[i % slots.length] as [number, number];
      c.bx = (s[0] - 0.5) * w;
      c.by = (0.5 - s[1]) * h;
      c.b.group.visible = i < slots.length;
    });
    readAnchors();
  }

  // ---- Input --------------------------------------------------------------
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', (e) => { pointer.tx = (e.clientX / w) * 2 - 1; pointer.ty = (e.clientY / h) * 2 - 1; kick(); }, { passive: true });
  addEventListener('scroll', () => kick(), { passive: true });
  addEventListener('resize', () => { layout(); kick(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) kick(); });
  let moRaf = 0;
  new ResizeObserver(() => { cancelAnimationFrame(moRaf); moRaf = requestAnimationFrame(() => { readAnchors(); kick(); }); }).observe(document.body);

  // ---- Frame --------------------------------------------------------------
  const tv = { x: 0, y: 0, s: 0, ready: false };
  // Traveler look: customer = blue, tail left; assistant = mint, tail right. When the speaker changes it flips
  // (squashes to a line, swaps outline, colour and text, then opens again).
  interface Look { side: Side; msg: Msg }
  let shown: Look | null = null;
  let pendingLook: Look | null = null;
  let flipT = 0;
  let flipping = false;
  const lookKey = (l: Look) => `${l.side}|${l.msg.tag}|${l.msg.msg}`;
  const applyLook = (l: Look) => {
    traveler.set(l.msg, l.side === 'assistant' ? palettes.mint : palettes.blue);
    traveler.setGeometry(geos[l.side === 'assistant' ? 1 : 0] as ExtrudeGeometry);
  };
  let stage = -2;
  let raf = 0;
  let last = performance.now();

  function setStage(next: number) {
    if (next === stage) return;
    stage = next;
    stageEls.forEach((el) => {
      const i = Number(el.dataset.stageItem);
      el.dataset.state = i < next ? 'done' : i === next ? 'active' : 'todo';
    });
  }

  function frame(now: number) {
    raf = 0;
    const dt = clamp((now - last) / 1000, 0, 0.05); // rAF time can precede the kick's `last`; never go negative
    last = now;
    const sy = scrollY;
    const damp = 1 - Math.exp(-dt * 7);
    pointer.x = lerp(pointer.x, pointer.tx, damp);
    pointer.y = lerp(pointer.y, pointer.ty, damp);

    // Hero cloud: float and parallax. The plane runs through the camera and the occluder's top edge,
    // so the clip lines up with the DOM edge at every depth.
    const edge = occluder ? occluder.getBoundingClientRect().top : h * 0.9;
    const limit = h / 2 - edge; // world y of the edge at z=0
    camPos.set(0, 0, camera.position.z);
    coverNormal.set(0, camPos.z, limit).normalize();
    cover.setFromNormalAndCoplanarPoint(coverNormal, camPos);
    const heroOn = edge > 0;
    cloud.forEach((c) => {
      const g = c.b.group;
      if (!heroOn) { g.visible = false; return; }
      const depth = (c.z + 150) / 300; // 0 far … 1 near
      const t = now * 0.001 * c.speed + c.phase;
      g.visible = true;
      g.position.set(
        c.bx + pointer.x * (14 + depth * 34),
        c.by + Math.sin(t) * 16 + sy * (0.25 + depth * 0.45) - pointer.y * (10 + depth * 22),
        c.z,
      );
      g.rotation.set(Math.cos(t * 0.8) * 0.14 - pointer.y * 0.18, Math.sin(t * 0.7) * 0.38 + pointer.x * 0.3, Math.sin(t * 0.5) * 0.06);
      g.scale.setScalar(c.baseScale * k);
    });

    // Traveler: follows the scroll line, steering x/scale between anchors.
    let travelerOn = false;
    // True while the traveler is still flying to its target or flipping. Keeps the loop alive even when the
    // bubble is off screen, so a fast scroll never leaves it stuck in an old colour or mid-flip.
    let travelerBusy = false;
    const n = anchors.length;
    if (n > 0) {
      const followY = sy + h * (narrow ? 0.62 : 0.5);
      let i = -1;
      for (let j = 0; j < n; j++) if ((anchors[j] as Anchor).y <= followY) i = j;
      const a0 = anchors[0] as Anchor, aN = anchors[n - 1] as Anchor;
      // `data-hold` lanes pin the bubble near the lane centre (so it never sits on the text or chips around it);
      // the funnel stages follow the scroll line smoothly.
      const HOLD = 16;
      const yOf = (an: Anchor) => (an.hold ? clamp(followY, an.y - HOLD, an.y + HOLD) : followY);
      let x = a0.x, sc = a0.scale, yv = yOf(a0);
      if (i >= n - 1) { x = aN.x; sc = aN.scale; yv = yOf(aN); }
      else if (i >= 0) {
        const a = anchors[i] as Anchor, b = anchors[i + 1] as Anchor;
        const e = smooth(((followY - a.y) / (b.y - a.y) - 0.42) / 0.16); // hold in lane, cross fast in the gap between sections
        x = lerp(a.x, b.x, e);
        sc = lerp(a.scale, b.scale, e);
        yv = lerp(yOf(a), yOf(b), e);
      }
      const yPage = clamp(yv, a0.y, aN.y);
      const targetX = x - scrollX - w / 2;
      const targetY = h / 2 - (yPage - sy);
      const targetS = narrow ? Math.max(sc, 0.85) * 0.66 * 1.05 : sc * k * 1.05;
      if (!tv.ready) { tv.x = targetX; tv.y = targetY; tv.s = targetS; tv.ready = true; }
      tv.x = lerp(tv.x, targetX, damp);
      tv.y = lerp(tv.y, targetY, damp);
      tv.s = lerp(tv.s, targetS, damp);

      const screenY = h / 2 - tv.y;
      travelerOn = screenY > -H && screenY < h + H;
      travelerBusy = Math.abs(tv.x - targetX) > 0.5 || Math.abs(tv.y - targetY) > 0.5 || Math.abs(tv.s - targetS) > 0.002;
      const bob = Math.sin(now * 0.0012) * 6;
      traveler.group.visible = travelerOn;
      traveler.group.position.set(tv.x + pointer.x * 10, tv.y + bob, 90);
      traveler.group.rotation.set(Math.cos(now * 0.0009) * 0.08 - pointer.y * 0.1, Math.sin(now * 0.001) * 0.2 + pointer.x * 0.18, 0);

      // Message + funnel stage follow the last anchor passed.
      const cur = anchors[Math.max(i, 0)] as Anchor;
      let st = -1;
      for (let j = 0; j <= i; j++) { const s = (anchors[j] as Anchor).stage; if (s !== null) st = s; }
      setStage(st);
      const want: Look = { side: cur.side, msg: cur.msg };
      if (!shown) { applyLook(want); shown = want; }
      else if (lookKey(want) !== lookKey(shown)) {
        if (want.side !== shown.side && !flipping) { flipping = true; flipT = 0; pendingLook = want; }
        else if (flipping) { pendingLook = want; if (flipT >= 0.5) applyLook(want); }
        else applyLook(want);
        shown = want;
      }
      let fx = 1;
      if (flipping) {
        const before = flipT;
        flipT += dt / 0.5;
        if (before < 0.5 && flipT >= 0.5 && pendingLook) applyLook(pendingLook);
        if (flipT >= 1) { flipping = false; flipT = 0; pendingLook = null; if (shown) applyLook(shown); }
        else fx = Math.max(0.02, Math.abs(Math.cos(flipT * Math.PI)));
      }
      traveler.group.scale.set(tv.s * fx, tv.s, tv.s);
      if (flipping) travelerBusy = true;
    } else {
      traveler.group.visible = false;
    }

    // Reply: pops (overshoot) shortly after its lane enters the viewport, and resets once it has left.
    let replyOn = false;
    if (reply) {
      const rsy = replyAnchor.y - sy;
      const offscreen = rsy < -H || rsy > h + H;
      if (offscreen) popStart = -1;
      else if (popStart < 0 && rsy > h * 0.15 && rsy < h * 0.9) popStart = now + 450;
      const p = popStart < 0 ? 0 : clamp((now - popStart) / 520, 0, 1);
      reply.group.visible = p > 0 && !offscreen;
      replyOn = !offscreen;
      if (reply.group.visible) {
        const rs = narrow ? Math.max(replyAnchor.scale, 0.85) * 0.66 * 1.05 : replyAnchor.scale * k * 1.05;
        const bob = Math.sin(now * 0.0012 + 2) * 6;
        reply.group.position.set(replyAnchor.x - scrollX - w / 2 + pointer.x * 10, h / 2 - rsy + bob, 90);
        reply.group.rotation.set(Math.cos(now * 0.0009 + 1) * 0.08 - pointer.y * 0.1, Math.sin(now * 0.001 + 1) * 0.2 + pointer.x * 0.18, (1 - p) * 0.25);
        reply.group.scale.setScalar(rs * easeOutBack(p));
      }
    }

    renderer.render(scene, camera);
    if ((heroOn || travelerOn || travelerBusy || replyOn) && !document.hidden) raf = requestAnimationFrame(frame);
  }

  function kick() {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  layout();
  document.documentElement.dataset.scene = 'on';
  kick();
}
