const path = require('path');
const rootDir = require('../utils/pathUtil');
const express = require('express');
const homeRouter = express.Router();


homeRouter.get("/",(req, res, next) => {
  console.log("Home Middleware", req.url, req.method);
  res.status(203).sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;