const express = require("express");
const axios = require("axios");
const parser = require("body-parser");
const { users } = require("./endpoints");
const app = express();
const port = 3000;

// create application/x-www-form-urlencoded parser
app.use(parser.urlencoded({ extended: false }));

// create application/json parser
app.use(parser.json());

const usersHardlers = users({ axios });

app.get("/", usersHardlers.get);

app.post("/", usersHardlers.post);

app.put("/:id", usersHardlers.put);

app.delete("/:id", usersHardlers.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
