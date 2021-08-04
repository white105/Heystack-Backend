var path = require("path"),
  router = require("express").Router(),
  express = require("express");

router.post("/login", function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  console.log("username", username);
  console.log("password", password);
});

router.post("/signUp", function (req, res, next) {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let passwordVerify = req.body.passwordVerify;
  console.log("email", email);
  console.log("username", username);
  console.log("password", password);
  console.log("passwordVerify", passwordVerify);
});

module.exports = router;
