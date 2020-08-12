const express = require("express");
const app = express();
const path = require("path");
const { renderFile } = require("ejs");

//settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));

//Para utilizar views con extension HTML:
//app.engine('html',require('ejs'),renderFile);

app.set("view engine", "ejs");

//midlewares

//routes
// app.get("/", (req, res) => {
//   //res.send("Hello World");
//   //res.sendFile(path.join(path.join(__dirname, "views/index_option1.html")));
//   res.render("index", { title: "First Node WebSite" });
// });
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//listening the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
