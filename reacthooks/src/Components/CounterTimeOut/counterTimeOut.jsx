import { useState, useEffect } from "react";

const CounterTimeOut = () => {
  const [count, setCounter] = useState(1);

  useEffect(() => {
    count > 0 && setTimeout(() => setCounter(count + 1), 1000);
  }, [count]);

  return <p>count: {count}</p>;
};

export default CounterTimeOut;
