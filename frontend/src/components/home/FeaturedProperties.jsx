import { useEffect, useState } from "react";
import PropertyCard from "../property/PropertyCard";
import { getProperties } from "../../services/propertyService";

function FeaturedProperties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await getProperties();
                setProperties(data.results || data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProperties();
    }, []);

    return (
        <section className="featured-properties">
            <h2>Featured Properties</h2>

            <div className="property-grid">
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProperties;