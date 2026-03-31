import "./App.css";
import Hero from "./sections/Hero";
import Nav from "@/components/Nav";
import Skill from "./sections/Skill";
import Ability from "./sections/Ability";

function App() {
  return (
    <>
      <Hero />
      <Nav />
      <div className="box"></div>
      <Ability />
      <Skill />
    </>
  );
}

export default App;
