import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <img
                        src={logo}
                        alt="The Soumya Properties"
                        className="footer-logo"
                    />
                    <p className="footer-description">
                        Your Trusted Real Estate Partner for Buying,
                        Selling & Renting Residential and Commercial
                        Properties.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                </div>

                <div className="footer-section">

                    <h3>Contact Us</h3>

                    <p>👤 Mr. Rajesh Srivastava</p>

                    <p>📍 New Sitaramdera,Slag Road, Kashidih</p>

                    <p>📞 +91 7004127519</p>

                    <p>📧 rajesh29@gmail.com</p>

                </div>

                <div className="footer-section">

                    <h3>Follow Us</h3>

                    <a href="https://www.instagram.com/propertysjamshedpur?igsh=MWVvejhhNHZxdGZlOA==">📷 Instagram</a>

                    <a href="https://facebook.com/groups/1203277090027548/">📘 Facebook</a>

                </div>

            </div>

            <hr />

            <p className="copyright">

                © 2026 The Soumya Properties |
                All Rights Reserved.

            </p>

        </footer>
    );
}

export default Footer;