import './Signup.css'
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Signup = () => {
    return (
        <>
            <div className='main-signup-div'>
                <div className='signup-div'>
                    <h1>Sign Up</h1>
                    <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                    <span className='input-div'>
                        <input type="text" placeholder='Enter First Name' />
                        <input type="text" placeholder='Enter Last Name' />
                        <input type="text" placeholder='Enter your Email' />
                        <input type="text" placeholder='Enter your Password' />
                    </span>
                </div>

                <div className='sign-btn'>
                    <button>Sign Up</button>
                    <button>Login</button>
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

export default Signup;