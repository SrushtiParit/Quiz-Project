import { useEffect, useState } from "react";

export default function QuestionTimer({ Timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(Timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeOut();
    }, Timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [Timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question progress"
      value={remainingTime}
      max={Timeout}
      className={mode}
    />
  );
}
