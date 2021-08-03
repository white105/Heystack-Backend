var path = require("path"),
  router = require("express").Router(),
  express = require("express");

router.post("/login", function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  console.log("username", username);
  console.log("password", password);
});

module.exports = router;
