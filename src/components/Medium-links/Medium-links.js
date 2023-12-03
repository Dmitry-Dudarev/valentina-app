import React from "react";
import { Link } from "react-router-dom";
import { linksText } from "../../constants/links-text";
import "./Medium-links.css";

function MediumLinks(props) {
  return (
    <div className="medium-links">
      <Link className="medium-links__unit medium-links__about-me" to={"/about-me"}>
        <h2 className="app-text medium-links__title">
          {linksText.aboutMe.toUpperCase()}
        </h2>
        <div className="medium-links__content">

        </div>
      </Link>
      <Link className="medium-links__unit medium-links__portfolio" to={"/portfolio"}>
        <h2 className="app-text medium-links__title">
          {linksText.portfolio.toUpperCase()}
        </h2>
        <div className="medium-links__content">

        </div>
      </Link>
      <Link className="medium-links__unit medium-links__services" to={"/services"}>
        <h2 className="app-text medium-links__title">
          {linksText.services.toUpperCase()}
        </h2>
        <div className="medium-links__content">

        </div>
      </Link>
      <Link className="medium-links__unit medium-links__contacts" to={"/contacts"}>
        <h2 className="app-text medium-links__title">
          {linksText.contacts.toUpperCase()}
        </h2>
        <div className="medium-links__content">

        </div>
      </Link>
    </div>
  );
};

export default MediumLinks;