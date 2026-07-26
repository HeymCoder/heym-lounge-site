// supabase-js is vendored locally (./vendor/supabase-js.js) instead of
// imported from esm.sh at runtime -- see that file's header for why. It's a
// plain <script> loaded before this module, exposing window.supabase.
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";

const { createClient } = window.supabase;

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
