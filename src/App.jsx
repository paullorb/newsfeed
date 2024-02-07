import "../src/styles/App.css";
import Structure from "../src/components/structure";
import News from "./components/news";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function App() {
  const [news, setNews] = useState([]);
  const newsApi =
    "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=6&page=1";

  const fetchData = async () => {
    try {
      const res = await fetch(newsApi);
      const data = await res.json();
      setNews(data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(newsApi);
  }, [news]);

  return (
    <>
      <Structure news={news}>
        <News news={news} />
        <Footer />
      </Structure>
    </>
  );
}
