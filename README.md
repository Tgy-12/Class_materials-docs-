# Class Materials Docs — MIT 2nd Year

This is a course website built for my Web Design and Web Development individual assignment at **Mekelle Institute of Technology (MIT)**, Department of Information Technology. It's meant to give 2nd-year IT students one place to log in and find their course materials and instructors, instead of digging through scattered Telegram messages.

**Live on localhost:** `html h_4 files/index.html`

## What it does

- Students **register** and **log in** to get access
- The dashboard lists the batch's courses: **PLP (Programming Logic & Principles)**, **Software Engineering**, **ADMS (Advanced Database Management Systems)**, **Data Communication & Networking**, and **Web Design & Development**
- Clicking a course takes you to its details page (courses not yet filled in show a placeholder: *"Please select a course from the Home page to view its details here."*)
- The actual course documents live on Telegram, so each course links out to the relevant Telegram content instead of duplicating file storage
- A **Contact** page with ways to reach me — Facebook, email, and Telegram
- Responsive layout — the home dashboard adjusts down to mobile widths

## Pages

| Page | What's on it |
|---|---|
| `index.html` | Home dashboard — welcome message + course cards |
| `me.html` | Assignment cover page (university/department header, my name and ID) |
| `contact.html` | Contact info (Facebook / Email / Telegram) |
| Course pages | Individual course details, or a placeholder if not yet added |

## Built with

Plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Structure

```
Class_materials-docs-/
├── Css_files/          # Stylesheets
├── html f_4 project/   # Pages: home, login, register, contact, course pages
├── js_files/            # Login/register logic, redirects
└── prof_pic/            # Images used across the site
```

## Running it

```bash
git clone https://github.com/Tgy-12/Class_materials-docs-.git
cd Class_materials-docs-
```

Open the HTML files directly, or serve the folder with something like VS Code's Live Server for the login/redirect flow to work properly.

## Why I built it

This started as a course assignment, but I built it like something people would actually use — a student logs in, sees their courses, gets to the material fast. It's still a work in progress: some course pages don't have content wired up yet.

## Author

**Tsegay Araya**
GitHub: [@Tgy-12](https://github.com/Tgy-12)

## Status

Assignment submission / personal project — actively being filled out with more course content.
