// Single source of truth for the Supabase project's public identifiers --
// safe to expose client-side, protected by RLS/edge-function auth
// server-side. Split out from supabase-client.js so pages that only need a
// raw fetch() to an edge function (like the public interest form) don't
// have to load the full vendored supabase-js bundle just for these two
// constants.
//
// Plain script, not a module -- ES module imports are blocked by the
// browser over file://, which is exactly how this site gets opened for a
// quick local look (no server, just double-click the file). Every page
// loads this via a plain <script src> before anything that needs these,
// same as vendor/supabase-js.js already does for window.supabase.
const SUPABASE_URL = "https://qhvveecnpkmkobhwgwof.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xprNtaa037ftwhOZaO6oLQ_XwvB1V07";
const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
