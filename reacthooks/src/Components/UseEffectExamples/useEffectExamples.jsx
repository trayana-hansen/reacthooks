import { useState, useEffect } from "react";

const CounterNew = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter(count + 1);
    }, 1000);
  }, [count]);

  return <div>Number of renders: {count}</div>;
};



export { CounterNew };
