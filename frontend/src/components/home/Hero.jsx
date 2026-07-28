import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.jpeg";

function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="overlay"></div>

            <div className="hero-content">

                <span className="hero-tag">
                    Trusted Real Estate Partner
                </span>

                <h1>
                    Find Your Dream Property
                </h1>

                <h2>
                    The Soumya Properties
                </h2>

                <p>
                    Buy • Sell • Rent Residential & Commercial Properties with complete transparency and trusted guidance from <strong>Mr. Rajesh Srivastava.</strong>
                </p>

                <div className="hero-buttons">

                    <Link to="/properties">
                        <button className="primary-btn">
                            Explore Properties
                        </button>
                    </Link>

                    <Link to="/contact">
                        <button className="secondary-btn">
                            Contact Us
                        </button>
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default Hero;