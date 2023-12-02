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
    </div>
  );
};

export default MediumLinks;