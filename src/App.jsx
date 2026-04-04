import "@/styles/App.css";
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
import { useState, useEffect, useRef } from "react";

function App() {
  // 전역 네비게이션 이벤트
  const [activeSection, setActiveSection] = useState("");
  const isScrollingRef = useRef(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Nav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrollingRef={isScrollingRef}
      />
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
