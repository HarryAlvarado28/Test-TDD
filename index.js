const express = require("express");
const axios = require("axios");
const parser = require("body-parser");
const app = express();
const port = 3000;

// create application/x-www-form-urlencoded parser
app.use(parser.urlencoded({ extended: false }));

// create application/json parser
app.use(parser.json());

app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  res.status(200).send(data);
});

app.post("/", async (req, res) => {
  const { body } = req;
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    body
  );
  res.status(201).send(data);
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { data } = await axios.put(
    "https://jsonplaceholder.typicode.com/users/" + id,
    body
  );
  res.sendStatus(204);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
