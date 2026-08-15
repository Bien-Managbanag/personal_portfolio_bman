import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                BIEN
            </Link>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/origin">Origin</Link>

                <Link to="/skills">Skills</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/contact">Contact</Link>

            </div>

        </nav>
    );
}

export default Navbar;