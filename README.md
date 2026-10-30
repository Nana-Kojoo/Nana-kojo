# Asare Elvis Kojo — personal site

An X-style (formerly Twitter) profile page: a live GitHub activity pin, posts, work, projects, blogs from Medium, an about thread, project pages, and a public Messages guestbook. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure, SEO and social-preview tags |
| `styles.css` | All styling (light and dark themes) |
| `script.js` | Content data, rendering, routing, guestbook |
| `api/medium.js` | Vercel serverless function that serves your Medium posts as JSON |
| `guestbook.sql` | One-time database setup for public messages |
| `vercel.json` | Tells Vercel this is a static site (no build) |
| `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest` | Hosting and SEO files |
| `assets/` | Profile photo, cover, icons, social-preview image |

## Editing

- **Your links and contact details:** the `SITE` object at the top of `script.js`. Set `whatsapp` to your number in international format, digits only (e.g. `233241234567`). WhatsApp buttons stay hidden until it's set.
- **Blogs:** set `medium` in `SITE` to your Medium username (without `@`). The Blogs tab then loads your latest posts live; until then it shows the local `NOTES`.
- **GitHub pin:** reads `githubUser` in `SITE` and loads your contribution graph, repos and languages live (cached for 30 minutes per visitor).
- **Posts, work and projects:** the `FEED`, `WORK` and `PROJECTS` arrays at the top of `script.js`.
- **Bio, location and joined date:** the profile section in `index.html`.

## Making Messages public

Until the guestbook is connected, messages are saved only in each visitor's own browser, and the page says so.

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run `guestbook.sql`.
3. From Project Settings → API, copy the Project URL and the `anon` public key into `GUESTBOOK` in `script.js`.

Delete unwanted messages from the Supabase Table Editor.

## Domain

The site assumes it lives at `https://nana-kojo.vercel.app/`. If you use a different address, replace it in `index.html` (canonical, `og:`, `twitter:` and JSON-LD tags), `robots.txt` and `sitemap.xml`.

## Preview and deploy

Preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Deploy on Vercel (recommended — `/api/medium` runs there). On another static host everything works except that Blogs falls back to a public RSS service. `404.html` uses root paths, so serve the site from the domain root.

Local preview with `python3 -m http.server` doesn't run `/api/medium`; Blogs uses the fallback there.
