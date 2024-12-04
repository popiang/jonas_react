import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://obnccflrfiztvhyxycgx.supabase.co";
export const supabaseUrl = "https://kgmyinqxnwgignxuddsw.supabase.co";

// const supabaseKey =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibmNjZmxyZml6dHZoeXh5Y2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjQwODAsImV4cCI6MjA0NDkwMDA4MH0.LckIXN-1DykgMtIEbn6yCPkNI0ePUvQr0ZlDdY2AB88";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbXlpbnF4bndnaWdueHVkZHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMjcwMTAsImV4cCI6MjA0ODkwMzAxMH0.cqqsj4KNqMvepGrEEmSKASUcdhOSe7Wflc9ot1-P02Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
