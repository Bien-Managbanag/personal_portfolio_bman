import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

            
            <h1>Bien Dominic Managbanag</h1>
            <h2 className="issue-number">
                Issue #001
            </h2>
            <p>
                BRAND NEW <br /> DEVELOPER
            </p>

            <p className="hero-description">
                Computer Applications & Software Engineering Graduate
            </p>

            <Link to="/origin" className="story-button">
            READ MY STORY →
            </Link>
            </div>
        </section>
    );
}

export default Hero;