import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <HelloWorld name={name} />
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
