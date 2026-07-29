import { useState } from "react";
import { createInquiry } from "../../services/inquiryService";

function InquiryForm({ propertyId, interestedFor}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
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
            await createInquiry({
                ...formData,
                property: propertyId,
                interested_for: interestedFor
            });

            alert("Inquiry sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            alert("Failed to send inquiry.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Send Inquiry</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
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

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                />

                <button type="submit">
                    Send Inquiry
                </button>
            </form>
        </div>
    );
}

export default InquiryForm;