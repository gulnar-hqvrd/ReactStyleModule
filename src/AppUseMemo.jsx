import React, { useMemo } from "react";
import { useState } from "react";

function AppUseMemo() {
  function ExpensiveCalculation(num) {
    console.log("Calculating...");
    let result = 0;

    for (let i = 0; i < 100; i++) {
      result += num;
    }
    return result;
  }

  let [count, setCount] = useState(1);


  let calculation = useMemo(() => ExpensiveCalculation(count), [count]);
  return (
    <div>
      <div>
        <h2>Nəticə: {calculation}</h2>
        <button  className = "bg-red-400"  onClick={() => setCount(count + 1)}>Artır</button>

      </div>
    </div>
  );
}

export default AppUseMemo;
