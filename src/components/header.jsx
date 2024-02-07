import { useState } from "react";
import "../styles/index.css";

export default function Header() {
  const [count, setCount] = useState(0);

  const styles = {
    gridArea: "header",
    border: "3px solid red",
  };
  return (
    <section style={styles}>
      <h1>Header</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </section>
  );
}
