const path = require('path');
const rootDir = require('../utils/pathUtil');
const express = require('express');
const contactRouter = express.Router();

contactRouter.get("/contact-us",(req, res, next) => {
  console.log("Contact page Middleware", req.url, req.method);
  res.status(203).sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

contactRouter.post("/contact-us",(req, res, next) => {
  console.log("Contact submit Middleware", req.url, req.method, req.body);
  res.status(203).sendFile(path.join(rootDir, 'views', 'contactSubmit.html'));
});

module.exports = contactRouter;