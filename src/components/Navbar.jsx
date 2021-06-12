import { NavLink } from "react-router-dom";
import logo from "../images/Reki-logo.svg";
import useLang from "../utils/useLang";

const Navbar = ({ initLang, setLang }) => {
  // lang is bool => true:english; false:finnish //
  const { lang, handleLang } = useLang(initLang, setLang);

  return (
    <div className="navbar">
      <img src={logo} alt="Reki Logo" className="navbar__logo" />
      <ul>
        <li>
          <NavLink
            to={lang ? "/contact" : "/fi/contact"}
            activeClassName="navbar__active_link"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={lang ? "/onboarding" : "/fi/onboarding"}
            activeClassName="navbar__active_link"
          >
            Onboarding
          </NavLink>
        </li>
        <li>
          <NavLink
            to={lang ? "/features" : "/fi/features"}
            activeClassName="navbar__active_link"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={lang ? "/" : "/fi/"}
            activeClassName="navbar__active_link"
          >
            Home
          </NavLink>
        </li>
      </ul>
      <div className="navbar__lang">
        <button
          className="navbar__langBtn"
          onClick={handleLang}
          disabled={lang}
        >
          En
        </button>
        <span className="navbar__span--divide">/</span>
        <button
          className="navbar__langBtn"
          onClick={handleLang}
          disabled={!lang}
        >
          Fi
        </button>
      </div>
    </div>
  );
};

export default Navbar;
