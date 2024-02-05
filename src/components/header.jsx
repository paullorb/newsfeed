import React, { useState } from 'react';
import '../styles/index.css'

export default function Header() {
  const [count, setCount] = useState(0);

  


  return (
    <div className='header'>
      <h1>Header</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </div>
  );
}