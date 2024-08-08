import './Navbar.css'
import Logo from '../../assets/shape-30.png'

function Navbar() {

  return (
    <>
      <div className='navBar'>
        <div className='logoContainer'>
          <img src={Logo} alt="" />
          <span>YourBanK</span>
        </div>
        <div className='mainContent'>
          <button className='home-btn'>Home</button>
          <button className='careers-btn'>Careers</button>
          <button className='about-btn'>About</button>
          <button className='Security-btn'>Security</button>
        </div>
        <div className='loginButton'>
          <button className='signin-btn'>Sign up</button>
          <button className='login-btn'>Login</button>
        </div>
      </div>
    </>
  )
}


export default Navbar