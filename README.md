# Erin &amp; Ben — Wedding Website

A simple, elegant wedding website that lives on **GitHub Pages**. All of the
words on the site come from plain-text **Markdown** files, so you can update it
without writing any code.

The design (royal blue, elegant script, peony flowers, photo slideshow, and live
countdown) is inspired by the classic Zola wedding theme, and every "RSVP" button
links straight to your Zola RSVP form.

---

## ✏️ The 3 things you'll change most often

Everything below can be edited right on **GitHub.com** — click a file, click the
pencil ✏️ icon, make your change, and click **Commit changes**. The website
updates itself a minute or two later.

### 1. Words on a page

Each page is a `.md` (Markdown) file in the main folder:

| Page on the site | File to edit |
| ---------------- | ------------ |
| Home             | `index.md`     |
| Schedule         | `schedule.md`  |
| Travel           | `travel.md`    |
| FAQ              | `faq.md`       |
| Registry         | `registry.md`  |

Just type normally. A few handy formatting tricks:

```markdown
## A Big Section Title

A normal paragraph of text.

**Bold text**, *italic text*, and a [link to a website](https://example.com).

- A bulleted
- list of items
```

### 2. Names, date, location, and the RSVP link

Open **`_config.yml`** (the site's "control panel"). Change the values inside the
quotation marks:

```yaml
couple_short: "Erin & Ben"
wedding_date: "2027-03-19T16:00:00"   # the countdown clock uses this
wedding_date_display: "March 19, 2027"
location: "Austin, TX"
rsvp_url: "https://www.zola.com/wedding/erinandbenmarch19/rsvp"
```

> 💡 The `rsvp_url` is your Zola RSVP page. Every **RSVP** button on the site
> points to it, so you only have to set it in this one spot.

### 3. Photos in the slideshow

See **`assets/images/hero/README.md`** for step-by-step photo instructions. In
short: drop your pictures into `assets/images/hero/` and list them in
`_config.yml`.

---

## ➕ Adding a brand-new page

1. Create a new file in the main folder, e.g. `things-to-do.md`.
2. Paste this at the very top (this part is called the "front matter"):

   ```markdown
   ---
   layout: page
   title: Things To Do
   nav_order: 6
   permalink: /things-to-do/
   ---

   ## Start writing here
   ```

3. Write your content below it in Markdown.

That's it — the page **automatically appears in the top menu**. The `nav_order`
number controls where it sits in the menu (lower numbers come first). The
**RSVP** button always stays at the end of the menu.

To remove a page from the menu, delete its file (or remove its `nav_order` line).

---

## 🎨 Changing the colors

In `_config.yml`, edit the `colors:` section. Replace the hex codes (the
`#3464A6` style values) to re-skin the whole site:

```yaml
colors:
  primary: "#3464A6"       # main royal blue
  primary_dark: "#183B54"  # deep navy (footer)
  accent: "#C7305B"        # rose (links & buttons)
```

---

## 🚀 One-time setup (do this once)

To turn the website on:

1. Push this project to a GitHub repository.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

From then on, every time you save a change (a "commit") to the `main` branch, the
site rebuilds and publishes automatically. You can watch the progress on the
**Actions** tab.

Your site will be available at:
`https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 💻 Previewing on your own computer (optional)

You don't need this to use the site, but if you'd like to preview changes before
publishing:

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
2. In a terminal, from this folder, run:

   ```bash
   bundle install      # first time only
   bundle exec jekyll serve
   ```

3. Open <http://localhost:4000> in your browser.

---

## 🗂️ What's in this project

```
_config.yml          ← main control panel (names, date, RSVP link, colors)
index.md             ← Home page text
schedule.md          ← Schedule page text
travel.md            ← Travel page text
faq.md               ← FAQ page text
registry.md          ← Registry page text
assets/images/hero/  ← your slideshow photos go here
_layouts/            ← page templates (you usually won't touch these)
_includes/           ← header, footer, RSVP banner (advanced)
assets/css/          ← styling (advanced)
assets/js/           ← slideshow + countdown (advanced)
```

Happy wedding planning! 💍
