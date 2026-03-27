import "./App.css";
import BookCard from "./components/card/BookCard";
import SKILL from "./assets/content/skillsEnum";

function App() {
  return (
    <>
      <div>
        <BookCard
          label={"PC/Mobile"}
          title={"Haewooglobalcargo map 앱 UX/UI"}
          date={"May,2024"}
          skills={[SKILL.FIGMA]}
        />
      </div>
    </>
  );
}

export default App;
