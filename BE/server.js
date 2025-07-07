const express = require("express");
const { API_KEY } = require("./config/config");

const cors = require("cors");

console.log("API Key:", API_KEY);

const app = express();

app.use(express.json());
app.use(cors());
app.get("/weather", (req, res) => {
  console.log(req.query.city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city || 'Mumbai'}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => console.error("Error:", error));
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
