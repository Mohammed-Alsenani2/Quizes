import React, { useState } from "react";
import First from "./components/First";
import Seconde from "./components/Seconde";

const App = () => {
  const [crossingState, setCrossingState] = useState("Hello from App");
  return (
    <div className="App">
      <h1>Class: </h1>
      <First fromClass={crossingState} />
      <hr />
      <h1>Function: </h1>
      <Seconde />
    </div>
  );
};

export default App;
