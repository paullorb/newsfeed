import "../src/styles/App.css";
import Structure from "../src/components/structure";
import News from "./components/news";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
const stylebtn = {
  width: "6rem",
  padding: "0.5rem",
};

export default function App() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [search, updateSearch] = useState("");
  const [query, setQuery] = useState("tags=front_page");

  const newsApi = `http://hn.algolia.com/api/v1/search?${query}&hitsPerPage=6&page=${page}`;

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
        <p>
          {page > 1 && (
            <button style={stylebtn} onClick={handledPrevPage}>
              prev
            </button>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button style={stylebtn} onClick={handledNextPage}>
            next
          </button>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            value={search}
            name="search"
            id="search"
            onChange={(e) => updateSearch(e.target.value)}
          />
          <button style={stylebtn} onClick={handledSearch}>
            Go!
          </button>
        </p>

        <News news={news} />
        <Footer />
      </Structure>
    </>
  );
}
