# Holiday Landing Page Preview

This repo contains a static holiday landing experience with a parallax hero, greetings carousel, mini-game cards, guestbook panel, and shareable footer actions.

## How to preview locally

You can open the page directly or serve it to test parallax and responsive behavior:

1. From the repo root, start a lightweight server:
   ```bash
   python -m http.server 4173
   ```
2. Visit [http://localhost:4173](http://localhost:4173) in your browser to view the page.
3. Resize the viewport or use device emulation to verify the mobile-first layout, softened parallax, and touch-friendly controls.

## Quick start with linting and tests

Install the dev tools once, then run the scripts as needed:

```bash
npm install
npm run format   # Prettier check for JS and docs
npm run lint     # ESLint over the JavaScript helpers and tests
npm test         # Vitest suite for game logic
```

## Key files

- `index.html` — page structure, hero, carousel, game grid, guestbook, and footer content.
- `styles/theme.css` — theme palette and typography, frosted/ribbon/glow utility classes, layout styling, and responsive rules.

## Accessibility notes

- Includes a skip link for quick keyboard navigation to the main content.
- Footer share actions are presented as a semantic list with accessible text labels.
