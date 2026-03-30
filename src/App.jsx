import "./App.css";
import EducationContainer from "./components/EducationContainer";
import { educations } from "./data/educations";

function App() {
  return (
    <>
      <div>
        {educations.map((item) => (
          <EducationContainer key={item.topic} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
