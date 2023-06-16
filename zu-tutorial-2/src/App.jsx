import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="Ongoing" />
      <Column state="Completed" />
    </div>
  );
}

export default App;
