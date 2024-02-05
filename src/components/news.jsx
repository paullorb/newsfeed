/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Card from './card';

export default function News() {
  const [news, setNews] = useState("Title of the news");

  const styles = {
      'grid-area':'news',
      border: '3px solid green'
  }

  return (
    <main style={styles}>
      <h1 >{news}</h1>
      <Card />
    </main>
  );
}