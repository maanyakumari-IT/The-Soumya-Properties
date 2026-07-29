import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getProperties,
    deleteProperty
} from "../../services/propertyService";


function OwnerDashboard(){

    const navigate = useNavigate();


    const [properties, setProperties] = useState([]);



    useEffect(()=>{


        let isMounted = true;



        const loadProperties = async()=>{


            try{


                const data = await getProperties();



                console.log(
                    "OWNER PROPERTIES:",
                    data
                );



                if(isMounted){


                    setProperties(
                        data.results || data
                    );


                }



            }
            catch(error){


                console.log(

                    "FETCH PROPERTY ERROR:",

                    error.response?.data || error

                );


            }


        };



        loadProperties();



        return ()=>{

            isMounted = false;

        };



    }, []);





    const handleDelete = async(id)=>{


        const confirmDelete = window.confirm(

            "Are you sure you want to delete this property?"

        );



        if(!confirmDelete) return;



        try{


            await deleteProperty(id);



            alert(
                "Property deleted successfully"
            );



            window.location.reload();



        }
        catch(error){


            console.log(

                "DELETE ERROR:",

                error.response?.data || error

            );



            alert(
                "Delete failed"
            );


        }


    };





    return(


        <section className="owner-dashboard">



            <div className="dashboard-header">



                <h1>

                    Welcome Rajesh Sir 👋

                </h1>




                <button

                    onClick={() =>
                        navigate("/owner/add-property")
                    }

                >

                    + Add Property

                </button>



            </div>





            <h2>

                Your Properties

            </h2>





            <div className="property-dashboard-grid">



                {

                    properties.length === 0 ? (

                        <p>
                            No properties added yet.
                        </p>

                    ) : (


                        properties.map((property)=>(


                            <div

                                className="dashboard-card"

                                key={property.id}

                            >



                                {
                                    property.image &&

                                    <img

                                        src={property.image}

                                        alt={property.title}

                                    />

                                }





                                <h3>

                                    {property.title}

                                </h3>




                                <p>

                                    ₹ {property.price}

                                </p>




                                <p>

                                    📍 {property.location}

                                </p>




                                <p>

                                    {property.property_type}

                                    {" - "}

                                    {property.status}

                                </p>




                                <div>


                                    <button

                                        onClick={() =>
                                            navigate(
                                                `/owner/edit-property/${property.id}`
                                            )
                                        }

                                    >

                                        Edit

                                    </button>




                                    <button

                                        onClick={() =>
                                            handleDelete(
                                                property.id
                                            )
                                        }

                                    >

                                        Delete

                                    </button>



                                </div>




                            </div>


                        ))

                    )

                }



            </div>



        </section>


    );

}


export default OwnerDashboard;