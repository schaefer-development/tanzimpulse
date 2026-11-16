# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## SEO

Page titles, descriptions, the public site URL and event structured data are maintained in
`src/lib/seo.ts`. The root layout renders these as HTML metadata, including canonical URLs and
social previews. Seminar URLs use `/workshop/<slug>` or `/ausbildung/<slug>`; other prefixes
redirect permanently to the matching URL.

The sitemap includes static pages and seminars that have not ended. Its seminar modification
dates come from the CMS; static pages omit `lastmod` when no reliable date is available.
Free-text venue addresses are split into postal fields only when their structure is clear.

Run `npm test` for the URL, sitemap and structured data regression tests, followed by
`npm run lint` and `npm run check`.
