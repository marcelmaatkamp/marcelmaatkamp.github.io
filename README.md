# Marcel Maatkamp - Portfolio

This is my personal portfolio and blog, built with [Astro](https://astro.build).

## Features

- **Modern Tech Stack**: Astro v5, TypeScript, Vanilla CSS.
- **Design System**: "Sparkling" dark theme with glassmorphism and vibrant gradients.
- **Content Collections**: Easy management of Blog posts, Projects, and Ebooks via Markdown.
- **Performance**: Static site generation for blazing-fast load times.
- **Legacy Support**: Previous site content archived in `legacy_site/`.

## Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start local server**:
    ```bash
    npm run dev
    ```

## Content Management

- **Blog**: Add markdown files to `src/content/blog/`.
- **Portfolio**: Add markdown files to `src/content/projects/`.
- **Ebooks**: Add PDFs/EPUBs to `public/ebooks/` and metadata markdown to `src/content/ebooks/`.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.
See `.github/workflows/deploy.yml` for details.
