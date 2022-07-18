import { LottieOptions, useLottie } from "lottie-react";
import { useState } from "react";

interface LikeProps extends LottieOptions {
  speed?: number;
  segments?: [number, number];
  backwards?: boolean;
  revertOnClick?: boolean;
}

export const Lottie = ({
  animationData,
  loop,
  autoplay,
  className,
  segments,
  speed = 1,
  backwards = false,
  revertOnClick = true,
}: LikeProps) => {
  const [clicked, setClicked] = useState(false);

  const { View, playSegments, setDirection, setSpeed, getDuration } = useLottie(
    {
      animationData,
      loop: loop || false,
      autoplay: autoplay || false,
      onClick: () => {
        const duration = getDuration(true);

        if (revertOnClick) {
          if (!clicked) {
            setDirection(backwards ? -1 : 1);
            playSegments([0, duration!]);
          }

          if (clicked) {
            setDirection(backwards ? 1 : -1);
            playSegments([duration!, 0]);
          }

          setClicked(!clicked);
        }
      },
      className,
    }
  );

  setSpeed(speed);

  return View;
};
