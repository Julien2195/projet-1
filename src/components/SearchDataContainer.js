import React from "react";
import SearchDataValue from "./SearchDataValue";

const SearchDataContainer = (props) => {
  const containerUl = {
    background: "#fff",
    padding: 0,
    margin: 0,
    width: 459,
    position: "relative",
    left: -34,
    zIndex: 1,
  };
  return (
    <ul style={containerUl}>
      {props.data.map((x) => (
        <SearchDataValue value={x} />
      ))}
    </ul>
  );
};

export default SearchDataContainer;
