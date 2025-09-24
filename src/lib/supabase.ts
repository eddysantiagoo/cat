import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zukqxwhrhrpghzctoeqc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a3F4d2hydHJwaGd6Y3RvZWNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NzE1NDQsImV4cCI6MjA0MzQ0NzU0NH0.P6wH1JgDk2wVfLvqd-TIF-JUyZGZmC64nH42zUxMxk8'

export const supabase = createClient(supabaseUrl, supabaseKey)
