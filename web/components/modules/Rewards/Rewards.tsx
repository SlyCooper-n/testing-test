import { Lottie } from "@components/widgets";
import { fetcher } from "@core/services";
import { twitterLike } from "@core/utils";
import { CircleNotch } from "phosphor-react";
import useSWR from "swr";

export const Rewards = () => {
  const { data: rewards, error } = useSWR("/api/rewards", fetcher);
  // const [clicked, setClicked] = useState(false);

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!rewards) {
    return (
      <div className="flex justify-center items-center">
        <CircleNotch size={64} className="mt-4 text-info animate-spin" />
      </div>
    );
  }

  return (
    <section className="pt-12 flex flex-col items-center gap-12">
      <h2 className="text-3xl font-semibold">Rewards</h2>

      <ul className="list-disc">
        {rewards.map((reward) => (
          <li
            key={reward.id}
            className="my-2 flex justify-between items-center"
          >
            <div>
              <strong className="text-info font-bold">{reward.points}</strong>{" "}
              points for &quot;
              <em className="italic">{reward.title}</em>&quot;
            </div>

            <Lottie
              animationData={twitterLike}
              speed={1.5}
              className="w-20 hover:cursor-pointer"
              // customOnClick={({ playSegments }) => {
              //   if (!clicked) {
              //     playSegments([0, 71], true);
              //   }
              //   if (clicked) {
              //     playSegments([71, 0], true);
              //   }
              //   setClicked((prevClicked) => !prevClicked);
              // }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
