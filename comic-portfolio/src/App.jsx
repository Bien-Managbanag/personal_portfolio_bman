import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Origins from "./pages/Origins";
import Skills from "./pages/Skills";
function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/origin" element={<Origins />} />

                <Route path="/skills" element={<Skills />} />
                
            </Routes>

        </BrowserRouter>
    );
}

export default App;