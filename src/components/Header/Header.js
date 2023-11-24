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
          {headerText.aboutMe.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/portfolio"}>
          {headerText.portfolio.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/services"}>
          {headerText.services.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/contacts"}>
          {headerText.contacts.toUpperCase()}
        </Link>
      </div>
    </header>
  );
};

export default Header;
