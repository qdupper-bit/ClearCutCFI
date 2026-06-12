# Clear Cut CFI — Website

Static site for **clearcutcfi.com**, built for GitHub Pages. Muted blue/grey design, SEO-ready (meta tags, schema.org structured data, sitemap), with founders-list email capture on every page.

---

## 1. Deploy to GitHub Pages (one time, ~10 min)

1. Create a new GitHub repository (e.g. `clearcutcfi-site`). Public or private both work with Pages.
2. Upload everything in this folder to the repo root (drag-and-drop on github.com works, or `git push`).
3. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → Save.
4. Custom domain: still in **Settings → Pages**, enter `clearcutcfi.com`.
5. At your domain registrar, add DNS records:
   - **A records** for `clearcutcfi.com` (apex) pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME record** for `www` → `YOUR-GITHUB-USERNAME.github.io`
6. Back in Settings → Pages, wait for the DNS check, then tick **Enforce HTTPS**.

> The `CNAME` file in this repo is already set to `clearcutcfi.com`. If you end up using a different domain, change that file **and** find-and-replace `clearcutcfi.com` across the HTML files (canonical/OG URLs and sitemap.xml).

> **Local preview:** links are root-relative (`/css/style.css`), so don't open files directly. From this folder run `python -m http.server` and visit http://localhost:8000.

---

## 2. Before launch — 4 required edits

1. **Email form (2 min).** Create a free form at https://formspree.io, copy your endpoint, and paste it into the **one line** at the top of `js/main.js` (`FORM_ENDPOINT`). Every signup form on the site uses it. Submissions include a `source` field telling you which page converted.
   - When you're ready for a real email platform (Kit, Mailchimp, etc.), you can point the forms there instead — but Formspree is plenty for collecting the founders list.
2. **Your six quiz files.** Drop your existing FOI quiz HTML files into `/quizzes/`, overwriting the placeholders, with these exact names:
   `foi-task-a.html`, `foi-task-b.html`, `foi-task-c.html`, `foi-task-d.html`, `foi-task-e.html`, `foi-task-f.html`
3. **About page bio.** Fill in the `[BRACKETED]` placeholders in `/about/index.html` (name, ratings, hours, short story). Search for `TODO`.
4. **Contact email.** Replace `hello@clearcutcfi.com` in `/contact/index.html` with your real address (and set that mailbox up). Also skim `/privacy/index.html` so it matches your actual tools.

A quick way to find everything: search the project for `TODO` and `YOUR_FORM_ID`.

---

## 3. SEO checklist after deploy

1. Verify the site in **Google Search Console** (use the Domain property type — it verifies via DNS).
2. Submit `https://clearcutcfi.com/sitemap.xml`.
3. Do the same in **Bing Webmaster Tools** (imports from Search Console in one click).
4. At launch, add real prices to the Course structured data in `/courses/index.html` (the `offers` blocks) and update the page copy.

What's already done for you: per-page titles/descriptions, canonical URLs, Open Graph + Twitter cards with a custom share image, schema.org markup (Organization, WebSite, FAQ, Courses, BlogPosting + breadcrumbs, LearningResource list), sitemap.xml, robots.txt, 404 page, mobile-responsive layout, fast static pages.

---

## 4. Adding a blog post (the SEO engine)

Each post lives in its own folder: `/blog/your-post-slug/index.html`.

1. Copy an existing post folder (e.g. `blog/cfi-lesson-plans-guide/`) and rename it to your new slug.
2. In the new `index.html`, update: `<title>`, meta description, canonical URL, OG tags, the JSON-LD block (headline, dates, URL), the breadcrumb, and the article content.
3. Add a card for it on `/blog/index.html` (copy an existing `post-card`).
4. Add the URL to `sitemap.xml`.
5. Optional: link to it from the homepage blog section and from related posts (internal links help rankings).

Keep targeting one keyword phrase per post (e.g. "CFI spin endorsement", "CFI checkride plan of action") with the phrase in the title, H1, URL slug, and first paragraph.

---

## 5. File map

```
index.html                  Homepage (hero, courses, quizzes, founder offer, FAQ)
courses/index.html          3 courses + waitlist CTAs (#foi, #every-cfi, #complete)
resources/index.html        All 6 FOI quizzes + official FAA references
blog/index.html             Blog listing
blog/<slug>/index.html      4 starter posts
quizzes/foi-task-[a-f].html PLACEHOLDERS — overwrite with your real quizzes
about/  contact/  privacy/  Supporting pages (have TODOs)
css/style.css               Design system (colors/type tokens at the top)
js/main.js                  FORM_ENDPOINT config + form handling + mobile nav
images/                     favicon + og share image
404.html  sitemap.xml  robots.txt  CNAME
```

Questions, tweaks, new pages — just ask.
