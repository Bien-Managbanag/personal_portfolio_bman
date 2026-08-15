function Skills() {
    return (
        <main className="skills-page">

            <header className="skills-header">

                <p>ISSUE #003</p>

                <h1> SKILL <br /> SET </h1>

            </header>

            <section className="skills-container">

                <div className="skill-card">

                    <h2>PROGRAMMING ABILITIES</h2>

                    <p>
                        Java • Python • JavaScript • C • SQL
                    </p>

                    <p>
                        Experience with object-oriented programming, problem solving, algorithms, and developing software applications.
                    </p>

                </div>


                <div className="skill-card">

                    <h2> WEB & FULL STACK DEVELOPMENT</h2>

                    <p>
                        HTML • CSS • React • Angular
                    </p>

                    <p>
                        Experience in developing web and cross-platform applications, including frontend development and working with backend databases.
                    </p>

                </div>


                <div className="skill-card">

                    <h2>SOFTWARE ENGINEERING</h2>

                    <p>
                        Object-Oriented Programming • Software Testing • Agile • Git
                    </p>

                    <p>
                        Experience working with software lifecycle models, compilers and software quality assurance.
                    </p>

                </div>


                <div className="skill-card">

                    <h2>DATA, AI & SECURITY</h2>

                    <p>
                        Databases • Data Mining • Artificial Intelligence • Cybersecurity
                    </p>

                    <p>Academic experience with cybersecurity, cryptography and security protocols.</p>

                </div>

            </section>

            <section className="tech-stack">
                <h2>TECH ARSENAL</h2>

                <div className="tech-list">
                    <span>Java</span>
                    <span>Python</span>
                    <span>JavaScript</span>
                    <span>C</span>
                    <span>C++</span>
                    <span>SQL</span>

                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>

                    <span>Git</span>
                </div>

            </section>

            <section className="skill-levels">
                <h2>ABILITY LEVELS</h2>

                <p className="skill-levels-intro">
                    My current self-assessed proficiency across the programming languages I've worked with.
                </p>

                <p className="skill-levels-intro">
                    Levels are self-assessed based on academic coursework, personal projects, and practical experience.
                </p>

                <div className="skill-level">
                    <div className="skill-info">
                        <h3>Python</h3>
                        <span>Intermediate</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress intermediate"></div>
                    </div>

                    <p className="skill-description">
                        Strong experience using Python throughout my
                        university coursework and projects. I have used
                        Python for programming, data analysis, data mining
                        and introductory artificial intelligence, and am
                        comfortable applying it to solve different
                        programming problems.
                    </p>

                    <div className="used-for">
                        <span>Programming</span>
                        <span>Data Analysis</span>
                        <span>Data Mining</span>
                        <span>Artificial Intelligence</span>
                        <span>Problem Solving</span>
                    </div>
                </div>

                <div className="skill-level">
                    <div className="skill-info">
                        <h3>Java</h3>
                        <span>Beginner</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress beginner"></div>
                    </div>

                    <p className="skill-description">
                            I have a foundational understanding of Java and
                            have used it throughout my university coursework
                            to develop my understanding of programming,
                            object-oriented concepts and problem solving.
                            I am continuing to build my confidence and
                            practical experience with the language.
                        </p>

                    <div className="used-for">
                        <span>Programming</span>
                        <span>Problem Solving</span>
                        <span>Algorithms</span>
                        <span>Object-Oriented Programming</span>
                    </div>
                    
                </div>

                <div className="skill-level">
                    <div className="skill-info">
                        <h3>JavaScript</h3>
                        <span>Beginner</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress beginner"></div>
                    </div>

                        <p className="skill-description">
                            Currently developing my JavaScript skills through 
                            web development and my React portfolio project. 
                            I understand the fundamentals but am still 
                            building experience with more advanced JavaScript 
                            concepts and applications.
                        </p>

                    <div className="used-for">
                        <span>Web Development</span>
                        <span>Frontend</span>
                        <span>React</span>+
                    </div>
                </div>
                
                <div className="skill-level">
                    <div className="skill-info">
                        <h3>C</h3>
                        <span>Intermediate</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress intermediate"></div>
                    </div>

                    <p className="skill-description">
                            I have a solid understanding of C and its core programming
                            concepts. I am comfortable working with C for programming and problem
                            solving, while continuing to build my practical experience through projects.
                        </p>

                    <div className="used-for">
                        <span>Programming</span>
                        <span>Problem Solving</span>
                        <span>Algorithms</span>
                    </div>
                </div>

                <div className="skill-level">
                    <div className="skill-info">
                        <h3>C++</h3>
                        <span>Beginner</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress beginner"></div>
                    </div>

                    <p className="skill-description">
                        I have a basic understanding of C++ and its
                        fundamental programming concepts. While I am comfortable
                        with the basics, I am continuing to develop my skills
                        through practical projects and would like to gain more
                        hands-on experience with the language.         
                    </p>

                    <div className="used-for">
                        <span>Programming</span>
                        <span>OOP</span>
                        <span>Problem Solving</span>
                    </div>
                </div>

                <div className="skill-level">
                    <div className="skill-info">
                        <h3>SQL</h3>
                        <span>Beginner</span>
                    </div>

                    <div className="skill-bar">
                        <div className="skill-progress beginner"></div>
                    </div>

                    <p className="skill-description">
                        I have a basic introduction to SQL and relational
                        database concepts. I am currently developing my
                        understanding of writing queries and working with
                         databases, and plan to build my experience through
                         practical projects.
                        </p>

                    <div className="used-for">
                        <span>SQL Fundamentals</span>
                        <span>Database Concepts</span>
                        <span>Queries</span>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default Skills;