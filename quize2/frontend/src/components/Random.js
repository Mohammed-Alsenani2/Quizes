import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const Random = () => {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 3));

  useEffect(() => {
    fetch("http://localhost:3030/")
      .then((res) => res.json())
      .then((data) => {
        const names = [
          "White Hake",
          "Atlantic Chub Mackerel",
          "Shortfin Squid",
          "Homarus americanus",
          "Yellowtail Rockfish",
        ];

        setRandom();
        let randomElement = names[random];
        let rand = data.find((elem) => elem["Species Name"] === randomElement);
        console.log(random);
        setData(rand);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>{data["Species Name"]}</h1>
    </div>
  );
};

export default Random;
