import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/header__logo.svg";
import { headerText } from "../../constants/header-text";

function Header(props) {
  return(
    <header className="header">
      <img className="header__logo" src={HeaderLogo} alt="логотип"/>
      <div className="header__navigation">
        <Link className="header__navigation-link" to={"/"}>{headerText.aboutMeRU}</Link>
      </div>
    </header>
  );
};

export default Header;
