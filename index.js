const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("app");
});

app.get("/downloadFile", (req, res) => {
  res.download("./public/nptel.pdf");
});

app.listen(3000, () => {
  console.log("app running on 3000");
});
