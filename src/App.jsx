import "./App.css";
import Hero from "./sections/Hero";
import Nav from "@/components/Nav";
import Skill from "./sections/Skill";
import Ability from "./sections/Ability";
import Career from "./sections/Career";
import Project from "./sections/Project";
import Blog from "./sections/Blog";
import Book from "./sections/Book";

function App() {
  return (
    <>
      <Hero />
      <Nav />
      <div className="box"></div>
      <Ability />
      <Skill />
      <Career />
      <Project />
      <Blog />
      <Book />
    </>
  );
}

export default App;
