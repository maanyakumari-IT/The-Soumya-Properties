import logo from "../assets/logo.png";

function About() {
    return (
        <>

            <section className="about-hero">

                <h1>About The Soumya Properties</h1>

                <p>
                    Your Trusted Partner for Buying, Selling & Renting Properties.
                </p>

            </section>

            <section className="about-container">

                <div className="about-intro">

                    <img
                        src={logo}
                        alt="The Soumya Properties"
                    />

                <div>

                        <h2>Welcome to The Soumya Properties</h2>

                        <p>

                            The Soumya Properties is a trusted real estate consultancy
                            dedicated to helping families, professionals and investors
                            find the perfect residential and commercial properties.
                            We believe every client deserves honest advice,
                            verified property listings and complete transparency
                            throughout the buying, selling and rental journey.

                        </p>

                    </div>

                </div>

                <div className="about-grid">

                    <div className="about-card">

                        <h3>🎯 Our Mission</h3>

                        <p>

                            To provide reliable, transparent and customer-focused
                            real estate solutions that make property transactions
                            simple, secure and stress-free.

                        </p>

                    </div>

                    <div className="about-card">

                        <h3>🌍 Our Vision</h3>

                        <p>

                            To become one of the most trusted real estate
                            service providers by building long-term relationships
                            through honesty, professionalism and quality service.

                        </p>

                    </div>

                </div>

                <section className="services">

                    <h2>Our Services</h2>

                    <div className="service-grid">

                        <div>🏠 Buy Properties</div>

                        <div>🏢 Sell Properties</div>

                        <div>🏘 Rental Properties</div>

                        <div>🏬 Commercial Spaces</div>

                        <div>🏡 Residential Homes</div>

                        <div>🤝 Property Consultation</div>

                    </div>

                </section>

                <section className="why-us">

                    <h2>Why Choose Us?</h2>

                    <div className="service-grid">

                        <div>✔ Verified Properties</div>

                        <div>✔ Trusted Owner Support</div>

                        <div>✔ Transparent Deals</div>

                        <div>✔ Quick Response</div>

                        <div>✔ Best Property Options</div>

                        <div>✔ Complete Assistance</div>

                    </div>

                </section>

                <section className="founder">

                    <h2>Meet Our Founder</h2>

                    <h3>Mr. Rajesh Srivastava</h3>

                    <p>
                        Founder & Property Consultant
                    </p>

                    <p>📞 +91 7004127519</p>

                    <p>📧 rajesh29@gmail.com</p>

                    <p>
                        📍 New Sitaramdera, Slag Road,
                        Kashidih
                    </p>

                </section>

            </section>

        </>
    );
}

export default About;