import { emitFormatedDate } from "../helpers/emitFormatedDate";
import { fetchUrl } from "../helpers/fetchUrl";
import { truncateString } from "../helpers/truncateString";
import { fetchRandomString } from "../helpers/fetchRandomString";

export default function Card({ item }) {
  const styles = {
    flex: "0 0 33.333333%",
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    margin: "1%",
    maxWidth: "30%",
    height: "50rem",
  };

  const styleh1 = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.1rem",
    borderRadius: "10%",
    padding: "0% 5% 0%",
    height: "4rem",
  };

  const styleimg = {
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "0",
  };
  const styleSpan = {
    display: "block",
    padding: "0.4rem",
  };
  return (
    <div style={styles}>
      <div style={styleh1}>
        <h3>{truncateString(`${item._highlightResult.title.value}`, 80)}</h3>
      </div>
      <div style={styleimg}>
        <img
          style={{ width: "100%" }}
          src={`https://picsum.photos/seed/${fetchRandomString(5)}/600/400`}
        />
      </div>
      <div>
        <span style={styleSpan}>
          Author: {item._highlightResult.author.value} | Date:{" "}
          {emitFormatedDate(`${item.created_at}`)}
        </span>
        <span style={styleSpan}>
          Points: {item.points} | source website:
          {fetchUrl(item.url)}
        </span>
        <span style={styleSpan}>comments: {item.num_comments}</span>
      </div>

      <div className="sharethis-inline-share-buttons"></div>
    </div>
  );
}
