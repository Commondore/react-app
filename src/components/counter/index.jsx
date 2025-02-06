import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const changeCounter = () => setCounter(counter + 1);
  return <button onClick={changeCounter}>Countrer {counter}</button>;
};
