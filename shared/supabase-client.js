import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Publishable key -- safe to expose client-side, protected by RLS server-side.
export const supabase = createClient(
  "https://qhvveecnpkmkobhwgwof.supabase.co",
  "sb_publishable_xprNtaa037ftwhOZaO6oLQ_XwvB1V07",
);
