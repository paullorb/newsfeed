import React, { useState } from 'react';

export default function News() {
  const [news, setNews] = useState("Title of the news");
  const [website, setWebsite] = useState("Website");
  const [comments, setComments] = useState("Comments");
  const [newsAge, setNewsAge] = useState(0);

  return (
    <section class="news">
      <h1>{news}</h1>
      <h2>{website}</h2>
      <h3>{comments}</h3>
      <h2>{newsAge}</h2>
    </section>
  );
}