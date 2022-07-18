import { LottieOptions } from "lottie-react";

export interface LikeProps extends LottieOptions {
  speed?: number;
  segments?: [number, number];
  backwards?: boolean;
  actionOnClick?: "revert" | "play-pause" | "stop" | "none";
}
