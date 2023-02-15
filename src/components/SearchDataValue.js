import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, hide } from "../features/searchState";

const SearchDataValue = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hide());
    dispatch(setInput(props.value.address));
  };
  return (
    <li className="search-entry" onClick={handleClick}>
      {console.log(props.value.address.road)}
    </li>
  );
};

export default SearchDataValue;
