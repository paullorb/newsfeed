import Card from "./card";

export default function News({ news }) {
  const styles = {
    gridArea: "news",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    border: "3px solid green",
  };

  return (
    <main style={styles}>
      {news.map(function (item, i) {
        return <Card key={i} item={item} />;
      })}
    </main>
  );
}
