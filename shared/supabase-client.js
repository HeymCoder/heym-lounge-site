// supabase-js is vendored locally (./vendor/supabase-js.js) instead of
// imported from esm.sh at runtime -- see that file's header for why. It's a
// plain <script> loaded before this module, exposing window.supabase.
const { createClient } = window.supabase;

// Publishable key -- safe to expose client-side, protected by RLS server-side.
export const supabase = createClient(
  "https://qhvveecnpkmkobhwgwof.supabase.co",
  "sb_publishable_xprNtaa037ftwhOZaO6oLQ_XwvB1V07",
);
