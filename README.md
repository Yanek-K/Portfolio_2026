# Portfolio

Personal portfolio site — built as static HTML, CSS, and vanilla JavaScript, no framework or build step. Covers background, experience, and three in-depth project write-ups.

**Live site:** [yanek-k.com](https://yanek-k.com)

## Overview

A multi-page static site: a homepage covering expertise, education, experience, and selected work, plus a dedicated project page for each featured project (OutRun CTF, More Rocks, Premium Cameras) with screenshots and a breakdown of what was built.

## Structure

- index.html — homepage
- outrun-ctf.html — OutRun CTF project page
- more-rocks.html — More Rocks project page
- premium-cameras.html — Premium Cameras project page
- project-template.html — template for adding new project pages
- styles.css — shared stylesheet across all pages
- script.js — click-to-copy email functionality


## Features

- Fully static — no backend, no build tools, no dependencies
- Shared design system across all pages (colors, type, layout components) via a single `styles.css`
- Click-to-copy email (no `mailto:` links)
- Open Graph / Twitter card meta tags for link previews
- Cloudflare Web Analytics

## Running Locally

No build step required — just open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Deployment

Static hosting — the entire folder (HTML files, `styles.css`, `script.js`, and `assets/`) needs to be deployed together, since pages reference these as relative paths.

## Author

Built by [Yanek K.](https://yanek-k.com)
