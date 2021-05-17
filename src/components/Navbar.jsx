import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom"

const Navbar = ({ lang, setLang }) => {

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

  return (
    <div className="navbar">
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
      <div>
        <button onClick={handleLang} disabled={lang}>en</button>/<button onClick={handleLang} disabled={!lang}>fi</button>
      </div>
    </div>
  );
}

export default Navbar;