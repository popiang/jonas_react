import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://obnccflrfiztvhyxycgx.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibmNjZmxyZml6dHZoeXh5Y2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjQwODAsImV4cCI6MjA0NDkwMDA4MH0.LckIXN-1DykgMtIEbn6yCPkNI0ePUvQr0ZlDdY2AB88";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
