import All from "./components/All";
import One from "./components/One";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="App">
      <p>All Elements</p>
      <All />
      <p>One Element</p>
      <One />
      <p>Random Element</p>
      <Random />
    </div>
  );
};

export default App;
