import "./App.css";
import Hero from "./sections/Hero";
import Nav from "@/components/Nav";
import Skill from "./sections/Skill";
import Ability from "./sections/Ability";
import Career from "./sections/Career";
import Project from "./sections/Project";
import Blog from "./sections/Blog";
import Book from "./sections/Book";
import Education from "./sections/Education";
import Footer from "./sections/Footer";

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
      <Education />
      <Footer />
    </>
  );
}

export default App;
