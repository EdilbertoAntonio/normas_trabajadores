import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../services/supabaseClient'; 
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import '../assets/styles/login.css';

export function LoginForm () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); 

        if (loading) return;

        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setError("Correo o contraseña incorrectos.");
        } else {
            //console.log("¡Usuario conectado!"); // data.user
            navigate('/Norma36');
        }
        
        setLoading(false);
    };

    const visibilityIcon = (
        <i 
            className="material-symbols-outlined" 
            onClick={togglePasswordVisibility}
            title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
            {showPassword ? 'visibility' : 'visibility_off'}
        </i>
    );

    return(
        <form className="login-container" onSubmit={handleLogin}>

            <h1>Auditoría de Normas</h1>
            
            <div className="login-form-elements">
                
                <Label>Ingresa tu correo de auditor:</Label>
                <Input
                    type="email"
                    placeholder="auditor@ejemplo.com"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null); 
                    }}
                    required
                    error = {error}
                />

                <Label>Ingresa tu contraseña:</Label>
                <Input
                    type={showPassword ? "text" : "password"} 
                    placeholder="Tu contraseña"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) setError(null); 
                    }}
                    required
                    error = {error}
                    iconRight={visibilityIcon}
                />

                {error && <p className="message-error">{error}</p>}    

                <Button type="submit" disabled={loading}>
                    {loading ? 'Validando...' : 'Acceder'}
                </Button>

            </div>

        </form>
    )
}