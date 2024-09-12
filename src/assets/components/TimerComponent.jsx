import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Timer: {seconds} seconds</div>;
};

export default TimerComponent;
