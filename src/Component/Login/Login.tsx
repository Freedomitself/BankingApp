
import './Login.css'
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className='Login-div'>
                <div className='login-div'>
                    <div className="login-header">
                        <h1>Login</h1>
                        <p>Welcome back! Please log in to access your account.</p>
                    </div>
                    <span className='input-div'>
                        <input type="text" placeholder='Enter your Email' />
                        <input type="text" placeholder='Enter your Password' />
                    </span>
                    <button>Forgot Password?</button>
                </div>

                <div className='sign-btn'>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
                <span>Or Continue With</span>
                <div className='icons-div'>
                    <FaGoogle className='icons' />
                    <FaFacebook className='icons' />
                    <FaApple className='icons' />
                </div>

            </div>
        </>
    );
}

export default Login;