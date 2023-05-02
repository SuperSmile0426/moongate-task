import React, { useState } from 'react';

interface CountdownProps {
  initialDateTime: string;
}

const Countdown: React.FC<CountdownProps> = ({ initialDateTime }) => {
  const [targetTime, setTargetTime] = useState(new Date(initialDateTime));
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  const handleStartClick = () => {
    console.log(remainingTime.days);
    setIsRunning(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTargetTime = new Date(event.target.value+":00Z");
    console.log(event.target.value+":00Z");
    if (!isNaN(newTargetTime.getTime())) {
      setTargetTime(newTargetTime);
      setIsRunning(false);
    }
  };

  const formatNumber = (num: number): string => num < 10 ? `0${num}` : `${num}`;

  const calculateRemainingTime = (): void => {
    const now = new Date().getTime();
    console.log(new Date().toISOString());
    console.log(targetTime.toISOString());
    const distance = Math.max(targetTime.getTime() - now, 0);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setRemainingTime({ days, hours, minutes, seconds });
  };

  React.useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(calculateRemainingTime, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col p-12">
      <input 
        type="datetime-local" 
        onChange={handleInputChange} 
        className="bg-gray-200 rounded-lg px-3 py-2"
      />
      <button 
        onClick={handleStartClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Start
      </button>
      <div className="my-4">
        {remainingTime.days > 0 && (
          <span className="mr-2 font-bold">
            {remainingTime.days}d
          </span>
        )}
        <span className="mr-2 font-bold">{formatNumber(remainingTime.hours)}h</span>
        <span className="mr-2 font-bold">{formatNumber(remainingTime.minutes)}m</span>
        <span className="font-bold">{formatNumber(remainingTime.seconds)}s</span>
      </div>
    </div>
  );
};

export default Countdown;