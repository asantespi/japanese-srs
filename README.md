# 日本語 SRS — N2 Grammar Drills

A tiny, self-contained web app for reviewing the N2 grammar points from your chapter notes,
using a light spaced-repetition schedule (new → 2 days → 5 days → 10 days → longer).

No backend, no build step, no account. Everything (your progress) is stored in your browser's
`localStorage`, on whichever device you use it on.

## How a drill works

Each card shows:
1. The grammar pattern and its core meaning
2. Two natural example sentences (with furigana)
3. An English prompt to translate into Japanese

You write your own answer, tap **Show answer** to reveal a model answer + a short usage note,
and then self-grade:

- ✅ **Natural** — advances to the next interval
- 🔁 **Awkward** — grammatically fine but not natural; comes back tomorrow
- ❌ **Wrong** — resets progress on this point; comes back tomorrow

## Running it locally

No install needed — it's plain HTML/CSS/JS. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

(Opening `index.html` directly by double-clicking also works in most browsers, since there's no
server-side code — everything runs client-side.)

## Deploying to GitHub Pages (so you can use it on your phone)

1. Create a new GitHub repository (can be public or private) and push this folder's contents to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub will give you a URL like `https://<username>.github.io/<repo-name>/` within a
   minute or two.
5. Open that URL on your phone's browser. On iOS Safari / Android Chrome you can add it to your
   home screen (Share → Add to Home Screen) for an app-like icon.

## Editing the grammar content

All grammar points live in `data.js` as a plain array (`GRAMMAR_POOL`). Each entry has a title,
meaning, two example sentences, a production prompt, a model answer, and a short note. Add new
chapters by appending new objects to that array — no other code changes needed.

## Resetting progress

Settings → Reset all progress. This only affects the browser/device you're using — progress isn't
synced between devices.
