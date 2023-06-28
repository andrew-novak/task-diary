const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.TASK_DIARY_JWT_SECRET;

function sendIdToken(user, res) {
  const idToken = jwt.sign({ id: user._id }, JWT_SECRET);

  res.json({ message: "success", idToken });
}

module.exports = sendIdToken;
