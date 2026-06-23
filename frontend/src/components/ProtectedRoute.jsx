import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export function ProtectedRoute({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Comprobar si hay una sesión activa al cargar el componente
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // 2. Escuchar en tiempo real si el estado cambia (por ejemplo, si hace Logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        // Limpiar la suscripción cuando el componente se desmonte
        return () => subscription.unsubscribe();
    }, []);

    // Mientras Supabase averigua si el usuario está conectado, mostramos una pantalla de carga
    // Esto evita que una persona logueada sea redirigida por error al login durante un milisegundo
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>Verificando credenciales...</p>
            </div>
        );
    }

    // Si no hay sesión activa, lo mandamos al Login
    if (!session) {
        return <Navigate to="/Login" replace />;
    }

    // Si hay sesión, renderizamos la página que intentaba ver (el componente hijo)
    return children;
}