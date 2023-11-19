import "./login.css"
import { useState } from "react";
import { success, error } from "../../utils/toast";
import { post } from "../../utils/axios";
import { Parameters } from "./../../utils/constants";
import { setData } from "../../utils/localStorage";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            console.log(url);
            const response = await post(url, { email, password });
            console.log(response);
            setData("token", response.token);
            success("Sesion inciada con exito");
        } catch (err) {
            error("Error al iniciar sesion");
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
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={onSubmitHandler}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input onKeyUp={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input onKeyUp={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <input type="submit" value="Sign in" />
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
    </section> 
    );
};
export default Login;
