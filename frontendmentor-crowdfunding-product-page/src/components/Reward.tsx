import { IRewardTier } from "../data/rewards";

const Reward: React.FC<IRewardTier> = (reward) => {
  return (
    <article
      key={reward.id}
      className={`p-5 m-4 border border-gray-400 rounded-lg opacity-${
        reward.isOutOfStock ? "50" : "100"
      }`}
    >
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{reward.title}</h2>
        <span className="text-[0.75rem] font-semibold text-aqua">
          Pledge ${reward.pledgeAmount} or more
        </span>
      </header>
      <p className="my-10 text-secondary-text">{reward.description}</p>
      <footer className="flex items-center justify-between">
        <div className="text-secondary-text">
          <span className="text-2xl font-bold text-black">
            {reward.itemsLeft}
          </span>{" "}
          left
        </div>
        <button
          className={`px-6 py-2 font-semibold text-white rounded-3xl ${
            !reward.isOutOfStock ? "bg-aqua" : "bg-gray-400"
          }`}
        >
          {reward.isOutOfStock ? "Out of Stock" : "Select Reward"}
        </button>
      </footer>
    </article>
  );
};

export default Reward;
