import React, { useState } from 'react';

export default function Header() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Header</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}