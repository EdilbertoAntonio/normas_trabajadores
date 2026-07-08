import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../services/supabaseClient'; // Ajusta la ruta según donde lo guardaste
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import '../assets/styles/login.css';

export function LoginForm () {
    // 1. Estados para guardar lo que el usuario escribe
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // 2. Función que se ejecuta al presionar "Acceder"
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setLoading(true);
        setError(null);

        // 3. Llamada a Supabase para iniciar sesión
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setError("Correo o contraseña incorrectos.");
        } else {
            console.log("¡Usuario conectado!"); // data.user
            // Aquí agregaremos la redirección a /Carga más adelante
            navigate('/Norma36');
        }
        
        setLoading(false);
    };

    const visibilityIcon = (
        <i 
            className="material-symbols-outlined" 
            onClick={togglePasswordVisibility}
            // Añadimos un título para accesibilidad
            title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
            {showPassword ? 'visibility' : 'visibility_off'}
        </i>
    );

    return(
        <form className="login-container" onSubmit={handleLogin}>

            <h1>Auditoría de Normas</h1>
            
            <div className="login-form-elements">
                
                {/* <p>Ingresa tu correo de auditor: </p> */}
                <Label>Ingresa tu correo de auditor:</Label>
                <Input
                    type="email"
                    placeholder="auditor@ejemplo.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* <p>Ingresa tu contraseña: </p> */}
                <Label>Ingresa tu contraseña:</Label>
                <Input
                    type={showPassword ? "text" : "password"} 
                    placeholder="Tu contraseña"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    iconRight={visibilityIcon}
                />

                {error && <p className="message-error">{error}</p>}    

                <Button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Acceder'}
                </Button>

            </div>

        </form>
    )
}