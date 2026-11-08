import { Link } from "react-router-dom"

function Projects() {

    return (
        <main className="projects-page">
            
            <header className="projects-header">
                <span className="projects-issue"> ISSUE #005 </span>
                <h1> PROJECT FILES </h1>
            </header>
        
            {/*Project Panels */}

            <section className="project-panel">

                {/* Project 1 */}
                <article className="project-panel">
                    <div className="project-visual expo-visual">
                        <span className="visual-number">01</span>
                        <span className="visual-placejolder"> PROJECCT IMAGE </span>
                        <span className="visual-caption"> DCU PROJECT EXPO APP</span>
                    </div>

                    <div className="project-content">
                        <span className="project-number">
                            #001
                        </span>

                        <h2>DCU Expo Application</h2>

                        <p>
                            A web application developed to replace the DCU Expo booklet and help 
                            visitors navigate through the Expo, explore projects and find students and supervisors.
                        </p>

                        <div className="project-tags">
                            <span>Ionic</span>
                            <span>Angular</span>
                            <span>SQL</span>
                            <span>Mobile App</span>
                            <span>Website</span>
                        </div>
                    </div>
                </article>

                {/* Project 2 */}
                <article className="project-panel">
                    <div className="project-visual RestaurantPOS">
                        <span className="visual-number"> 02 </span>
                        <span className="visual-placeholder">
                            PROJECT IMAGE
                        </span>
                    </div>
                    
                    <div className="project-content">
                        <span className="project-number">
                            #002
                        </span>

                        <h2> Restaurant POS System </h2>

                        <p>
                            A Java-based, terminal-operated point-of-sale system
                            designed to simulate restaurant ordering operations.
                            Users can navigate menu categories, add or remove
                            items from orders, calculate totals automatically,
                            and generate order summaries through a command-line interface.
                        </p>

                        <div className="project-tags">
                            <span>Java</span>
                            <span>OOP</span>
                            <span>Input Validation</span>
                            <span>Command Line Interface</span>
                        </div>
                    </div>
                </article>
            </section>


        </main>
    )
}

export default Projects;