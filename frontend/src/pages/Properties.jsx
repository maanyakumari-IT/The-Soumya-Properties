import { useEffect, useState } from "react";
import PropertyCard from "../components/property/PropertyCard";
import { getProperties } from "../services/propertyService";

function Properties() {

    const [properties, setProperties] = useState([]);

    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");


    useEffect(() => {

        async function fetchData() {

            try {

                const params = {};

                if (location) params.location = location;
                if (status) params.status = status;
                if (type) params.property_type = type;


                const data = await getProperties(params);

                setProperties(data.results || data);


            } catch (error) {

                console.error("Error fetching properties:", error);

            }

        }


        fetchData();

    }, [location, status, type]);



    return (

        <>

            {/* ================= PROPERTIES HERO ================= */}

            <section className="properties-hero">

                <h1>Explore Our Properties</h1>

                <p>
                    Find your perfect residential and commercial property
                    with The Soumya Properties.
                </p>

            </section>



            {/* ================= PROPERTY SECTION ================= */}

            <section className="featured-properties">

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search by Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />


                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >

                        <option value="">
                            All Status
                        </option>

                        <option value="Buy">
                            Buy
                        </option>

                        <option value="Rent">
                            Rent
                        </option>

                    </select>



                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >

                        <option value="">
                            All Types
                        </option>

                        <option value="Apartment">
                            Apartment
                        </option>

                        <option value="Villa">
                            Villa
                        </option>

                        <option value="House">
                            House
                        </option>

                        <option value="Commercial">
                            Commercial
                        </option>

                        <option value="Land">
                            Land
                        </option>

                    </select>


                </div>



                <div className="property-grid">

                    {
                        properties.length > 0 ? (

                            properties.map((property) => (

                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                />

                            ))

                        ) : (

                            <h3>
                                No Properties Found
                            </h3>

                        )
                    }


                </div>


            </section>


        </>

    );

}


export default Properties;