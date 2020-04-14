const path = require("path");
const express = require("express");

const publicDirectoryPath = path.join(__dirname, "../public");

const app = express();
app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather App",
    name: "Behnam",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Behnam",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "help page",
    message:
      "it is simple, just enter your city and we tell you how weather is!",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    location: "Mahabad",
    forecast: 56,
  });
});
app.listen(3008, () => {
  console.log("Server is up on port 3008.");
});
