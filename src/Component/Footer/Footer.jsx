import React, { useState } from "react";
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim() === "") {
            alert("Please enter a valid email address.");
            return;
        }
        // Here you can add your subscribe logic (e.g., API call)
        setSubscribed(true);
        setEmail("");
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src={footer_logo} alt="" /> */}
                    <h1>SaoLY</h1>
                    <p>I am a frontend developer from cambodia with 2 years of experience in university like Project Practicum for Professor.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={subscribed}
                        />
                    </div>
                    <div
                        className="footer-subscribe"
                        onClick={handleSubscribe}
                        style={{ cursor: "pointer", opacity: subscribed ? 0.6 : 1 }}
                    >
                        {subscribed ? "Subscribed" : "Subscribe"}
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Roeun Saoly. All right reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
