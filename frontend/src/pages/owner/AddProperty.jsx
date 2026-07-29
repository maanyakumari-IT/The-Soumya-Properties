import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../../services/propertyService";


function AddProperty(){

    const navigate = useNavigate();


    const [formData,setFormData] = useState({

        title:"",
        description:"",
        price:"",
        location:"",
        property_type:"Apartment",
        status:"Buy",
        bedrooms:"",
        bathrooms:"",
        area:""

    });



    const [images,setImages] = useState([]);




    const handleChange = (e)=>{


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };





    const handleImages = (e)=>{


        setImages(

            Array.from(e.target.files)

        );


    };





    const handleSubmit = async(e)=>{


        e.preventDefault();



        const data = new FormData();



        Object.keys(formData).forEach(key=>{


            data.append(

                key,

                formData[key]

            );


        });




        // First image as main image

        if(images.length > 0){


            data.append(

                "image",

                images[0]

            );


        }



        // Remaining images

        images.forEach((img,index)=>{


            if(index !== 0){

                data.append(

                    "images",

                    img

                );

            }


        });






        try{


            await createProperty(data);



            alert(
                "Property Added Successfully"
            );



            navigate(
                "/owner/dashboard"
            );



        }
        catch(error){


            console.log(

                "ADD PROPERTY ERROR:",

                error.response?.data

            );



            alert(
                "Failed to add property"
            );


        }



    };







    return(


        <section className="add-property-page">



            <div className="add-property-card">



                <h2>
                    Add New Property
                </h2>




                <form onSubmit={handleSubmit}>



                    <input

                        name="title"

                        placeholder="Property Title"

                        onChange={handleChange}

                        required

                    />




                    <textarea

                        name="description"

                        placeholder="Description"

                        onChange={handleChange}

                        required

                    />




                    <input

                        name="price"

                        placeholder="Price"

                        type="number"

                        onChange={handleChange}

                        required

                    />




                    <input

                        name="location"

                        placeholder="Location"

                        onChange={handleChange}

                        required

                    />





                    <select

                        name="property_type"

                        onChange={handleChange}

                    >

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






                    <select

                        name="status"

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

                        name="bedrooms"

                        placeholder="Bedrooms"

                        type="number"

                        onChange={handleChange}

                    />





                    <input

                        name="bathrooms"

                        placeholder="Bathrooms"

                        type="number"

                        onChange={handleChange}

                    />





                    <input

                        name="area"

                        placeholder="Area Sq Ft"

                        type="number"

                        onChange={handleChange}

                    />







                    <label className="image-upload-btn">


                        📷 Add Images


                        <input

                            type="file"

                            accept="image/*"

                            multiple

                            hidden

                            onChange={handleImages}

                        />


                    </label>






                    <div className="image-preview">


                        {

                            images.map((img,index)=>(


                                <img

                                    key={index}

                                    src={
                                        URL.createObjectURL(img)
                                    }

                                    alt="preview"

                                />


                            ))

                        }


                    </div>







                    <button type="submit">

                        Add Property

                    </button>




                </form>




            </div>




        </section>


    );

}



export default AddProperty;