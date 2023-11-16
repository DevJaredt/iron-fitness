import "./login.css"
import { useState } from "react";
import { error } from "../../utils/toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("here")

        if (!email) {
            return error("the email is required")
        }
        if (!password) {
            return error("the password is required")
        }

        console.log(email, password);
        

    };

    return (
    <section className="main-bg">
        <div className="login-container text-c animated flipInX">
                <div>
                    <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
                </div>
                    <h3 className="text-whitesmoke">Sign In Template</h3>
                    <p className="text-whitesmoke">Sign In</p>
                <div className="container-content">
                    <form onSubmit={(e) => onSubmitHandler(e)} className="margin-t">
                        <div className="form-group">
                            <input onKeyUp={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Username" required=""/>
                        </div>
                        <div className="form-group">
                            <input onKeyUp={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="*****" required=""/>
                        </div>
                        <input type="submit" className="form-button button-l margin-b" value={"Sing in"}/> 
        
                        <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                        <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                        <a className="text-darkyellow" href="#"><small>Sign Up</small></a>
                    </form>
                    <p className="margin-t text-whitesmoke"><small> Your Name &copy; 2018</small> </p>
                </div>
            </div>
    </section> 
    );
};
export default Login;
