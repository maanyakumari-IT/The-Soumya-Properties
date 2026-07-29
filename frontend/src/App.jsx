import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AddProperty from "./pages/owner/AddProperty";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EditProperty from "./pages/owner/EditProperty";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
function App() {
    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path="/owner/edit-property/:id"element={<EditProperty />}/>
                <Route path="/owner/add-property"element={<AddProperty />}/>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/owner/dashboard"element={<OwnerDashboard />}/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;