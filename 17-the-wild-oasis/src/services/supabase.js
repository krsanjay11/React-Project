import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gqklyjlwlffwmxalocpi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // test
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
