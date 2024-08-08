import './Footer.css'
import Logo from '../../assets/shape-30.png'
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot, FaFacebook, FaTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerlogo'>
                    <span className='logo-span'>
                        <img src={Logo} alt="YourBank" />
                        <span>YourBanK</span>
                    </span>
                    <span className='menu'>
                        <span>Home</span>
                        <span>Careers</span>
                        <span>About</span>
                        <span>Security</span>
                    </span>
                </div>
                <div className='contact-address'>
                    <span><IoMdMail />hello@skillbirdge.com</span>
                    <span><FaPhone />+91 91813 23 2309</span>
                    <span><FaLocationDot />Somewhere in the World</span>
                </div>
                <div className='socials-access'>
                    <span className='social-logo'>
                        <div>
                            <FaFacebook className='socials-icon' />
                        </div>
                        <div>
                            <FaTwitter className='socials-icon' />
                        </div>

                        <div>
                            <GrLinkedin className='socials-icon' />
                        </div>
                    </span>
                    <span>YourBank All Rights Reserved</span>
                    <span>
                        <span>Privacy Policy</span>
                        <span>|</span>
                        <span>Terms of Service</span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Footer;