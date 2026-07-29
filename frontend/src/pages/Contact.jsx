import { useState } from "react";
import logo from "../assets/logo.png";
import { sendContactMessage } from "../services/contactService";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await sendContactMessage(formData);

            alert("Message Sent Successfully ✅");

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

        } catch (err) {

            console.log(err);

            alert("Failed to send message");

        }
    };

    return (
        <>

            <section className="contact-hero">
                <h1>Contact The Soumya Properties</h1>
                <p>We're here to help you find your perfect property.</p>
            </section>

            <section className="contact-container">

                <div className="contact-info">

                    <img src={logo} alt="logo" />

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
                        <p>
                            Slag Road,
                            New Sitaramdera,
                            Kashidih
                        </p>
                    </div>

                    <div className="social-links">
                        <a href="https://www.instagram.com/propertysjamshedpur?igsh=MWVvejhhNHZxdGZlOA==">
                            📷 Instagram
                        </a>

                        <a href="https://facebook.com/groups/1203277090027548/">
                            📘 Facebook
                        </a>
                    </div>

                </div>

                <div className="contact-form">

                    <h2>Send Message</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
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