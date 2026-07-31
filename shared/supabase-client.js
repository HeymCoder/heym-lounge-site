// supabase-js is vendored locally (./vendor/supabase-js.js) instead of
// imported from esm.sh at runtime -- see that file's header for why. It's a
// plain <script> loaded before this one, exposing window.supabase as the
// SDK namespace (createClient, GoTrueClient, ...), not a client instance.
//
// Plain script, not a module (see config.js for why) -- SUPABASE_URL and
// SUPABASE_PUBLISHABLE_KEY come from config.js, loaded via its own
// <script src> before this one; both are plain top-level `const`s, so
// they're already in scope here without an import.
//
// Named supabaseClient, not supabase -- window.supabase already exists (the
// SDK namespace above), and declaring a same-named top-level const in a
// later classic script does not reliably shadow it for every later script
// tag's reads of the bare identifier. Different name sidesteps the
// ambiguity entirely instead of relying on that edge case.
const { createClient } = window.supabase;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
