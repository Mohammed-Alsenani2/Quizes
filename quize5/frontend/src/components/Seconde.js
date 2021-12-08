import React, { useState } from "react";

export default function Seconde() {
  const [insideInput, setInsideInput] = useState("");
  const [changeCounter, setChangeCounter] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setInsideInput("Hello");
          }
        }}
      />
      <h1>{insideInput}</h1>

      <h1>Random: {number}</h1>
      <h1>{changeCounter}</h1>
      <input
        type="button"
        value="Click"
        onClick={() => {
          setChangeCounter(changeCounter + 1);
          setNumber(Math.floor(Math.random() * 100));
        }}
      ></input>
    </div>
  );
}
