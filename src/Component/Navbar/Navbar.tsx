import './Navbar.css'
import Logo from '../../assets/shape-30.png'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div className='navBar'>
        <div className='logoContainer'>
          <img src={Logo} alt="" />
          <span>YourBanK</span>
        </div>
        <div className='mainContent'>
          <Link to={""}><button className='home-btn'>Home</button></Link>
          <Link to={""}><button className='careers-btn'>Careers</button></Link>
          <Link to={""}><button className='about-btn'>About</button></Link>
          <Link to={"SecurityPage"}><button className='Security-btn'>Security</button></Link>
        </div>
        <div className='loginButton'>
          <Link to={"SignupPage"}><button className='signin-btn'>Sign up</button></Link>
          <Link to={"LoginPage"}><button className='login-btn'>Login</button></Link>
        </div>
      </div>
    </>
  )
}


export default Navbar