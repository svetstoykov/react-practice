import Reward from "./Reward";
import rewardTiers from "../data/rewards";

const About = () => {
  return (
    <section className="row-span-6 p-8 bg-white rounded-md md:row-span-5">
      <h1 className="text-2xl font-semibold">About this project</h1>
      <p className="mt-4 text-secondary-text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="my-10 text-secondary-text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div>
        {rewardTiers.map((reward) => (
          <Reward key={reward.id} {...reward} />
        ))}
      </div>
    </section>
  );
};

export default About;
