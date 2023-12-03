import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../images/mainpage__logo.svg";
import MenuLogo from "../../images/sidemenu__icon.svg";
import { linksText } from "../../constants/links-text";
import { headerText } from "../../constants/header-text";
import "./Header.css";

function Header(props) {
  // выясняем ширину окна просмотра
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    // обновление состояния windowWidth с новой шириной окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // к глобальному объекту window добвляется слушатель события resize
    window.addEventListener('resize', handleResize);

    return () => {
      // удаляется слушатель события
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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


      {/* устанавливаем вариант отображения меню
      в зависимости от ширины окна просмотра */}
      {windowWidth > 768 ? (
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
      ) : (
        <img
          className="app-link header__menu-logo"
          alt={headerText.menuLogoAlt}
          src={MenuLogo}
          onClick={props.changeNavigationVisibility}
        />
      )}
    </header>
  );
};

export default Header;
