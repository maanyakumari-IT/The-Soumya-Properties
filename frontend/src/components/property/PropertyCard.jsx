import { Link } from "react-router-dom";

function PropertyCard({ property }) {

    return (

        <div className="property-card">

            <div className="property-image">

                <img
                    src={
                        property.image
                            ? property.image
                            : "https://via.placeholder.com/400x260"
                    }
                    alt={property.title}
                />

                <span className="verified-badge">
                    ✔ Verified
                </span>

                <span className="price-badge">
                    ₹ {property.price}
                </span>

            </div>

            <div className="property-content">

                <h3>{property.title}</h3>

                <p className="location">
                    📍 {property.location}
                </p>

                <p className="type">
                    🏠 {property.property_type} • {property.status}
                </p>

                <div className="property-info">

                    <span>🛏 {property.bedrooms} Beds</span>

                    <span>🛁 {property.bathrooms} Baths</span>

                    <span>📐 {property.area} Sq.Ft.</span>

                </div>

                <Link to={`/properties/${property.id}`}>
                    <button className="details-btn">
                        View Details
                    </button>
                </Link>

            </div>

        </div>

    );

}

export default PropertyCard;