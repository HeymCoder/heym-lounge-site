# Heym Lounge site

Public landing page and member login for Heym Lounge. Deployed via GitHub Pages.

This is a separate, public repo on purpose: it holds only static site files (HTML/CSS/JS, no secrets beyond the publishable Supabase key, which is safe to expose client-side). The backend — database schema, edge functions, migrations — lives in the private `heym-lounge-backend` repo (renamed from `heym-projects` on 2026-07-26) and stays there.
