# abstractraven.com

My personal site / portfolio. It's a single static page, no framework and no build step, just plain HTML, CSS and vanilla JavaScript. Whole thing is here, including the bits I'd still want to clean up.

Live at [abstractraven.com](https://abstractraven.com).

## Stack

- Plain HTML, CSS and vanilla JS (no framework, no bundler)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Deployed on Cloudflare Pages. Pushing to `main` rebuilds the site automatically

## Structure

- `index.html` — markup and content
- `style.css` — all the styling (dark theme)
- `script.js` — the project/skill data plus all the animations
- `assets/` — logo and project screenshots

## Animations

Most of the motion is plain CSS with a bit of vanilla JS:

- A code-token canvas behind the whole page
- The hero name "decodes" in and the tagline types itself out
- Project cards reveal on scroll and tilt towards the cursor
- Magnetic buttons and a staggered skills list

All of it respects `prefers-reduced-motion`, so it goes quiet for anyone who asks the system to reduce motion.

## Running it locally

No build step. Open `index.html` in a browser, or serve the folder:

```
python -m http.server
```

Then open `http://localhost:8000`.

## Notes / what I'd do differently

- Vanilla on purpose. I wanted it dependency-free, fast and easy to read.
- The project data is hardcoded in `script.js`. If the list grows I'd move it to a JSON file.
- The background canvas could become a shader someday if I want to push it further.

## AI assistance

Part of the animation code was written with help from an AI assistant and then reviewed, adjusted and integrated by me. I flag it here for the same reason I do in my other repos: I'd rather be upfront about it.

## License

MIT. Do what you want with it, attribution appreciated.