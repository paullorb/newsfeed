import "../src/styles/App.css";
import Structure from "../src/components/structure";
import News from "./components/news";
import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";

export default function App() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [search, updateSearch] = useState("");
  const [query, setQuery] = useState("tags=front_page");
  const newsApi = `http://hn.algolia.com/api/v1/search?${query}&hitsPerPage=6&page=${page}`;
  console.log(newsApi);

  const fetchData = async () => {
    try {
      const res = await fetch(newsApi);
      const data = await res.json();
      setNews(data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  const handledSearch = () => {
    const q = search && search !== "" ? `query=${search}` : "tags=front_page";
    setQuery(q);
  };

  const handledNextPage = () => {
    if (page >= 4) return;
    setPage((page) => page + 1);
  };
  const handledPrevPage = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  useEffect(() => {
    fetchData();
  }, [newsApi]);

  return (
    <>
      <Structure news={news}>
        <Header
          page={page}
          search={search}
          handledPrevPage={handledPrevPage}
          handledNextPage={handledNextPage}
          updateSearch={updateSearch}
          handledSearch={handledSearch}
        />
        <News news={news} />
        <Footer />
      </Structure>
    </>
  );
}
