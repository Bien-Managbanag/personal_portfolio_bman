import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Origins from "./pages/Origins";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>

          <Navbar />

             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/origin" element={<Origins />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;