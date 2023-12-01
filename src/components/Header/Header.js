import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../images/mainpage__logo.svg";
import { linksText } from "../../constants/links-text";
import "./Header.css";

function Header(props) {
  // получаем текущую локацию пользователя
  const currentLocation = useLocation().pathname;
  // формируем сообщение пользователю о его
  // текущем положении на сайте
  // на главной странице сообщения нет
  const location = (
    currentLocation === "/about-me" ? linksText.aboutMe : 
    currentLocation === "/portfolio" ? linksText.portfolio :
    currentLocation === "/services" ? linksText.services :
    currentLocation === "/contacts" ? linksText.contacts :
    "");

  return (
    <header className="header">
      <Link className="app-link header__main-link" to={"/"}>
        <img className="header__logo" src={HeaderLogo} alt="логотип" />
      </Link>
      
      <p className="app-text header__location">{location}</p>

      <div className="header__navigation">
        <Link className="app-link app-text header__navigation-link" to={"/about-me"}>
          {linksText.aboutMe.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/portfolio"}>
          {linksText.portfolio.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/services"}>
          {linksText.services.toUpperCase()}
        </Link>
        <Link className="app-link app-text header__navigation-link" to={"/contacts"}>
          {linksText.contacts.toUpperCase()}
        </Link>
      </div>
    </header>
  );
};

export default Header;
