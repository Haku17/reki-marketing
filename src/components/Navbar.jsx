import { Link } from "react-router-dom"
import logo from "../images/Reki-logo.svg"
import useLang from "../utils/useLang";



const Navbar = ({ initLang, setLang }) => {

  const { lang, handleLang } = useLang(initLang, setLang)

  return (
    <div className="navbar">
      <img src={logo} alt="Reki Logo" className="navbar__logo" />
      <ul>
        <li>
          <Link to={lang ? "/contact" : "/fi/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={lang ? "/onboarding" : "/fi/onboarding"}>Onboarding</Link>
        </li>
        <li>
          <Link to={lang ? "/features" : "/fi/features"}>Features</Link>
        </li>
        <li>
          <Link to={lang ? "/" : "/fi/"}>Home</Link>
        </li>
      </ul>
      <div className="navbar__lang">
        <button className="navbar__langBtn" onClick={handleLang} disabled={lang}>En</button>
        <span className="navbar__span--divide">/</span>
        <button className="navbar__langBtn" onClick={handleLang} disabled={!lang}>Fi</button>
      </div>
    </div>
  );
}

export default Navbar;