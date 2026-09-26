# FitLog  Workout Library

A dark, no-nonsense gym companion for logging your training. Browse a library of lifts, check the details of each exercise, and lock up to five workouts into today's plan — everything persists locally, so your plan is waiting when you come back.

**Live:** https://assignment-06-pied.vercel.app

## Technologies Used

| Layer | Stack |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4, custom design tokens (Oswald display font) |
| State | React Context + `localStorage` |
| Feedback | react-hot-toast |
| Quality | ESLint 9 (eslint-config-next) |
| Hosting | Vercel (auto-deploy from GitHub) |

## Key Features

1. **Workout library** — streams exercises from the FitLog API with a "Loading workouts…" state, empty/error panels with retry, and sorting by duration, calories, or rating through a custom dropdown.
2. **Exercise details** — `/workouts/[id]` renders image, specs, instructions, and target muscles, with add-to-plan and save-for-later actions plus toast feedback and a real 404 for unknown ids.
3. **My Plan** — plan up to five lifts per day with live stats (exercises / minutes / calories), mark-as-done tracking, a separate Saved list, and independent sorting per tab.
4. **Persistent state** — plan, saved, and completed workouts survive reloads via `localStorage` (`fitlog-plan`, `fitlog-saved`, `fitlog-done`), enforced with cap and dedupe rules in one shared context.
5. **Resilient & polished UX** — API retries with backoff, a root error boundary with retry button, custom 404 pages for unknown routes and missing workouts, responsive 1/2/3-column layouts, and an active-item navbar.
