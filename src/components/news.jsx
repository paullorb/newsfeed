import Card from "./card";
import { CircleLoader } from "react-spinners";

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
      {news.length > 0 ? (
        news.map(function (item, i) {
          return <Card key={i} item={item} />;
        })
      ) : (
        <CircleLoader
          cssOverride={{ margin: "25% auto" }}
          size="400"
          color="#364fd6"
        />
      )}
    </main>
  );
}
