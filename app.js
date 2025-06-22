const path = require('path');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  // res.status(203).send("<h1>Hello</h1>");
  next();
});
app.get("/",(req, res, next) => {
  console.log("Fourth Middleware", req.url, req.method);
  res.status(203).send("<h1>Hello</h1>");
});
app.get("/contact-us",(req, res, next) => {
  console.log("Fifth Middleware", req.url, req.method);
  res.status(203).sendFile(path.join(__dirname, 'contactUs.html'));
});
app.post("/contact-us",(req, res, next) => {
  console.log("Sixth Middleware", req.url, req.method);
  res.status(203).send("<h1>We will contact you shortly..</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})