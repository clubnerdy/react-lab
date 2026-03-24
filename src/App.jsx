import "./App.css";
import MainVisual from "./pages/MainVisual";
import Skill from "./pages/Skill";
import Book from "./pages/Book";
import Category from "./components/Category";

function App() {
  return (
    <>
      <MainVisual />
      <div>
        <Skill />
        <Book />
      </div>
      <Category />
    </>
  );
}

export default App;
