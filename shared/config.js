// Single source of truth for the Supabase project's public identifiers --
// safe to expose client-side, protected by RLS/edge-function auth
// server-side. Split out from supabase-client.js so pages that only need a
// raw fetch() to an edge function (like the public interest form) don't
// have to load the full vendored supabase-js bundle just for these two
// constants.
export const SUPABASE_URL = "https://qhvveecnpkmkobhwgwof.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xprNtaa037ftwhOZaO6oLQ_XwvB1V07";
export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
