import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const One = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/Atlantic Chub Mackerel")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>{data["Species Name"]}</h1>
      <h3>{data["Scientific Name"]}</h3>
      <p>{data["Population"]}</p>
    </div>
  );
};

export default One;
