const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
//Define paths  for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handelbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Behnam Sheykhe",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Behnam Sheykhe",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    message:
      "it is simple, just enter your city and we tell you how weather is!",
    name: "Behnam Sheykhe",
  });
});
// app.get("/weather", (req, res) => {
//   res.send({
//     location: "NewYork",
//     forecast: 56,
//   });
// });
app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Helparicle not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found. 404",
  });
});
app.listen(3200, () => {
  console.log("Server is up on port 3200.");
});
