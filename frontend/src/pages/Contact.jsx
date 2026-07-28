import logo from "../assets/logo.png";

function Contact() {
    return (
        <>

            <section className="contact-hero">

                <h1>Contact The Soumya Properties</h1>

                <p>
                    We're here to help you find your perfect property.
                </p>

            </section>

            <section className="contact-container">

                <div className="contact-info">

                    <img
                        src={logo}
                        alt="The Soumya Properties"
                    />

                    <h2>Mr. Rajesh Srivastava</h2>

                    <p>Founder & Property Consultant</p>

                    <div className="contact-card">

                        <h3>📞 Call</h3>

                        <p>+91 7004127519</p>

                    </div>

                    <div className="contact-card">

                        <h3>✉️ Email</h3>

                        <p>rajesh29@gmail.com</p>

                    </div>

                    <div className="contact-card">

                        <h3>📍 Office Address</h3>

                        <p> Slag Road,
                            New Sitaramdera,
                            Kashidih
                        </p>

                    </div>

                    <div className="social-links">
                        <a href="https://www.instagram.com/propertysjamshedpur?igsh=MWVvejhhNHZxdGZlOA==">📷 Instagram</a>
                        <a href="https://facebook.com/groups/1203277090027548/">📘 Facebook</a>

                    </div>

                </div>

                <div className="contact-form">

                    <h2>Send Message</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                        ></textarea>

                        <button>
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

            <section className="map-section">

                <h2>Our Location</h2>

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=New+Sitaramdera+Slag+Road+Kashidih&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>

            </section>

        </>
    );
}

export default Contact;