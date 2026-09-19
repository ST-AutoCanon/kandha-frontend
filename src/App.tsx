import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import AboutUs from "./pages/Aboutus";
import Homologation from "./pages/Homologation";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Solutions */}
                <Route path="/solutions" element={<Solutions />} />

                {/* About Us */}
                <Route path="/about" element={<AboutUs />} />

                {/* Homologation */}
                <Route
                    path="/homologation"
                    element={<Homologation />}
                />
                 <Route
                    path="/Careers"
                    element={<Careers />}
                />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;