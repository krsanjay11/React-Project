import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gqklyjlwlffwmxalocpi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa2x5amx3bGZmd214YWxvY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4OTc2MDAsImV4cCI6MjAzNTQ3MzYwMH0.mueRgFysRu73eIO6-AIgnkl22c8Lorxz74shjA9eakM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
