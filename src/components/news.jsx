import React, { useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}