import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <section className="dashboard">

            <h1>Admin Dashboard</h1>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h2>Total Properties</h2>
                    <p>--</p>
                </div>

                <div className="dashboard-card">
                    <h2>Total Inquiries</h2>
                    <p>--</p>
                </div>

                <div className="dashboard-card">
                    <h2>Available Properties</h2>
                    <p>--</p>
                </div>

                <div className="dashboard-card">
                    <h2>Sold / Rented</h2>
                    <p>--</p>
                </div>

            </div>

            <div className="dashboard-actions">

                <Link to="/dashboard/add-property">
                    <button>Add Property</button>
                </Link>

                <Link to="/dashboard/manage-properties">
                    <button>Manage Properties</button>
                </Link>

                <Link to="/dashboard/inquiries">
                    <button>Manage Inquiries</button>
                </Link>

            </div>

        </section>
    );
}

export default Dashboard;