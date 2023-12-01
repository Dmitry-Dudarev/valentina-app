import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { linksText } from "../../constants/links-text";
import { navigationText } from "../../constants/navigation-text";
import navigationLogo from "../../images/mainpage__logo.svg";

function Navigation(props) {
  // получаем текущую локацию пользователя
  const location = useLocation().pathname;

  return (
    <section
      className={`navigation ${props.isNavigationVisible ? "navigation_visible" : ""}`}
      onClick={props.changeNavigationVisibility}
    >
      <nav className="navigation__menu">
        <Link
          className={`app-link app-text navigation__menu-link ${location === "/about-me" ? "navigation__menu-link_current" : ""} `}
          to={"/about-me"}>
          {linksText.aboutMe.toUpperCase()}
        </Link>
        <Link
          className={`app-link app-text navigation__menu-link ${location === "/portfolio" ? "navigation__menu-link_current" : ""} `}
          to={"/portfolio"}>
          {linksText.portfolio.toUpperCase()}
        </Link>
        <Link
          className={`app-link app-text navigation__menu-link ${location === "/services" ? "navigation__menu-link_current" : ""} `}
          to={"/services"}>
          {linksText.services.toUpperCase()}
        </Link>
        <Link
          className={`app-link app-text navigation__menu-link ${location === "/contacts" ? "navigation__menu-link_current" : ""} `}
          to={"/contacts"}>
          {linksText.contacts.toUpperCase()}
        </Link>
        <Link
          className={`app-link navigation__menu-link navigation__menu-link-logo ${location === "/" ? "navigation__menu-link_current" : ""} `}
          to={"/"}>
          <img
            className="navigation__menu-logo"
            alt={navigationText.mainLinkLogoAlt}
            src={navigationLogo}
          />
        </Link>
      </nav>
    </section>
  );
};

export default Navigation;