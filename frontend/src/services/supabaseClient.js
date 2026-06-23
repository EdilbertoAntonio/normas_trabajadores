import { createClient } from '@supabase/supabase-js';

// Importamos las variables de entorno usando la sintaxis de Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Inicializamos y exportamos el cliente
export const supabase = createClient(supabaseUrl, supabaseKey);