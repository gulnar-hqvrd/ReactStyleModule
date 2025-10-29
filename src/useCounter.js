import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount((prev)=>prev+1);
  const decrease = () => setCount((index) => index - 1);
  const reset = () => setCount(initialValue);


  return { count, increase, decrease, reset };
}
