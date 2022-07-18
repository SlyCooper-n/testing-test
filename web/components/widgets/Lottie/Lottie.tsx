import { LikeProps } from "@core/types/";
import { useLottie } from "lottie-react";
import { useState } from "react";

export const Lottie = ({
  animationData,
  loop,
  autoplay,
  className,
  segments,
  speed = 1,
  backwards = false,
  actionOnClick = "revert",
}: LikeProps) => {
  const [clicked, setClicked] = useState(false);

  const { View, playSegments, setSpeed, getDuration } = useLottie({
    animationData,
    loop: loop || false,
    autoplay: autoplay || false,
    onClick: () => {
      const duration = getDuration(true) as number;
      const [segmentStart, segmentEnd] = segments || [0, duration];

      if (actionOnClick === "revert") {
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
