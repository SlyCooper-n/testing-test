import express from "express";

const app = express();

app.use(express.json());

app.route("/rewards").get((req, res) => {
  res.send("Hello World!").status(200);
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
