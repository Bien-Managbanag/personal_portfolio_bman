
import { Link } from "react-router-dom";

function Projects() {
    return (
        <main className="projects-page">

            <header className="projects-header">
                <span className="projects-issue">ISSUE #004</span>
                <h1>PROJECT FILES</h1>
            </header>

            {/* Project Panels */}
            <section className="project-panels">

                {/* Project 01 - DCU Expo Application */}
                <article className="project-panel scraper-panel">

                    <div className="project-visual expo-visual">
                        <span className="visual-number">01</span>

                        <div className="visual-placeholder">
                            <img
                                src={`${import.meta.env.BASE_URL}images/final-year-project.png`}
                                alt="DCU Expo Application Screenshot"
                                className="project-screenshot"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="project-content">
                        <span className="project-number">#001</span>

                        <h2>DCU Expo Application</h2>

                        <p>
                            A web application developed to replace the DCU Expo
                            booklet and help visitors navigate through the Expo,
                            explore projects and find students and supervisors.
                        </p>

                        <div className="project-tags">
                            <span>Ionic</span>
                            <span>Angular</span>
                            <span>TypeScript</span>
                            <span>C#</span>
                            <span>SQL</span>
                            <span>REST APIs</span>
                            <span>Mobile App</span>
                            <span>Website</span>
                        </div>
                    </div>
                </article>

                {/* Project 02 - Restaurant POS System */}
                <article className="project-panel scraper-panel">

                    <div className="project-visual pos-visual">
                        <div className="visual-placeholder">
                            <img
                                src={`${import.meta.env.BASE_URL}images/restPosV1.png`}
                                alt="Java Restaurant POS System terminal screenshot"
                                className="project-screenshot"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="project-content">
                        <span className="project-number">#002</span>

                        <h2>Restaurant POS System</h2>

                        <p>
                            A Java-based, terminal-operated point-of-sale system
                            designed to simulate restaurant ordering operations.
                            Users can navigate menu categories, add or remove
                            items from orders, calculate totals automatically,
                            and generate order summaries through a command-line
                            interface.
                        </p>

                        <div className="project-tags">
                            <span>Java</span>
                            <span>OOP</span>
                            <span>Input Validation</span>
                            <span>Command Line Interface</span>
                        </div>
                    </div>
                </article>

                {/* Project 03 - Python Web Scraper */}
                <article className="project-panel scraper-panel">

                    <div className="project-visual scraper-visual">
                        <div className="visual-placeholder">
                            <img
                                src={`${import.meta.env.BASE_URL}images/web-scraper.png`}
                                alt="Python Web Scraper Project Screenshot"
                                className="project-screenshot"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="project-content">
                        <span className="project-number">#003</span>

                        <h2>Python Web Scraper</h2>

                        <p>
                            Developed a Python web scraping application using
                            Scrapy to extract structured product information
                            from a demo e-commerce website. Integrated MongoDB
                            to store the collected data and implemented three
                            automated tests to validate the scraper's
                            functionality.
                        </p>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>Scrapy</span>
                            <span>MongoDB</span>
                            <span>Unit Testing</span>
                        </div>
                    </div>
                </article>

            </section>
        </main>
    );
}

export default Projects;
