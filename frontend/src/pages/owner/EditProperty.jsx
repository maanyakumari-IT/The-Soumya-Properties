import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";


function EditProperty() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [formData, setFormData] = useState({

        title: "",
        description: "",
        price: "",
        location: "",
        property_type: "",
        status: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        is_available: true,

    });


    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(true);



    // FETCH PROPERTY

    useEffect(() => {


        let isMounted = true;



        const fetchProperty = async () => {


            try {


                const response = await api.get(
                    `properties/${id}/`
                );



                if(isMounted){


                    setFormData({

                        title: response.data.title || "",

                        description: response.data.description || "",

                        price: response.data.price || "",

                        location: response.data.location || "",

                        property_type: response.data.property_type || "",

                        status: response.data.status || "",

                        bedrooms: response.data.bedrooms || "",

                        bathrooms: response.data.bathrooms || "",

                        area: response.data.area || "",

                        is_available: response.data.is_available,

                    });



                    setLoading(false);

                }



            } catch(error){


                console.log(
                    "LOAD PROPERTY ERROR:",
                    error.response?.data
                );


                alert(
                    "Unable to load property"
                );


            }


        };



        fetchProperty();



        return () => {

            isMounted = false;

        };



    }, [id]);





    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };





    const handleSubmit = async(e) => {


        e.preventDefault();



        const data = new FormData();



        Object.keys(formData).forEach((key)=>{


            data.append(

                key,

                formData[key]

            );


        });




        if(images.length > 0){
            data.append("image", images[0]);
        }
        images.forEach((img, index) => {
            if (index !== 0) {
                data.append("images", img);
            }
        });

        try{
            await api.put(

                `properties/update/${id}/`,

                data,

                {

                    headers:{

                        "Content-Type":
                        "multipart/form-data"

                    }

                }

            );



            alert(
                "Property Updated Successfully"
            );



            navigate(
                "/owner/dashboard"
            );




        }catch(error){


            console.log(

                "UPDATE ERROR:",

                error.response?.data

            );


            alert(
                "Property update failed"
            );


        }


    };





    if(loading){


        return (

            <div className="loading-text">

                Loading Property...

            </div>

        );


    }





    return (


        <section className="edit-property-page">


            <div className="edit-property-card">


                <h1>

                    Edit Property

                </h1>



                <form onSubmit={handleSubmit}>


                    <label>
                        Property Title
                    </label>


                    <input

                        type="text"

                        name="title"

                        value={formData.title}

                        onChange={handleChange}

                        placeholder="Enter property title"

                        required

                    />




                    <label>
                        Description
                    </label>


                    <textarea

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                        placeholder="Enter property description"

                        required

                    />





                    <label>
                        Price
                    </label>


                    <input

                        type="number"

                        name="price"

                        value={formData.price}

                        onChange={handleChange}

                        placeholder="Enter price"

                        required

                    />





                    <label>
                        Location
                    </label>


                    <input

                        type="text"

                        name="location"

                        value={formData.location}

                        onChange={handleChange}

                        placeholder="Enter location"

                        required

                    />





                    <label>
                        Property Type
                    </label>


                    <select

                        name="property_type"

                        value={formData.property_type}

                        onChange={handleChange}

                    >

                        <option value="">
                            Select Type
                        </option>

                        <option value="Residential">
                            Residential
                        </option>

                        <option value="Commercial">
                            Commercial
                        </option>


                    </select>





                    <label>
                        Status
                    </label>


                    <select

                        name="status"

                        value={formData.status}

                        onChange={handleChange}

                    >

                        <option value="">
                            Select Status
                        </option>


                        <option value="Buy">
                            Buy
                        </option>


                        <option value="Rent">
                            Rent
                        </option>


                    </select>





                    <label>
                        Bedrooms
                    </label>


                    <input

                        type="number"

                        name="bedrooms"

                        value={formData.bedrooms}

                        onChange={handleChange}

                    />





                    <label>
                        Bathrooms
                    </label>


                    <input

                        type="number"

                        name="bathrooms"

                        value={formData.bathrooms}

                        onChange={handleChange}

                    />





                    <label>
                        Area
                    </label>


                    <input

                        type="text"

                        name="area"

                        value={formData.area}

                        onChange={handleChange}

                        placeholder="Example: 1200 sq ft"

                    />





                    <label className="image-upload-btn">

                        📷 Add Images

                        <input
                        type="file"
                        multiple
                        hidden
                        accept="image/*"
                        onChange={(e) =>
                            setImages(Array.from(e.target.files))
                        }
                    />

                    </label>
                    <div className="image-preview">

                        {images.map((img, index) => (

                            <img
                                key={index}
                                src={URL.createObjectURL(img)}
                                alt="preview"
                            />

                        ))}

                    </div>

                    <button type="submit">

                        Update Property

                    </button>



                </form>



            </div>


        </section>


    );

}



export default EditProperty;