
import ImageSecure from "../../assets/Image.png"


const SecurityPage = () => {
    return (
        <>
            <div className="securitypage">
                <div className="pPiority">
                    <div>
                        <h1>Your Security is Our Top Priority</h1>
                        <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
                        <img src={ImageSecure} alt="Secure" />
                    </div>

                    <div className="protect">
                        <h3>How We Protect You</h3>
                        <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                    </div>

                    <div className="authetic">
                        <div className="platfor">
                            <div>
                                Secure Online Banking Platform
                            </div>
                            <p>Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.</p>
                        </div>
                        <div className="multi-facto">
                            <div>
                                Multi-Factor Authentication
                            </div>
                            <p>To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.</p>
                        </div>
                        <div className="froud">
                            <div>
                                Fraud Monitoring
                            </div>
                            <p>We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>
                        </div>
                        <div className="mobil">
                            <div>
                                Secure Mobile Banking
                            </div>
                            <p>Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.</p>
                        </div>
                    </div>

                    <div className="frequently">
                        <h1>Frequently Asked Questions</h1>
                        <p>Still you have any questions? Contact our Team via support@yourbank.com</p>

                        <div className="frequentSubDiv">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SecurityPage;