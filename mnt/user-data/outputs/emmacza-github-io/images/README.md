# images/

This folder is where your site's images live. It's empty except for this
file, on purpose — image files are meant to be real photos/graphics you
add yourself, not generated placeholders.

## Images the site expects

- **`profile-placeholder.jpg`** — used on `index.html` in the profile
  photo frame. Until you add a real photo here, that spot on the
  homepage will show a broken image icon in most browsers (the frame and
  caption around it will still look fine). Add any JPG or PNG with
  roughly a 4:5 (portrait) aspect ratio and name it exactly
  `profile-placeholder.jpg`, or update the `src` in `index.html` to match
  whatever filename you use.

- **`favicon.ico`** (optional) — a small icon shown in browser tabs. Add
  one here and uncomment the `<link rel="icon" ...>` line in the `<head>`
  of each HTML file to enable it.

## Adding more images

For blog posts, essays, or project photos, drop image files into this
folder (subfolders are fine too, e.g. `images/posts/`) and reference them
with a relative path:

```html
<img src="images/my-photo.jpg" alt="A real, specific description of the photo">
```

From a page inside `posts/` or `essays/`, remember to step back up a
folder first:

```html
<img src="../images/my-photo.jpg" alt="A real, specific description of the photo">
```

## A note on alt text

Every `<img>` needs descriptive `alt` text — this is how people using
screen readers understand what the image shows, and it's what displays
if the image fails to load. Avoid generic text like "image" or "photo";
describe what's actually in it, e.g. `alt="Emma reading on a park bench,
autumn leaves scattered on the ground."`
