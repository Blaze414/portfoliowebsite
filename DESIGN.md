# Design

<!-- impeccable:design-schema 1 -->

## World

"Engineering Spec Sheet" — the site reads like a component datasheet/blueprint, not a rounded SaaS dev-portfolio card grid. Chosen as a grounded pick (no image-gen or decision-page infra available in this session — disclosed to the user rather than run through the full concept-seed/decision-page ceremony) over the category rut of dark+blue-gradient glassmorphism portfolios.

## Palette

- Light: warm graph-paper cream ground (`--background: 42 38% 95%`), ink-navy text, signal-orange accent (`--primary: 16 100% 50%`).
- Dark: deep blueprint navy ground (`--background: 215 48% 8%`), pale cyan-white text, same signal-orange accent.
- Strategy: Committed — one saturated accent (orange) carries CTAs, hover states, and spec labels against a restrained ground.
- Extended tokens: `--trace` (blueprint tracing cyan/blue), `--grid-line` (the literal graph-paper grid), `--slate-gray` / `--dark-slate` for secondary text.

## Type

- Display: Big Shoulders Display (condensed, industrial — steel-signage character) for all H1/H2 headings, via `font-display`.
- Body/UI: Archivo (grotesk, not on the AI-cliché list).
- Spec/measurement labels: JetBrains Mono, uppercase, tracked wide — earned by the world (literal spec-sheet annotations), not a "technical" costume.

## Component language

- Sharp corners (`--radius: 0.125rem`), hairline borders, no soft rounded-2xl cards.
- `.spec-card` — the datasheet component-box container: hairline border, crosshair registration mark on hover (`.crosshair`, the page's one recurring signature glyph).
- `.dim-rule` — a CAD-style dimension line with tick end-caps, for dividers.
- Section headers: heading + inline mono "DOC/<SECTION>" label at the same baseline (not a kicker above the heading — that's a banned default).
- Background: literal graph-paper grid (`background-image` two-axis hairline grid) — legitimate here because the world IS a blueprint/measurement surface, not decoration.
- Nav/footer render stack, GitHub, and section links as spec-index entries (`01/Projects`, `DOC/CERTS · 09`, `REV 2026.08`).

## Motion

- Signature moment: hero particle-assembly (`ParticleName`) — the name scatters in from noise and resolves into type, then repels from the cursor. `prefers-reduced-motion` skips straight to the resolved state.
- `draw-in` keyframe (scaleX 0→1, ease-out) reserved for dimension-rule reveals.
- `Magnetic` (`src/components/ui/magnetic.tsx`, adapted from 21st.dev/@ibelick/magnetic) — CTAs and the nav GitHub link pull toward the cursor within range, spring-eased.
- `Spotlight` (`src/components/ui/spotlight.tsx`, adapted from 21st.dev/@ibelick/spotlight, retinted to `--primary`) — a cursor-follow highlight on project/cert spec-cards, reads as a loupe sweeping the drafting table, not a decorative glow.
- Section content still uses restrained fade/slide-up on scroll.
- Buttons/links get `active:scale-[0.96]` press feedback (better-ui: never below 0.95).

### Known fix: ParticleName reliability

`requestAnimationFrame` is paused for backgrounded/non-visible tabs in every real browser (confirmed while polishing — not just a test-harness quirk). The particle hero used to start particles fully off-canvas and rely on rAF to fly them in; on a backgrounded tab that never resumed, the hero rendered blank indefinitely. Fixed: `buildTargets()` now draws synchronously the moment it has valid glyph data (self-healing retries on font-load/resize too), and particles start with a small jitter around their target instead of off-canvas — so the first paint is always legible, rAF only adds the settle-in/idle drift on top.

## Preserved from prior build

- Stack: Vite + React + TypeScript + Tailwind + shadcn/radix + framer-motion.
- All real content: bio, experience, education, project list, certifications, contact details.
- Light/dark toggle (next-themes), responsive nav with mobile drawer.

## Open items

- Full impeccable finish-reviewer / documenter subagent pipeline and image-gen decision page were not available in this session; this file stands in as the lighter manual record. Re-run `$impeccable audit` or `$impeccable polish` for a formal finish pass if desired.
