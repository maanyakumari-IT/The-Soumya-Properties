import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../services/propertyService";
import InquiryForm from "../components/inquiry/InquiryForm";

function PropertyDetails() {

    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProperty() {

            try {

                const data = await getProperty(id);

                setProperty(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        }

        fetchProperty();

    }, [id]);

    if (loading) return <h2>Loading...</h2>;

    if (!property) return <h2>Property Not Found</h2>;

    return (

        <section className="property-details-page">

            <div className="property-details-container">

                <div className="property-image-section">

                    <img
                        src={
                            property.image
                                ? property.image
                                : "https://via.placeholder.com/900x600"
                        }
                        alt={property.title}
                    />

                </div>

                <div className="property-details">

                    <span className="status-badge">
                        {property.status}
                    </span>

                    <h1>{property.title}</h1>

                    <h2 className="property-price">
                        ₹ {property.price}
                    </h2>

                    <div className="details-grid">

                        <div>
                            <strong>📍 Location</strong>
                            <p>{property.location}</p>
                        </div>

                        <div>
                            <strong>🏠 Property Type</strong>
                            <p>{property.property_type}</p>
                        </div>

                        <div>
                            <strong>🛏 Bedrooms</strong>
                            <p>{property.bedrooms}</p>
                        </div>

                        <div>
                            <strong>🛁 Bathrooms</strong>
                            <p>{property.bathrooms}</p>
                        </div>

                        <div>
                            <strong>📐 Area</strong>
                            <p>{property.area} Sq. Ft.</p>
                        </div>

                    </div>

                    <div className="description-box">

                        <h3>Description</h3>

                        <p>
                            {property.description}
                        </p>

                    </div>

                    <div className="owner-card">

                        <h3>Property Consultant</h3>

                        <h2>Mr. Rajesh Srivastava</h2>

                        <p>📞 +91 9031608729</p>

                        <p>📧 rajesh29@gmail.com</p>

                        <p>
                            📍 New Sitaramdera,
                            Slag Road,
                            Kashidih
                        </p>

                        <div className="owner-buttons">

                            <a
                                href="tel:+919031608729"
                            >
                                <button className="call-btn">

                                    Call Now

                                </button>

                            </a>

                            <a
                                href="https://wa.me/919031608729"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <button className="whatsapp-btn">

                                    WhatsApp

                                </button>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="inquiry-section">

                <InquiryForm propertyId={property.id} />

            </div>

        </section>

    );

}

export default PropertyDetails;