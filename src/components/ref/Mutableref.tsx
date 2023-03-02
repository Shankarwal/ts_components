import { useState, useRef, useEffect } from "react";

const Mutableref = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number>(null!);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <div>
        <p>StopWatch</p>
        <p>
          {Math.floor(timer / 1000)}:{Math.floor(timer / 10)}
        </p>
        <div className="controls">
          <button title="start" onClick={startTimer} disabled={timer > 0}>
            ▶
          </button>
          <button title="stop" onClick={stopTimer}>
            ⏸
          </button>
          <button title="reset" onClick={resetTimer} disabled={timer === 0}>
            🟦
          </button>
        </div>
      </div>
    </>
  );
};

export default Mutableref;
