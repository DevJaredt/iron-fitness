import "./login.css"
import { useState } from "react";
import { success, error } from "../../utils/toast";
import { post } from "../../utils/axios";
import { Parameters } from "./../../utils/constants";
import { setData } from "../../utils/localStorage";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailRegistration, setEmailRegistration] = useState("");
    const [passwordRegistration, setPasswordRegistration] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!email) {
            return error("the email is required")
        }
        if (!password) {
            return error("the password is required")
        }

        try {
            const url = `${Parameters.BACKEND_URL}/user/login`;
            const response = await post(url, { email, password });
            setData("token", response.token);
            success("Sesion inciada con exito");
            setEmail("");
            setPassword("");
        } catch (err) {
            error("Error al iniciar sesion");
        }
    };

    const onRegistrationHandler = async (e) => {
        try {
            e.preventDefault();
    
            const data = {
                name,
                last_name: lastName,
                email: emailRegistration,
                password: passwordRegistration,
                phone_number: phoneNumber
            };
    
            let err = false;
            for(let key of Object.keys(data)) {
                if (!data[key]) {
                    err = true;
                }
            }
    
            if(err) {
                return error("Todos los campos son obligatorios");
            }

            const url = `${Parameters.BACKEND_URL}/user/`;

            await post(url, data);
            success("Usuario registrado con exito");
            setName("");
            setLastName("");
            setEmailRegistration("");
            setPasswordRegistration("");
            setPhoneNumber("");
        } catch (err) {
            error("Error al registrarse");
        }


    };

    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
      setIsSignUp(true);
    };
  
    const handleSignInClick = () => {
      setIsSignUp(false);
    };
  

    return (
        <section className="main-bg">
            <div className={isSignUp ? 'container right-panel-active' : 'container'} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={onRegistrationHandler}>
                        <h3>𝐂𝐫𝐞𝐚𝐭𝐞 𝐀𝐜𝐜𝐨𝐮𝐧𝐭</h3>
                        <input onKeyUp={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
                        <input onKeyUp={(e)=>setLastName(e.target.value)} type="text" placeholder="Last name"/>
                        <input onKeyUp={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone number" min="0" maxLength="10"/>
                        <input onKeyUp={(e)=>setEmailRegistration(e.target.value)} type="email" placeholder="Email"/>
                        <input onKeyUp={(e)=>setPasswordRegistration(e.target.value)} type="password" placeholder="Password"/>
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={onSubmitHandler}>
                        <h1>𝐒𝐢𝐠𝐧 𝐢𝐧</h1>
                        <input onKeyUp={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input onKeyUp={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <input type="submit" value="Sign in" />
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐁𝐚𝐜𝐤!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>𝐇𝐞𝐥𝐥𝐨, 𝐅𝐫𝐢𝐞𝐧𝐝!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};
export default Login;
