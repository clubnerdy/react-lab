import "./App.css";
import Hero from "./sections/Hero";
import Nav from "@/components/Nav";
import Skill from "./sections/Skill";
import Ability from "./sections/Ability";
import Career from "./sections/Career";

function App() {
  return (
    <>
      <Hero />
      <Nav />
      <div className="box"></div>
      <Ability />
      <Skill />
      <Career />
    </>
  );
}

export default App;
