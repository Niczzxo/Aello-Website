<div align="center">
  <img alt="Aello. Open-source, privacy-first YouTube and YouTube Music clients for every screen." src="public/aello-icon.png" width="120">
  <h1>Aello — Website</h1>
  <p>Marketing site, changelog, and download page for <a href="https://github.com/Niczzxo/Aello-Native">Aello</a>, an open-source YouTube client.</p>
  <p>
    <a href="https://flow-tube.org">flow-tube.org</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/Niczzxo/Aello-Native">Aello (Android)</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/flowneuro/flow-desktop">Aello (Desktop)</a>
  </p>
</div>

---

## Stack

- **React 18** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS** for styling, with the theme defined as CSS variables in [`src/styles/globals.css`](src/styles/globals.css)
- **Framer Motion** for animation
- **React Router** for routing
- **Lucide** for icons

## Routes

| Path         | Page                                        |
| ------------ | ------------------------------------------- |
| `/`          | Home — hero, features, engine, FAQ         |
| `/changelog` | Release notes, split by platform            |
| `/about`     | Project background                          |
| `/privacy`   | Privacy policy                              |
| `/dmca`      | DMCA notice                                 |

## Getting started

Requires Node.js 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

## Project layout

```text
src/
├── components/
│   ├── layout/     Header, Section
│   ├── sections/   Home page sections (Hero, Features, NeuroEngine, …)
│   └── ui/         Button, reveal animations
├── pages/          Route-level pages
├── styles/         Global CSS and theme variables
└── lib/            Small helpers
public/             Static assets, content JSON, sitemap, robots
```

## Content

A few pages read their content from static JSON in `public/` instead of hardcoded
markup, so routine updates don't require touching component code.

| File | Used by | Purpose |
| --- | --- | --- |
| [`public/changelogs.json`](public/changelogs.json) | `/changelog` | Per-version release notes, one entry per platform build. |
| [`public/stats.json`](public/stats.json) | Header | Star and download counts (see below). |

## GitHub stats

Star and download counts are read from [`public/stats.json`](public/stats.json)
rather than the GitHub API, so no requests are made from the browser. The file
is refreshed hourly by the workflow in
[`.github/workflows/update-stats.yml`](.github/workflows/update-stats.yml),
which fetches the latest numbers and commits them back.

## Related repositories

- [Niczzxo/Aello-Native](https://github.com/Niczzxo/Aello-Native) — the Android app
- [flowneuro/flow-desktop](https://github.com/flowneuro/flow-desktop) — the desktop app (Rust, Tauri 2)

## License

GPL-3.0. See [LICENSE](LICENSE).

## Note

The website was built with the assisstance of claude code

## Credits

Parts of this website's redesign (the two-tone sections, tone-aware buttons,
navigation dropdowns and footer layout) were inspired by the design of
[Zen Browser's website](https://zen-browser.app).
