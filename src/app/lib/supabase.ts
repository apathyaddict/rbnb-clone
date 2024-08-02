//https://supabase.com/docs/reference/javascript/initializing

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database in project settings >API > URL >
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);
