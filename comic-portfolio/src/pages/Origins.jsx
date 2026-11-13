import Panel from "../components/Panel";
import { useState } from "react";

function Origins(){
    const [expandedPanel, setExpandedPanel] = useState(null);

    function togglePanel(index) {
        setExpandedPanel((current) =>
            current === index ? null : index
        );
    }
    return (
        <main className="origin-page">
            <header className="origin-header">

            <p>ISSUE #002</p>

            <h1> ORIGIN STORY</h1>

            <p>THE STORY BEHIND THE DEVELOPER</p>
            </header>

            <section className="origin-panels">
                
                <Panel
                    title="THE BEGINNING"
                    summary="How I discovered programming"
                    text={`My interest in technology started long before I wrote my first line of code. Growing up, I was a big fan of Iron Man, 
                    particularly his skill and ability to build incredible technology and his AI, JARVIS. Seeing what he could create sparked my 
                    imagination and inspired me to someday build something of my own
                    
                    As I got older, that turned into a natural curiosity about how technology worked. I often became the go-to person in my family 
                    whenever something stopped working, whether it was fixing the internet, issues with 
                    the television, or helping my parents with their phones and computers. I enjoyed figuring out what was wrong and finding ways to 
                    fix the issues.
                    
                    That interest eventually developed into something more serious when Computer Science was introduced as a Leaving Certificate subject 
                    at my secondary school. It was my first opportunity to explore programming, where I learned the fundamentals of Python, HTML and CSS, 
                    alongside how computer systems and electronics work together.

                    What began as childhood inspiration gradually became a genuine passion for problem-solving and creating things with technology, ultimately leading me to 
                    pursue a degree in Computer Applications and Software Engineering
                    `}
    
                    isExpanded={expandedPanel === 0}
                    onToggle={() => togglePanel(0)}
                />

                <Panel 
                    title="UNIVERSITY"
                    summary="My journey studyung Computer Applications and Software Engineering in DCU"
                    image="/images/dcu.jpg"
                    imageAlt="Photo of DCU"
                    text={`My journey at Dublin City University began with a desire to turn my interest in technology into practical skills. 
                    Studying Computer Applications and Software Engineering gave me the opportunity to explore how software is designed, 
                    developed and maintained, while building a strong foundation in computer science.

                    During my early years, I developed my programming skills through languages such as Java, Python and C, while learning 
                    about object-oriented programming, web development, databases, data structures and algorithms. As I progressed through 
                    my degree, I explored more specialised areas, including artificial intelligence, machine learning, cybersecurity, 
                    software testing, distributed systems and compiler construction.
                    
                    One of the most valuable parts of university was applying what I learned through practical assignments and group projects. 
                    These experiences challenged me to solve problems, debug code, work with others and approach software development in a more 
                    structured way.

                    My final-year project brought many of these skills together. Working as part of a two-person team, I helped develop a 
                    mobile application for the DCU Project Expo using Ionic and Angular, with a C# backend and SQL Server database. The project 
                    gave me experience integrating APIs, implementing application features, testing functionality and learning unfamiliar 
                    technologies.

                    Looking back, university was about more than learning how to code. It taught me how to approach complex problems, 
                    collaborate with others and continuously develop my skills as a software engineer.
                    `}

                    tags={[
                            "Software Engineering",
                            "Object-Oriented Programming",
                            "Databases",
                            "Data Structures & Algorithms",
                            "Software Testing",
                            "Cybersecurity"
                        ]}
                        isExpanded={expandedPanel === 1}
                        onToggle={() => togglePanel(1)}
                />

                <Panel 
                    title="AUSTRIA"
                    summary="My Erasmus experience studying abroad at Johannes Kepler University in Linz, Austria."
                    image="/images/jku.jpg"
                    imageAlt="Photograph of JKU"
                    text={`During my third year at Dublin City University, I had the opportunity to study abroad at Johannes Kepler University in Linz, Austria, as part of the Erasmus+ programme. It was an exciting opportunity to step outside my comfort zone, experience a different academic environment, and develop both personally and professionally.

                    While studying in Austria, I explored a range of subjects, including Artificial Intelligence, Machine Learning, Modern Front-End Web Development, Software Engineering, and the Rust Programming Language. These modules allowed me to broaden my understanding of computer science while gaining exposure to different technologies and approaches to problem-solving.

                    Beyond academics, I also took German language courses and Cultural Sensitivity Training, which helped me adapt to living in a new country and better appreciate different cultures and perspectives.

                    My time in Austria was one of the most memorable parts of my university experience. It helped me become more independent, adaptable, and confident in unfamiliar environments, while strengthening my interest in technology and continuous learning.
                    `}
                        tags={[
                            "Software Engineering",
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Web Development",
                            "German"
                        ]}
                        isExpanded={expandedPanel === 2}
                        onToggle={() => togglePanel(2)}
                />

                <Panel 
                    title="GRADUATION & WHATS NEXT"
                    summary="Graduating in 2025 and whats next?"
                    image=""
                    imageAlt="Photo of me at my graduation"
                    text={`After completing my degree in Computer Applications and Software Engineering at Dublin City University, I graduated in 2025. 
                    With my studies complete, Im now ready to take the next step in my career, continue developing my technical skills, gain professional experience and build real-world solutions.
                    `}
                    isExpanded={expandedPanel === 3}
                    onToggle={() => togglePanel(3)}
                />


            </section>
        </main>
    );
}

export default Origins;

/*
Layout for origins page
Beginning - how i got into software dev
DCU Arc 
Austria Arc 
Graduation and whats next
*/