import { useState, useEffect } from "react";

function Counter({ count, setCount }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    console.log("Counter component mounted");
  }, []);

  return (
    <div className="container">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
