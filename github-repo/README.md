# Salty C's Treasures — Website

Upscale coastal boutique site for **Salty C's Treasures**, handmade decoupage shells (magnets, ornaments, trinket dishes, wine stoppers). Domain target: **saltycstreasures.com**.

## Structure

```
index.html          Home
shop.html            Shop All (filterable grid, ?category=Magnets|Ornaments|Trinket+Dishes|Wine+Stoppers)
custom-order.html    Custom order request form
about.html           Brand story / process / values
contact.html         Contact form
assets/
  logo.png           Brand logo
  cart.js            Reference: cart data-shape used by the demo cart (localStorage)
  products.js         Reference: product catalog data used to seed the shop
```

Each HTML page is fully self-contained (fonts, scripts, and styles inlined) — open any file directly in a browser or deploy the folder as-is.

## Deploying to GitHub Pages

1. Push this folder's contents to the root of a GitHub repo (or a `docs/` folder).
2. In repo Settings → Pages, set the source to the branch/folder containing `index.html`.
3. Done — no build step required.

## What's real vs. mocked

- **Cart**: fully functional client-side cart (add/remove/qty, persisted in `localStorage`), shared across pages.
- **Checkout**: the "Checkout with Stripe" button is a placeholder — wire it to a real Stripe Checkout Session from a backend (Stripe Payment Links or a serverless function) before going live. No payment data is currently transmitted anywhere.
- **Custom order & contact forms**: currently show a client-side "submitted" confirmation only. Connect to a form backend (e.g. a serverless email function, Formspree, or Netlify Forms) to actually receive submissions.
- **Product photos**: every image on the site is a labeled drop-in placeholder. Replace the placeholder blocks with real product/lifestyle photography before launch.
- **Social links**: point to `tiktok.com/@saltycstreasures` — update if the handle differs.

## Design system

- Colors: cream `#FAF6EC` / `#F3ECDC` background, navy `#1C3A56` (text/brand), teal `#4C8C8A`, gold `#B98D4A` accents.
- Type: Cormorant Garamond (headings), Work Sans (body), loaded from Google Fonts.
- Fully responsive: single-column mobile layouts, collapsible nav below ~860px.

## Products in the demo catalog

Magnets, Ornaments, Trinket Dishes, Wine Stoppers — see `assets/products.js` for the exact list, names, and prices used to seed the Home and Shop pages.
