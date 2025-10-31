import React, { useCallback, useState } from "react";

function Child({ onClick }) {
  console.log(" render oldu");
  return <button onClick={onClick}>Artır</button>;
}

function Callback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount((a) => a + 1);
  }, []);
  return (
    <div>
      <h2>Say: {count}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="yaz"
      />
      <Child onClick={handleClick} />
    </div>
  );
}

export default Callback;
