# 🔗 LinkHub

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JS](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A beautiful, zero-dependency link-in-bio page. All your links in one stylish place.

## ✨ Features

- 🎨 **Modern glassmorphism card** on a dark gradient background
- ⚙️ **Single-file config** — edit `config.js`, reload, done
- 🌙 **Dark theme** with a customizable accent color
- 📱 **Mobile-first & responsive** — looks great on phones and desktops
- ✨ **Animated link buttons** — hover lift + accent glow
- 🔒 **Zero dependencies, no build step** — pure HTML, CSS & vanilla JS

## 🚀 Quick Start

No install, no build, no server needed.

1. Download or clone this repo.
2. Open `index.html` in any browser.

That's it. 🎉

## 🛠️ How to Customize

Everything editable lives in **`config.js`** — it's clearly marked and commented. Open it, change the values, reload the page.

| Key       | Type                          | Description                                                    |
|-----------|-------------------------------|----------------------------------------------------------------|
| `name`    | string                        | Your display name (big heading)                                |
| `tagline` | string                        | One-line bio under your name                                   |
| `avatar`  | string                        | Emoji (e.g. `"👨‍💻"`) or a single initial (e.g. `"A"`)         |
| `accent`  | string                        | Accent color — any valid CSS color (`"#4f8cff"`, `rgb()`, name) |
| `links`   | array of `{label, url, icon}` | Your link buttons; order = display order (top to bottom)       |

Example — adding a new link:

```js
links: [
  { label: "GitHub", url: "https://github.com/adilabdullah15", icon: "💼" },
  // add yours here 👇
  { label: "Portfolio", url: "https://my-portfolio.com", icon: "🌐" },
]
```

## 🌐 Deploy

### GitHub Pages

1. Push this folder to a GitHub repo (e.g. `adilabdullah15/linkhub`).
2. Go to **Settings → Pages**.
3. Under *Build and deployment*, set **Source** to `Deploy from a branch`, pick `main` and `/ (root)`.
4. Save — your site goes live at `https://adilabdullah15.github.io/linkhub/`.

### Render (Static Site)

1. Push this folder to a GitHub repo.
2. In the [Render dashboard](https://dashboard.render.com/), click **New → Static Site**.
3. Connect the repo; leave **Build Command** empty and set **Publish Directory** to `.` (the repo root).
4. Deploy — Render gives you a public `*.onrender.com` URL.

## 📁 Project Structure

```
linkhub/
├── index.html      # Semantic page structure (card, avatar, links, footer)
├── styles.css      # Dark gradient theme, glassmorphism, animations
├── app.js          # Renders CONFIG into the DOM (vanilla JS)
├── config.js       # 👈 EDIT THIS — name, tagline, avatar, accent, links
├── .gitignore      # Minimal ignores for a static site
├── LICENSE         # MIT
└── README.md       # You are here
```

## 🧰 Tech Stack

- **HTML** — semantic structure
- **CSS** — custom properties, glassmorphism, responsive design
- **Vanilla JavaScript** — config-driven rendering, no frameworks

## 👤 Author

**Adil Abdullah Khan** — BS Information Technology, Thal University Bhakkar, Pakistan

- 📧 Email: [adilabdullahkhan35@gmail.com](mailto:adilabdullahkhan35@gmail.com)
- 💼 GitHub: [@adilabdullah15](https://github.com/adilabdullah15)
