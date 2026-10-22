# Asymmetry website

Website for **Asymmetry**, the Georgetown Undergraduate Economics Review.

It's a plain static site (HTML, CSS, a little JavaScript) with no build step.

## Preview locally

Open `index.html` in a browser, or run:

```sh
python3 -m http.server 8000
```

and visit http://localhost:8000.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, set the source to the `main` branch, root folder. The site will be live at `https://<your-username>.github.io/asymmetry-website/`.

## Structure

- `index.html` – the single-page site (lead story, Latest, About, Write for us)
- `assets/style.css` – styles
- `assets/main.js` – footer year
- `assets/favicon.svg` – placeholder logo mark
