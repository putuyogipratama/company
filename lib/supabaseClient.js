import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://qohrzntknjgzfmawxeem.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvaHJ6bnRrbmpnemZtYXd4ZWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTIzNDYsImV4cCI6MjA1NTc4ODM0Nn0.uC6eeE4SkiwRoI2k1hsyKk9s8pdhxS7cLZ-NLal3QqQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);