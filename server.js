const express = require("express");
const axios = require("axios");
const parser = require("body-parser");
const { posts } = require("./endpoints");
const { authenticate } = require("./middlewares")
const app = express();
const port = 3000;

// create application/x-www-form-urlencoded parser
app.use(parser.urlencoded({ extended: false }));

// create application/json parser
app.use(parser.json());

const postsHardlers = users({ axios });

app.post("/", authenticate, postsHardlers.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
