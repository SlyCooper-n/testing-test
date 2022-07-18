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

  const { View, playSegments, setSpeed, getDuration } = useLottie({
    animationData,
    loop: loop || false,
    autoplay: autoplay || false,
    onClick: () => {
      const duration = getDuration(true) as number;
      const [segmentStart, segmentEnd] = segments || [0, duration];

      if (revertOnClick) {
        if (!clicked) {
          playSegments(
            backwards ? [segmentEnd, segmentStart] : [segmentStart, segmentEnd],
            true
          );
        }

        if (clicked) {
          playSegments(
            backwards ? [segmentStart, segmentEnd] : [segmentEnd, segmentStart],
            true
          );
        }

        setClicked((prevClicked) => !prevClicked);
      }
    },
    className,
  });

  setSpeed(speed);

  return View;
};
