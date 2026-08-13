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
                    title="About Me"
                    text="Hi, I'm Bien Managbanag, a Computer Applications & Software Engineering graduate from Dublin City University with a passion for technology, problem solving, and for continuous learning and development"
                />

                <Panel 
                    title="The Beginning"
                    text="My journey into software development began in my senior year of secondary school, they had just announced that computer science will be added into the ciriculum for the Leaving Certificate, which then led me
                    to DCU where I further developed my foundation and skills in programming, software development, data and security"
                />

                <Panel 
                    title="My Mission"
                    text="I'm looking to continue developing my skills, gain professional experience, and build software that solves real-world problems."
                />

            </section>
        </main>
    );
}

export default Origins;
