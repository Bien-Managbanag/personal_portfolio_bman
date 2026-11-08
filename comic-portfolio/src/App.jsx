import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Origins from "./pages/Origins";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/origin" element={<Origins />} />

                <Route path="/skills" element={<Skills />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/projects" element={<Projects />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;