import { useState } from "react";
import { createInquiry } from "../../services/inquiryService";

function InquiryForm({ propertyId }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interested_for: "Buy",
        expected_move_date: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await createInquiry({
                ...formData,
                property: propertyId,
            });


            alert(
                "Inquiry sent successfully! Our team will contact you soon."
            );


            setFormData({
                name: "",
                email: "",
                phone: "",
                interested_for: "Buy",
                expected_move_date: "",
                message: "",
            });


        } catch (error) {

            console.error(error);
            alert("Something went wrong.");

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="auth-page">

            <div className="auth-card">


                <h2>
                    Interested in this Property?
                </h2>


                <p>
                    Fill the form and our property consultant will contact you soon.
                </p>



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



                    <select
                        name="interested_for"
                        value={formData.interested_for}
                        onChange={handleChange}
                    >

                        <option value="Buy">
                            Buy
                        </option>

                        <option value="Rent">
                            Rent
                        </option>

                    </select>



                    <input
                        type="date"
                        name="expected_move_date"
                        value={formData.expected_move_date}
                        onChange={handleChange}
                    />



                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />



                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {
                            loading
                            ? "Sending..."
                            : "Send Inquiry"
                        }

                    </button>



                </form>


            </div>

        </div>

    );

}


export default InquiryForm;