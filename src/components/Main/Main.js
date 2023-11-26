import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { mainText } from "../../constants/main-text";
import { linksText } from "../../constants/links-text";

import designIcon from "../../images/main-services-design__icon.svg";
import archicadIcon from "../../images/main-services-archicad__icon.svg";

function Main(props) {
  // для показа списка услуг вместо правого баннера 
  // добавиим слушатели событий.
  React.useEffect(() => {
    // вначале найдем в DOM необходимые объекты
    const servicesLink = document.querySelector('.main__grid-services-link');
    const bannerRight = document.querySelector('.main__grid-banner-right');
    const servicesDescription = document.querySelector('.main__services-description');

    // напишем логику для наведения мыши на блок услуг
    const handleMouseEnter = () => {
      bannerRight.style.display = 'none';
      servicesDescription.style.display = 'flex';
    };
    // и логику для отведения мыши с блока услуг
    const handleMouseLeave = () => {
      bannerRight.style.display = 'block';
      servicesDescription.style.display = 'none';
    };

    // добавим обработчики событий
    // добавим проверку, чтобы обработчик событий 
    // не пытался навеситься на отсутствующие элементы
    if (servicesLink) {
      servicesLink.addEventListener('mouseenter', handleMouseEnter);
      servicesLink.addEventListener('mouseleave', handleMouseLeave);
    };

    // Функция очистки
    return () => {
      if (servicesLink) {
        servicesLink.removeEventListener('mouseenter', handleMouseEnter);
        servicesLink.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="main">
      <div className="main__banner" />
      <div className="main__content">
        <div className="main__grid">
          <div className="main__grid-cell main__grid-banner-left" />
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
          <div className="main__grid-cell main__grid-banner-right" />

          <Link className="app-link main__grid-cell main__grid-about-me-link" to={"/about-me"}>
            <h2 className="app-text main__grid-cell-title">{linksText.aboutMe.toUpperCase()}</h2>
            <div className="main__grid-cell-image main__grid-about-me-cell-image" />
          </Link>

          <Link className="app-link main__grid-cell main__grid-portfolio-link" to={"/portfolio"}>
            <h2 className="app-text main__grid-cell-title main__grid-portfolio-link-title">
              {linksText.portfolio.toUpperCase()}
            </h2>
            <div className="main__grid-cell-image main__grid-portfolio-cell-image" />
          </Link>

          <Link className="app-link main__grid-cell main__grid-services-link" to={"/services"}>
            <h2 className="app-text main__grid-cell-title">{linksText.services.toUpperCase()}</h2>
            <div className="main__grid-cell-services-section">
              <div className="main__interior-design-icon" />
              <div className="main__archicad-project-icon" />
              <div className="main__all-services-icon" />
            </div>
          </Link>

          <ul className="main__services-description">
            <li className="main__services-description-item main__services-description-interior-design">
              <img
                className="main__services-description-item-image main__services-description-interior-design-icon"
                alt={mainText.designIconDescription}
                src={designIcon}
              />
              <p className="app-text main__interior-design-link-description">
                {mainText.designIconDescription.toUpperCase()}
              </p>
            </li>

            <li className="main__services-description-item main__services-description-archicad-project">
              <img
                className="main__services-description-item-image main__services-description-archicad-project-icon"
                alt={mainText.archicadIconDescription}
                src={archicadIcon}
              />
              <p className="app-text main__interior-design-link-description">
                {mainText.archicadIconDescription.toUpperCase()}
              </p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Main;
