import "./Login.css";
import BgLogin from "../../assets/img/bg-login.png";
import Logo from "../../assets/img/logotop.png";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <div className="container" id="container">
            <img src={BgLogin} />
            <div className="form-container sign-in">
                <form>
                    <h1 className="text-logo">
                        <img src={Logo} />
                        Log In
                    </h1>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email" />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password" />

                    <div className="forget">
                        <a href="#">Sign In</a>
                        <a href="#">Forget Your Password?</a>
                    </div>

                    <button className="login">Log In</button>
                    <button className="login-google">
                        <FcGoogle className="logo-google" />
                        Log in with google account
                    </button>

                </form>
            </div>
            <div className="toggle">
                <img src={Logo} alt="" />
                <div className="toggle-panel toggle-right">
                    <h1>Yhoiki Team</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
