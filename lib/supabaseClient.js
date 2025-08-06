import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://joveouarolonmrhkxtey.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvdmVvdWFyb2xvbm1yaGt4dGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NTk4NDcsImV4cCI6MjA3MDAzNTg0N30.TME1aR7udleJ4K8OZddxUCOsUrbaDPTGTt9HHGaid0Y";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);