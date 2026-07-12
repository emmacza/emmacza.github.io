# emmacza.github.io

This is the source code for a personal website — built with plain HTML,
CSS, and JavaScript, no frameworks or build tools. This README is written
for someone with limited web development experience, so it explains
things in more detail than a typical README would.

---

## 1. What each file and folder does

```
/
├── index.html          Homepage: intro, bio, selected projects, latest
│                        writing, "currently" section, and links.
├── about.html           Longer biography, interests, skills, timeline.
├── projects.html        Full list of projects, as reusable cards.
├── blog.html             Index of short blog posts.
├── essays.html            Index of longer essays.
├── cv.html                 Printable CV / resumé.
├── contact.html             Email, socials, and an optional contact form.
├── posts/
│   └── example-post.html    One real, filled-out example blog post.
├── essays/
│   └── example-essay.html   One real, filled-out example essay.
├── css/
│   └── style.css              All the site's styling, in one file.
├── js/
│   └── main.js                 All the site's JavaScript, in one file.
├── images/
│   └── README.md                 Notes on what images the site expects.
└── README.md                       This file.
```

Every page (`index.html`, `about.html`, etc.) is a complete, standalone
HTML file. They all link to the same `css/style.css` and `js/main.js`, so
editing those two files changes every page at once. There is no database,
no templating system, and no build step — what you see in each `.html`
file is exactly what gets shown in the browser.

---

## 2. How to preview the website locally

You don't need to install anything special. Two options:

**Option A — just open the file.**
Double-click `index.html` (or right-click → Open With → your browser).
This works for browsing around, though a few things (like some browsers'
handling of relative links) can behave slightly differently than on a
real server. It's fine for quick checks.

**Option B — run a tiny local server (recommended).**
If you have Python installed (most Macs and Linux machines do; Windows
users can install it from python.org), open a terminal in this folder
and run:

```
python3 -m http.server
```

Then open `http://localhost:8000` in your browser. Press Ctrl+C in the
terminal to stop the server when you're done. This more closely matches
how the site will behave once it's live on GitHub Pages.

---

## 3. How to publish it through GitHub Pages

1. Create a new repository on GitHub.
2. Upload all the files and folders in this project to that repository
   (keeping the folder structure exactly as it is — `css/`, `js/`,
   `posts/`, `essays/`, and `images/` should all stay as folders, not be
   flattened).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set the source to **Deploy from a
   branch**, choose your main branch (usually `main`), and folder `/
   (root)`.
5. Save. GitHub will give you a URL where the site is published —
   usually within a minute or two.

---

## 4. How to connect it to emmacza.github.io

GitHub Pages has a special rule: if your repository is named exactly
`YOUR-GITHUB-USERNAME.github.io`, it automatically publishes at
`https://YOUR-GITHUB-USERNAME.github.io` — no extra configuration needed.

So, to publish at `emmacza.github.io`:

1. Make sure the GitHub account/organisation is named `emmacza`.
2. Name the repository exactly `emmacza.github.io` (case doesn't matter,
   but the spelling and the `.github.io` part do).
3. Follow the GitHub Pages steps above.
4. The site will be live at `https://emmacza.github.io` once the first
   deployment finishes.

You do not need a custom domain for this — `emmacza.github.io` works out
of the box with a repository of that exact name.

---

## 5. How to edit the site

Open any `.html` file in a text editor (VS Code, Sublime Text, or even
Notepad/TextEdit all work). HTML files are just text — find the part you
want to change, edit it, save, and refresh your browser (or re-upload to
GitHub) to see the update.

Look for comments in the code that look like this:

```html
<!-- REPLACE this with your own text -->
```

These mark the spots that are meant to be edited. Placeholder text like
`YOUR NAME`, `YOUR EMAIL`, `YOUR GITHUB URL`, and `YOUR LINKEDIN URL`
appears throughout every page — search for these terms across all files
and replace them with your real details. Most editors have a "find in
files" or "search across project" feature that makes this quick.

---

## 6. How to add a new project

1. Open `projects.html`.
2. Find the comment block titled **"HOW TO ADD A NEW PROJECT"**.
3. Copy one whole `<article class="card">...</article>` block.
4. Paste it into the `<div class="grid grid-3">` section.
5. Edit the title, status stamp, description, tags, and links.

If you want the project to also appear in the "Selected projects"
section on the homepage, copy the same card into `index.html` as well
(that section only shows a handful of highlights, so you don't have to
duplicate every project there — just your favourites).

---

## 7. How to add a new blog post

1. Copy `posts/example-post.html` to a new file in the `posts/` folder,
   e.g. `posts/my-second-post.html`.
2. Open your new file and update the `<title>`, the date, the tags, the
   `<h1>`, and the body paragraphs inside `<div class="prose">`.
3. Leave the `../css/style.css` and `../js/main.js` paths exactly as they
   are — the `../` is required because files in `posts/` sit one folder
   deeper than the main pages.
4. Open `blog.html`, copy one `<div class="list-card">` block, and paste
   it in above the others (newest posts go at the top). Update its date,
   title, link (pointing to your new file), and summary.

---

## 8. How to add an essay

Exactly the same process as a blog post, but using the `essays/` folder
and `essays.html` instead of `posts/` and `blog.html`. Start from
`essays/example-essay.html`.

---

## 9. How to change colours and typography

Open `css/style.css` and look at the very top of the file, in the
`:root { ... }` block — this is section 1, "DESIGN TOKENS". Every colour,
font, spacing value, and border style used across the whole site is
defined there as a variable, with comments explaining what each one
does. For example:

```css
--color-accent: #7d6a94;   /* dusty / muted purple — the main accent */
```

Change the hex value and every button, link-hover state, and highlight
that uses `--color-accent` updates automatically, everywhere on the
site. You don't need to hunt through individual pages.

Fonts work the same way, via `--font-display`, `--font-body`, and
`--font-mono` near the top of the same block. The file also has a
comment explaining how to optionally swap in a free Google Font if you
want something more distinctive than the built-in system fonts.

---

## 10. How to add a PDF CV

1. Export your CV as a PDF and name the file `cv.pdf`.
2. Place it in the root of the project (the same folder as `index.html`).
3. That's it — the "Download PDF" button on `cv.html` already points to
   `cv.pdf`, so it will work automatically once the file exists.

Until you add a real PDF, that button will lead to a "file not found"
page. The "Print this page" button next to it works immediately with no
setup, and lets someone save the on-page CV as a PDF via their browser's
print dialog.

---

## 11. How to use images with relative paths

All image references in this site use **relative paths** — meaning
"relative to the file that's referencing them" rather than a full web
address. This matters because it's what makes the site portable (it
works the same on your computer, on GitHub Pages, or anywhere else).

- From a page in the root folder (like `index.html`), reference an image
  as `images/my-photo.jpg`.
- From a page inside `posts/` or `essays/`, you need to step back up a
  folder first: `../images/my-photo.jpg`.

If an image doesn't show up, the most common cause is a wrong relative
path — double check whether the page referencing it lives in the root
folder or one folder deeper (like `posts/` or `essays/`), and adjust the
number of `../` accordingly. See `images/README.md` for more detail.

---

## 12. How to check that links work

Before publishing changes:

- Click through every link in the navigation menu on a couple of
  different pages, including from inside `posts/` and `essays/` (these
  are the most likely place for a broken relative link, since they sit
  one folder deeper).
- Check any link you added yourself — GitHub URLs, LinkedIn URLs, email
  `mailto:` links, and links inside project cards.
- If you're using the local server method from section 2, broken links
  will 404 in the browser, which is an easy way to catch mistakes before
  they go live.

There's no automated link-checker built into this project — for a site
this size, manually clicking through is genuinely the simplest approach.

---

## 13. The limitations of static contact forms

GitHub Pages only serves static files — HTML, CSS, JS, images — with no
server-side code running behind them. That means a plain HTML `<form>`
has nowhere to actually send its data; it can't send an email by itself.

The form on `contact.html` is included as a layout example, with a clear
on-page notice explaining this. If you want a working contact form, you
need to connect it to a third-party form service (Formspree, Getform,
Basin, and similar services all offer free tiers for exactly this
purpose) and update the form's `action` attribute to the endpoint they
give you. Until then, the `mailto:` email link on the same page is the
one guaranteed way for people to reach you.

---

## 14. How to make future changes without breaking the site

A few habits that will save you time:

- **Change one thing, then check it.** Especially for `css/style.css`,
  since it affects every page at once — a change that looks fine on the
  homepage might have an unexpected effect elsewhere.
- **Keep the file structure intact.** If you move or rename `css/`,
  `js/`, `posts/`, or `essays/`, every page's links to them will break,
  since they use relative paths based on the current structure.
- **Copy existing patterns rather than writing from scratch.** Adding a
  new project, post, or essay is designed to be "copy an existing block,
  edit the text" — this avoids accidentally breaking the HTML structure
  or the CSS classes that give things their styling.
- **Preview locally before publishing** (see section 2), especially for
  bigger changes.
- **Keep a backup or use version control properly.** If you're already
  uploading through Git/GitHub, each commit is effectively a backup — if
  something breaks, you can look at the history and see exactly what
  changed.

---

That's everything needed to run, publish, and maintain this site. Most
of the day-to-day editing — adding a project, a post, or an essay — comes
down to copying an existing block of HTML and changing the text inside
it, which is intentional: the goal was a site that's easy to keep adding
to over time, not just a one-time template.
