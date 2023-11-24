import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/header__logo.svg";
import { headerText } from "../../constants/header-text";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <Link className="app-link header__main-link" to={"/"}>
        <img className="header__logo" src={HeaderLogo} alt="логотип" />
      </Link>
      
      <div className="header__navigation">
        <Link className="app-link app-text header__navigation-link" to={"/about-me"}>
          {headerText.aboutMe}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/portfolio"}>
          {headerText.portfolio}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/services"}>
          {headerText.services}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/contacts"}>
          {headerText.contacts}
        </Link>
      </div>
    </header>
  );
};

export default Header;
