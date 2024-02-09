import "../styles/index.css";

export default function Header({
  page,
  handledPrevPage,
  handledNextPage,
  updateSearch,
  search,
  handledSearch,
}) {
  const stylebtn = {
    width: "100%",
    padding: "0.5rem",

  };
  const styles = {
    gridArea: "header",
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    margin: "1rem 1rem 1rem 0rem",
  };
  return (
    <section style={styles}>
      <h1>feedMeNews</h1>
      <p>
        {page > 1 && (
          <button style={stylebtn} onClick={handledPrevPage}>
            prev
          </button>
        )}
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
    </section>
  );
}
