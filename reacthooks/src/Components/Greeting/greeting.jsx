import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Hi. My name is {name}</h1>
      <input type="text" onInput={(e) => setName(e.target.value)}></input>
    </>
  );
};

export default Greeting;
