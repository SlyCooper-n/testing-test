import type { NextApiRequest, NextApiResponse } from "next";

interface RewardsData {
  id: number;
  title: string;
  body: string;
  valid: boolean;
  points: number;
}

interface RewardsRequest {
  title: string;
  body: string;
  valid: boolean;
}

interface RewardsPostResponse {
  message?: string;
}

const rewardsData: RewardsData[] = [
  {
    id: 1,
    title: "Best goal ever",
    body: "I am the best player at school",
    valid: true,
    points: 532,
  },
  {
    id: 2,
    title: "Giant lego castle",
    body: "I've built a super giant castle with lego bricks",
    valid: true,
    points: 792,
  },
  {
    id: 3,
    title: "Best kid ever",
    body: "My parents love me",
    valid: true,
    points: 649,
  },
  {
    id: 4,
    title: "Long song with guitar",
    body: "Today I've played the longest song I've ever heard with my guitar",
    valid: true,
    points: 423,
  },
  {
    id: 5,
    title: "In memory of Eddie Munson",
    body: "I played Master of Puppets in memory of Eddie Munson 😭",
    valid: true,
    points: 1000000000,
  },
  {
    id: 6,
    title: "Best dev",
    body: "I learning everything!!!",
    valid: true,
    points: 925,
  },
  {
    id: 7,
    title: "Better person",
    body: "I'm striving to be better every single day",
    valid: true,
    points: 843,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RewardsData[] | RewardsPostResponse>
) {
  if (req.method === "GET") {
    res.status(200).json(rewardsData);
  }

  if (req.method === "POST") {
    const body = (req.body as RewardsRequest) ?? null;

    if (!body) return res.status(400).json({ message: "No body" });

    if (body.title.includes("bad") || body.body.includes("bad"))
      return res
        .status(406)
        .json({ message: "Your content is not appropriate" });

    rewardsData.push({
      id: rewardsData.length + 1,
      title: body.title,
      body: body.body,
      valid: true,
      points: Math.ceil(Math.random() * 1000),
    });

    return res.status(200).json({ message: "Your reward has been added" });
  }
}
