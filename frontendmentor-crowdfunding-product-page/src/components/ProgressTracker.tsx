import Countdown from "react-countdown";

interface IProgressTrackerProps {
  endDate: number;
}

const ProgressTracker: React.FC<IProgressTrackerProps> = ({endDate}) => {
  const countdownRenderer = ({
    days,
    completed,
  }: {
    days: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return <span className="text-3xl font-bold">{days}</span>;
    }
  };

  return (
    <section className="relative z-10 px-10 pt-10 pb-5 bg-white rounded-md">
      <div className="flex flex-col gap-10 md:gap-16">
        {/* Stats wrapper */}
        <div className="flex flex-col items-center justify-between md:flex-row ">
          {/* First stat */}
          <div className="flex-1 w-1/2 px-2 py-2 text-center border-b-2 md:border-r-2 md:border-b-0 md:py-0 border-gray-500/70">
            <h1 className="text-3xl font-bold">$10</h1>
            <p className="text-secondary-text">of $100,000 backed</p>
          </div>

          {/* Second stat */}
          <div className="flex-1 px-2 py-2 pb-2 text-center border-b-2 md:py-0 md:border-r-2 md:border-b-0 border-gray-500/70 ">
            <h1 className="text-3xl font-bold">5</h1>
            <p className="text-secondary-text">total backers-progress</p>
          </div>

          {/* Days left */}
          <div className="flex-1 px-2 py-2 text-center md:py-0">
            <Countdown
              date={endDate}
              renderer={countdownRenderer}
            />
            <p className="text-secondary-text">days left</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-full transition-all duration-300 rounded-full bg-aqua"
            style={{ width: `30%` }}
            role="progressbar"
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Funding progress"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
