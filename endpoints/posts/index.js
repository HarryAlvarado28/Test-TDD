module.export = ({ axios }) => ({
  post: async (req, res) => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(users.find(req.body.userId));
    const found = users.find((x) => x.id === req.body.userId);
    if (found) {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        req.body
      );
      return res.status(201).send(data);
    }

    res.status(500);
  },
});
