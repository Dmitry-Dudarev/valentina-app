import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { linksText } from "../../constants/links-text";
import { navigationText } from "../../constants/navigation-text";
import navigationLogo from "../../images/mainpage__logo.svg";

function Navigation(props) {
  return (
    <section className="navigation navigation_visible">
      <nav className="navigation__menu">
        <Link className="app-link app-text navigation__menu-link" to={"/about-me"}>
          {linksText.aboutMe.toUpperCase()}
        </Link>
        <Link className="app-link app-text navigation__menu-link" to={"/portfolio"}>
          {linksText.portfolio.toUpperCase()}
        </Link>
        <Link className="app-link app-text navigation__menu-link" to={"/services"}>
          {linksText.services.toUpperCase()}
        </Link>
        <Link className="app-link app-text navigation__menu-link" to={"/contacts"}>
          {linksText.contacts.toUpperCase()}
        </Link>
        <Link className="app-link navigation__menu-link" to={"/contacts"}>
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