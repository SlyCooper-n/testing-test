import { fetcher } from "@core/services";
import { CircleNotch } from "phosphor-react";
import useSWR from "swr";

export const Rewards = () => {
  const { data: rewards, error } = useSWR("/rewards", fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!rewards)
    return (
      <div className="flex justify-center items-center">
        <CircleNotch size={64} className="mt-4 text-info animate-spin" />
      </div>
    );

  return (
    <section className="pt-12 flex flex-col items-center gap-12">
      <h2 className="text-3xl font-semibold">Rewards</h2>

      <ul className="list-disc">
        {rewards.map((reward) => (
          <li key={reward.id} className="my-2">
            <span className="text-info font-bold">{reward.points}</span> points
            for &quot;
            <span className="italic">{reward.title}</span>&quot;
          </li>
        ))}
      </ul>
    </section>
  );
};
