import { RewardsType } from "@core/types";
import axios from "axios";
import { Fetcher } from "swr";

export const fetcher: Fetcher<RewardsType[], string> = (url) =>
  axios.get("http://localhost:3000" + url).then((res) => res.data);
