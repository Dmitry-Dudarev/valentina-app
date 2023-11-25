import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { mainText } from "../../constants/main-text";
import { linksText } from "../../constants/links-text";

function Main(props) {
  return (
    <section className="main">
      <div className="main__banner">
        <h1 className="app-text main__banner-text">
          Баннер на главной странице
        </h1>
      </div>
      <div className="main__content">
        <div className="main__grid">
          <div className="main__grid-cell main__grid-banner-left">левый баннер</div>
          <div className="main__grid-cell main__grid-banner-text">
            <p className="app-text main__banner-text main__grid-banner-text-paragraph-first">
              {mainText.textBlockParagraphFirst}
            </p>
            <hr className="main__banner-text-borderline" />
            <p className="app-text main__banner-text main__grid-banner-text-paragraph-second">
              {mainText.textBlockParagraphSecond}
            </p>
            <Link className="app-text app-link main__grid-banner-text-contacts-link" to={'./contacts'}>
              {linksText.contacts.toUpperCase()}
            </Link>
          </div>
          <div className="main__grid-cell main__grid-banner-right">правый баннер</div>

          <Link className="app-link main__grid-cell main__grid-about-me-link" to={"/about-me"}>
            <h2 className="app-text main__grid-cell-title">{linksText.aboutMe.toUpperCase()}</h2>
            <div className="main__grid-cell-image main__grid-about-me-cell-image" />
          </Link>

          <Link className="app-link main__grid-cell main__grid-portfolio-link" to={"/portfolio"}>
            <h2 className="app-text main__grid-cell-title">{linksText.portfolio.toUpperCase()}</h2>
            <div className="main__grid-cell-image" />
          </Link>

          <Link className="app-link main__grid-cell main__grid-services-link" to={"/services"}>
            <h2 className="app-text main__grid-cell-title">{linksText.services.toUpperCase()}</h2>
            <div className="main__grid-cell-services-section">

            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
