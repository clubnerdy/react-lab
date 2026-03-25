import "./App.css";
import CareerCard from "./components/CareerCard";
import projects from "@/data/projects";

function App() {
  return (
    <>
      <div>
        {projects.map((item) => (
          <CareerCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
