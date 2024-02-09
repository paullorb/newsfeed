import PropTypes from "prop-types";

const Structure = ({ children }) => {
  const styles = {
    // border: "3px solid blue",
    height: "100% !important",
    margin: "1rem",
    display: "grid",
    gridTemplateRows: "7fr 7fr 1fr",
    gridTemplateColumns: "1fr 7fr 7fr",
    gridTemplateAreas: `
      "header news news"
      "header news news"
      "header footer footer"
      `,
    overflow: "auto",
  };

  return <div style={styles}>{children}</div>;
};

Structure.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Structure;
