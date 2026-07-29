import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const isOwner = user?.is_owner;

    const handleLogout = () => {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        navigate("/");

        window.location.reload();

    };

    return (

        <nav className="navbar">

            <div className="logo">

                <Link to="/" className="logo-text">
                    The Soumya Properties
                </Link>

            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/properties">Properties</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                {isOwner ? (
                    <>
                        <li>
                            <Link to="/owner/dashboard">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to="/register">
                                Register
                            </Link>
                        </li>
                    </>
                )}

            </ul>

        </nav>

    );
}

export default Navbar;