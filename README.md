# my-portfolio

My personal portfolio — [my-portfolio-suwubh.vercel.app](https://my-portfolio-suwubh.vercel.app)

Multi-page portfolio built with React + Vite. It uses React Router for
separate Home, About, Projects, Resume, and Contact pages, with a dark blue
theme and animated particle background.

## Stack

- React 18 + Vite
- React Router for page navigation
- React Bootstrap for layout and responsive UI
- tsParticles for the background stars
- EmailJS for the contact form
- react-github-calendar for the contribution graph

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build -> dist/
```

## Notes

Components live in `src/components`, grouped by page or shared function.
The resume PDF is stored at `src/assets/Subhankar_Satpathy.pdf`.
<!--
[`src/data.js`](src/data.js) — that's the only file to touch when something
needs updating. Components are split into `src/components` (shared bits) and
`src/sections` (the page sections). -->
