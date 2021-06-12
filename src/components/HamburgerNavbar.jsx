import { useState } from "react";
import { NavLink } from "react-router-dom";
import useLang from "../utils/useLang";

const HamburgerNavbar = ({ initLang, setLang }) => {
  const { lang, handleLang } = useLang(initLang, setLang);

  const app = document.getElementById("root");
  // true is modal open, false is modal closed //
  const [menuState, setMenuState] = useState(false);

  const handleHamburgerIcon = (e) => {
    e.stopPropagation();
    app.classList.toggle("body--modal-open");
    setMenuState((state) => !state);
  };

  const handleBackgroundClick = (e) => {
    console.log("background click!");
    app.classList.toggle("body--modal-open");
    setMenuState((state) => !state);
  };

  return (
    <div
      className={
        menuState
          ? "hamburgerNavbar"
          : "hamburgerNavbar--closed hamburgerNavbar"
      }
      onClick={menuState ? handleBackgroundClick : undefined}
    >
      <div
        className="hamburgerNavbar__icon"
        onClick={(e) => handleHamburgerIcon(e)}
      >
        <div className={menuState ? "change bar1" : "bar1"}></div>
        <div className={menuState ? "change bar2" : "bar2"}></div>
        <div className={menuState ? "change bar3" : "bar3"}></div>
      </div>
      <div
        className={
          menuState
            ? "hamburgerNavbar__container"
            : "hamburgerNavbar__container--closed hamburgerNavbar__container"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="hamburgerNavbar__ul">
          <li>
            <NavLink
              exact
              to={lang ? "/" : "/fi/"}
              activeClassName="hamburgerNavbar__active_link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={lang ? "/features" : "/fi/features"}
              activeClassName="hamburgerNavbar__active_link"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to={lang ? "/onboarding" : "/fi/onboarding"}
              activeClassName="hamburgerNavbar__active_link"
            >
              Onboarding
            </NavLink>
          </li>
          <li>
            <NavLink
              to={lang ? "/contact" : "/fi/contact"}
              activeClassName="hamburgerNavbar__active_link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburgerNavbar__lang">
          <p className="hamburgerNavbar__lang_title">
            {lang ? "Change Language:" : "Fi-Change Language:"}
          </p>
          <button className="hamburgerNavbar__langBtn" onClick={handleLang}>
            {lang ? "Suomeksi" : "English"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
