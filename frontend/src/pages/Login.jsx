import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { loginUser } from "../services/authService";


function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

            const response = await loginUser(formData);

            localStorage.setItem(
                "access",
                response.data.access
            );

            localStorage.setItem(
                "refresh",
                response.data.refresh
            );


            alert("🎉 Login Successful");

            navigate("/");


        } catch {

            alert("Invalid email or password");

        }

    };


    return (

        <section className="auth-page">

            <div className="auth-card">

                <h2>Welcome Back</h2>

                <p>
                    Login to The Soumya Properties and explore premium properties.
                </p>


                <form onSubmit={handleSubmit}>


                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />


                    <div className="password-box">

                        <input
                            type={
                                showPassword 
                                ? "text" 
                                : "password"
                            }
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />


                        <span
                            onClick={() => 
                                setShowPassword(!showPassword)
                            }
                        >

                            {
                                showPassword 
                                ? <FaEyeSlash /> 
                                : <FaEye />
                            }

                        </span>

                    </div>


                    <button type="submit">
                        Login
                    </button>


                </form>


                <div className="auth-bottom">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </div>


            </div>


        </section>

    );

}


export default Login;