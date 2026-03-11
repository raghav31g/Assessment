const express = require("express");
const app = express();
// require('dotenv').config();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js App!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});