import "./App.css";
import MainVisual from "./pages/MainVisual";
import Skill from "./pages/Skill";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <MainVisual />
      <div>
        <Skill />
        <Book />
      </div>
    </>
  );
}

export default App;
