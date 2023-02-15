import React from "react";
import headerBackground from "../assets/background-img.jpg";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="header">
      <figure className="header-background">
        <picture>
          <img src={headerBackground} alt="" />
        </picture>
      </figure>
      <Banner />
    </div>
  );
};

export default Header;
