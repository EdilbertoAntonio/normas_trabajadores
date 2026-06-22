import { LoginForm } from "../components/LoginForm";
import '../assets/styles/login.css';

const Login = () => {
    return (

        <div className="login-page">

            <div className="login-background">
                <LoginForm/>
            </div>
            
        </div>

    )
}

export default Login;