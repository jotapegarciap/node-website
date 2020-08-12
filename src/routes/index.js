const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First Node WebSite" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

module.exports = router;
