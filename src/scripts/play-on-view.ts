// Marks `.sv` / `[data-play]` blocks with `data-in` while they are on screen. CSS holds their animations
// paused until then. Without JS the blocks simply stay in their final, static state.
const blocks = document.querySelectorAll<HTMLElement>('.sv, [data-play]');
if (blocks.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.toggleAttribute('data-in', e.isIntersecting)),
    { threshold: 0.35 },
  );
  blocks.forEach((el) => io.observe(el));
}
