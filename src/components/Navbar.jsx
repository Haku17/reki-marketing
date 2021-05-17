import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import logo from "../images/Reki-logo.svg"



const Navbar = ({ lang, setLang }) => {

  const [width, setWidth] = useState(() => window.innerWidth)


  const history = useHistory()

  function handleLang() {
    setLang(lang => !lang)
  }

  useEffect(() => {
    console.log(lang)
    // lang true means english routes
    if (lang) {
      const splitUrl = history.location.pathname.split('/')
      const newUrl = splitUrl[splitUrl.length - 1]
      console.log(`/${newUrl}`)
      return history.push(`/${newUrl}`)
    }
    // lang false means /fi routes
    if (!lang) {
      return history.push(`/fi${history.location.pathname}`)
    }
  }, [lang])

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <div className="navbar">
      <img src={logo} alt="Reki Logo" className="navbar__logo" />
      {width > 1024 ? (
        <>
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
        </>
      ) :
        (
          <p>WIDTH IS: {width}</p>
        )
      }
    </div>
  );
}

export default Navbar;