import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>You have clicked {number} times</h1>
      <button onClick={() => setNumber((number) => number + 1)}>
        Click here
      </button>
    </>
  );
};

export default Counter;
