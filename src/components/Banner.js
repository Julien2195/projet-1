import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { TiLocationArrowOutline } from "react-icons/ti";
import SearchDataContainer from "./SearchDataContainer";
import { useSelector, useDispatch } from "react-redux";
import { setInput, show, hide } from "../features/searchState";
const Banner = () => {
  const showResults = useSelector((state) => state.search.value);
  const inputValue = useSelector((state) => state.search.input);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [reverseAddress, setReverseAddress] = useState([]);

  function handleChange(event) {
    dispatch(setInput(event.target.value));
    if (event.target.value.length < 3) {
      dispatch(hide());
      setResults([]);
      return;
    }
    // Recherche

    fetch(
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=${encodeURIComponent(
        event.target.value
      )}&format=json&limit=5`
    )
      .then((response) => response.json())
      .then((data) => {
        const address = data;
        setResults([address]);
        dispatch(show());
      });
  }
  // Recherche inversé
  const handleReverseLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      )
        .then((response) => response.json())
        .then((data) => {
          const address = data.display_name;
          setReverseAddress(address);
          dispatch(setInput(address));
          dispatch(show());

          setResults([]);
          setReverseAddress("");
        });
    });
  };
  return (
    <div className="header-infos">
      <h1>trouvetonlogement.com</h1>
      <div className="search-display">
        <div className="search-container">
          <div className="icon icon-loupe">
            <RxMagnifyingGlass className="svg-loupe" />
          </div>
          <div className="search-input">
            <input
              type="text"
              onChange={handleChange}
              value={inputValue || reverseAddress}
              placeholder="Lyon, Marseille, Paris, Grenoble, Biarritz..."
            />
          </div>
          <div className="icon icon-location">
            <TiLocationArrowOutline
              onClick={handleReverseLocation}
              className="svg-location"
            />
          </div>
          <button className="search-btn" type="submit">
            Rechercher
          </button>
        </div>
        {showResults ? <SearchDataContainer data={results} /> : null}
      </div>
    </div>
  );
};
export default Banner;
