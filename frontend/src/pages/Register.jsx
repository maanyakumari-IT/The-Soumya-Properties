import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
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

            await registerUser(formData);

            alert("🎉 Registration Successful");

            navigate("/login");

        } catch (error) {

            if (
                error.response &&
                error.response.data &&
                error.response.data.email
            ) {

                const goLogin = window.confirm(
                    "This email is already registered.\n\nClick OK to Login."
                );

                if (goLogin) {
                    navigate("/login");
                }

            } else {

                alert("Registration Failed");

            }
        }
    };

    return (

        <section className="auth-page">

            <div className="auth-card">

                <h2>Create Your Account</h2>

                <p>
                    Join The Soumya Properties and explore premium properties.
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <div className="auth-bottom">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </section>

    );
}

export default Register;