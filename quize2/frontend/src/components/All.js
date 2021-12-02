import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((elem) => {
          return (
            <div>
              <h1>{`Species Name: ${elem["Species Name"]}`}</h1>
              <h3>{`Scientific Name: ${elem["Scientific Name"]}`}</h3>
              <p>{`Population: ${elem["Population"]}`}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default All;
