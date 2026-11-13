import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Origins from "./pages/Origins";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
    return (
        <HashRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/origin" element={<Origins />} />

                <Route path="/skills" element={<Skills />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/projects" element={<Projects />} />

            </Routes>

        </HashRouter>
    );
}

export default App;