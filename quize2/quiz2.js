/* 
1. Declare an array with your name. 
This array will save the position of each letter (in English language i.e. 1-26) of your name. 
E.g. name ASD has 3 letters and have position: 1, 19, 4 (the number of elements in array is same as letters of your name). 
Get sum of values in the array above using any of the loops you like, and find the remainder of the sum when it is divided by 4.
*/

// const mohammed = [13, 15, 8, 1, 13, 13, 5, 4];
// let sum = 0;
// let remainder = 0;
// for (let i = 0; i < mohammed.length; i++) {
//   sum += mohammed[i];
// }
// remainder = sum % 4;
// console.log(remainder);

/* 
2. Based on your remainder in the above question, Choose one of the following APIs.
*/

// fetch("https://www.fishwatch.gov/api/species")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const express = require("express");
const cors = require("cors");
const { data } = require("./db");

const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:name", (req, res) => {
  const info = data.find((elem) => elem["Species Name"] === req.params.name);
  res.send(info);
});
