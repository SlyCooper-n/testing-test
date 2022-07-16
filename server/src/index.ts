import cors from "cors";
import express from "express";
import { rewardsData } from "./utils/rewardsData";

const app = express();

app.use(cors({}));
app.use(express.json());

app
  .route("/rewards")
  .get((req, res) => {
    return res.status(200).json(rewardsData);
  })
  .post((req, res) => {
    rewardsData.push({
      id: rewardsData.length + 1,
      title: req.body.title,
      body: req.body.body,
      valid: req.body.valid,
      points: Math.ceil(Math.random() * 1000),
    });

    return res.status(201).send();
  });

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
