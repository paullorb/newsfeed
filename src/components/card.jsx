import { emitFormatedDate } from "../helpers/emitFormatedDate";
import { fetchUrl } from "../helpers/fetchUrl";
import { truncateString } from "../helpers/truncateString";

export default function Card({ item }) {
  const styles = {
    flex: "0 0 33.333333%",
    border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    margin: "1%",
    maxWidth: "30%",
    height: "30rem",
  };

  const styleh1 = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    borderRadius: "10%",
    padding: "0% 10% 0%",
  };

  const styleimg = {
    width: "100%",
    backgroundImage: "url(https://placehold.co/600x400",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "0% 0% 30%",
  };
  const styleSpan = {
    display: "block",
    padding: "0.4rem",
  };
  return (
    <div style={styles}>
      <div style={styleh1}>
        <h3>{truncateString(`${item._highlightResult.title.value}`, 24)}</h3>
      </div>
      <div style={styleimg}>
        <img />
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

      <div>
        <h6>buttons</h6>
      </div>
    </div>
  );
}
