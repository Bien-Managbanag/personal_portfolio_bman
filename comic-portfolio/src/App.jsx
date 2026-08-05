import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";

function App() {
  return (
    <div>
      <Navbar/>

      <Hero />

      <Panel
        title="About Me"
        text="Recent graduate from DCU with a degree in Computer Applications and Software Engineering"
      />

    </div>
  );
}

export default App;