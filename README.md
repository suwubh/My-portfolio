# my-portfolio

My personal portfolio — [my-portfolio-suwubh.vercel.app](https://my-portfolio-suwubh.vercel.app)

Single-page site built with React + Vite. Dark theme, smooth-scroll layout,
an interactive terminal in the hero, and a WebGL shader background written
by hand (no Three.js).

## Stack

- React 18 + Vite
- Framer Motion for animation and scroll interactions
- Raw WebGL for the background shader
- EmailJS for the contact form
- react-github-calendar for the contribution graph

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build -> dist/
```

## Notes

All the content (projects, skills, achievements, links) lives in
[`src/data.js`](src/data.js) — that's the only file to touch when something
needs updating. Components are split into `src/components` (shared bits) and
`src/sections` (the page sections).
