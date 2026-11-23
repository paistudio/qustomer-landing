---
name: threejs-3d
description: Add 3D (Three.js) to the landing page without wrecking Lighthouse. Use when user asks for 3D, WebGL, Three.js, a 3D hero, product model, or animated scene under src/components or src/pages.
---

# Three.js 3D in Astro

Project goal: Lighthouse 95+, 0 KB JS by default. 3D is heavy, so it must be opt-in, lazy and optional.

## Before starting
1. Read `DESIGN.md` and the `kill-slop` skill. 3D must serve the design, not decorate it.
2. `three` is NOT installed. Ask the user before `npm i three` (CLAUDE.md rule 5). Install `@types/three` as a dev dependency with it.
3. Confirm 3D is worth the cost. Prefer CSS 3D transforms, SVG or a pre-rendered video/image if the effect is simple.

## Architecture
- One section per file: `src/components/sections/<Name>3D.astro`.
- Scene code in `src/scripts/<name>-scene.ts` (plain TypeScript, no UI framework).
- Load it only when the section is visible, via dynamic `import()` inside an `IntersectionObserver`. Never import `three` at the top level of a page or layout.
- Use `<script>` in the `.astro` file (Astro bundles it) and keep it out of the critical path.

```astro
---
// src/components/sections/Hero3D.astro
import { Image } from "astro:assets";
import poster from "@/assets/hero-3d-poster.webp";
---
<section id="hero-3d" class="relative" aria-label="Product preview">
  <!-- Static poster = LCP element and no-JS / reduced-motion fallback -->
  <Image src={poster} alt="Product preview" widths={[640, 1280]} loading="eager" class="..." />
  <canvas data-scene class="absolute inset-0 size-full" aria-hidden="true"></canvas>
</section>

<script>
  const root = document.getElementById("hero-3d");
  const canvas = root?.querySelector<HTMLCanvasElement>("[data-scene]");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (root && canvas && !reduce) {
    const io = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const { mountScene } = await import("@/scripts/hero-scene");
      mountScene(canvas);
    }, { rootMargin: "200px" });
    io.observe(root);
  }
</script>
```

## Scene rules (`src/scripts/*-scene.ts`)
- Import only what is used: `import { WebGLRenderer, Scene, PerspectiveCamera, ... } from "three"` so tree-shaking works.
- `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))`.
- Size from the canvas parent with `ResizeObserver`; no fixed pixel sizes (CLS).
- Pause the render loop when off-screen (`IntersectionObserver`) or tab hidden (`document.hidden`).
- Render on demand if the scene is static; only loop for continuous animation.
- Dispose geometries, materials, textures and the renderer on teardown.
- Colors come from CSS tokens: read with `getComputedStyle(document.documentElement).getPropertyValue("--color-...")`. No hard-coded hex (CLAUDE.md rule 2).

## Assets
- Models: glTF/GLB, Draco or meshopt compressed, aim under 300 KB. Put in `public/models/`, load with `GLTFLoader` (from `three/addons/loaders/GLTFLoader.js`) via dynamic import.
- Textures: WebP/KTX2, max 1024px. Prefer baked lighting over many real-time lights.
- Always ship a static poster image (via `astro:assets`) that is the LCP element, so the 3D canvas never blocks LCP.

## Performance budget
- Initial page JS stays 0 KB; the 3D chunk loads after visibility, target under about 150 KB gzipped.
- Canvas must not cause layout shift: reserve space with `aspect-ratio`.
- Respect `prefers-reduced-motion` (show poster only).
- Fall back to the poster if WebGL is unavailable (`try/catch` around renderer creation).
- Mobile: lower pixel ratio, fewer objects, or skip 3D below a width breakpoint.

## Accessibility
- Canvas is decorative: `aria-hidden="true"`, meaning carried by the poster `alt` and surrounding text.
- No essential info or controls only inside the canvas. If interactive, add keyboard controls and visible focus.

## Finish
1. `npm run build` must pass clean.
2. Run the `seo-perf-audit` skill. Check LCP, CLS and total JS did not regress; if Lighthouse drops under 95, reduce the scene or fall back to the poster.
