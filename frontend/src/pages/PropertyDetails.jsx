import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../services/propertyService";
import InquiryForm from "../components/inquiry/InquiryForm";

function PropertyDetails() {

    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {

        async function fetchProperty() {

            try {

                const data = await getProperty(id);

                setProperty(data);

                if (data.image) {
                    setSelectedImage(data.image);
                } else if (data.images && data.images.length > 0) {
                    setSelectedImage(data.images[0].image);
                }

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
                        className="main-property-image"
                        src={
                            selectedImage
                                ? selectedImage
                                : "https://via.placeholder.com/900x600"
                        }
                        alt={property.title}
                    />

                    <div className="gallery-images">

                        {property.image && (

                            <img
                                src={property.image}
                                alt="Main"
                                className={
                                    selectedImage === property.image
                                        ? "active-image"
                                        : ""
                                }
                                onClick={() =>
                                    setSelectedImage(property.image)
                                }
                            />

                        )}

                        {property.images &&
                            property.images.map((img) => (

                                <img
                                    key={img.id}
                                    src={img.image}
                                    alt="Gallery"
                                    className={
                                        selectedImage === img.image
                                            ? "active-image"
                                            : ""
                                    }
                                    onClick={() =>
                                        setSelectedImage(img.image)
                                    }
                                />

                            ))}

                    </div>

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

                        <p>📞 +91 7004127519</p>

                        <p>📧 rajesh29@gmail.com</p>

                        <p>
                            📍 New Sitaramdera,
                            Slag Road,
                            Kashidih
                        </p>

                        <div className="owner-buttons">

                            <a href="tel:+7004127519">

                                <button className="call-btn">

                                    Call Now

                                </button>

                            </a>

                            <a
                                href={`https://wa.me/7004127519?text=${encodeURIComponent(
                                    `Hello Mr. Rajesh Srivastava,

I am interested in the following property:

🏠 ${property.title}

📍 Location: ${property.location}

💰 Price: ₹${property.price}

Please contact me regarding this property.`
                                )}`}
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

                <InquiryForm
                    propertyId={property.id}
                    interestedFor={property.status}
                />

            </div>

        </section>

    );

}

export default PropertyDetails;