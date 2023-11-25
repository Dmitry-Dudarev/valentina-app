import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../images/header__logo.svg";
import { headerText } from "../../constants/header-text";
import "./Header.css";

function Header(props) {
  // получаем текущую локацию пользователя
  const currentLocation = useLocation().pathname;
  // формируем сообщение пользователю о его
  // текущем положении на сайте
  // на главной странице сообщения нет
  const location = (
    currentLocation === "/about-me" ? headerText.aboutMe : 
    currentLocation === "/portfolio" ? headerText.portfolio :
    currentLocation === "/services" ? headerText.services :
    currentLocation === "/contacts" ? headerText.contacts :
    "");

  return (
    <header className="header">
      <Link className="app-link header__main-link" to={"/"}>
        <img className="header__logo" src={HeaderLogo} alt="логотип" />
      </Link>
      
      <p className="app-text header__location">{location}</p>

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
