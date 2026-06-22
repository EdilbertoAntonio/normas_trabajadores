import React from "react";
import '../assets/styles/login.css';

export function LoginForm ({}) {
    return(
        <form className="login-container">

            <h1>Auditoria de Normas</h1>
            
            <div className="login-form-elements">
                <p>Ingresa tu usuario: </p>
                <input
                    type="text"
                    placeholder="Auditor 1234"
                    id="usuario"
                />

                <p>Ingresa tu contraseña: </p>
                <input
                    type="text"
                    placeholder="Tu contraseña"
                    id="usuario"
                />

                <button type="submit">
                    Acceder
                </button>

            </div>

        </form>
    )
}