const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const res = require("express/lib/response");

const app = express();

// Set up middleware
app.use(morgan("dev"));
app.use(cors());

let counter = 0;

app.post("/counter/increment", (req, res) => {
//   counter++;
  res.json({ counter: counter++ });
});

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

//Start up our server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
