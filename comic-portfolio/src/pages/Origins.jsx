import Panel from "../components/Panel";

function Origins(){
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
                    text="My journey into technology began in secondary school, when Computer Science was introduced as a new Leaving Certificate subject. It was my first real glimpse into the world of technology, where I learned the fundamentals of Python, HTML and CSS, explored how software and electronics work together, and discovered how different devices and systems communicate with one another. What started as a school subject sparked an interest that would eventually lead me to pursue software engineering."
                />

                <Panel 
                    title="UNIVERSITY"
                    text="At Dublin City University, I built a broad foundation in software development, progressing from programming, web development and computer systems to object-oriented programming, databases, data structures and algorithms, software testing and full-stack development. As my studies progressed, I explored more advanced areas including artificial intelligence, data mining, cybersecurity, compiler construction and software engineering, while applying these skills through projects and my final-year project."
                />

                <Panel 
                    title="AUSTRIA"
                    text="In my third year, I had the opportunity to study abroad in Johannes Kepler University in Linz, Austria, where I gained experience in a different academic environment." 
                />

                <Panel 
                    title="GRADUATION & WHAT'S NEXT?"
                    text="After completing my degree in Computer Applications and Software Engineering at Dublin City University, I graduated in 2025. With my studies complete, I'm now ready to take the next step in my career, continue developing my technical skills, gain professional experience and build real-world solutions."
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