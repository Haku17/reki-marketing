import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/home/Home'
import Features from '../pages/features/Features'
import Onboarding from '../pages/onboarding/Onboarding'
import Contact from '../pages/contact/Contact'
import "../styles/index.scss"
import { useState } from 'react'



const App = () => {
  const [lang, setLang] = useState(() => true)
  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Switch>
        <Route path="/features" exact>
          <Features />
        </Route>
        <Route path="/onboarding" exact>
          <Onboarding />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Fi routes */}
        <Route path="/fi/features" exact>
          <Features />
        </Route>
        <Route path="/fi/onboarding" exact>
          <Onboarding />
        </Route>
        <Route path="/fi/contact" exact>
          <Contact />
        </Route>
        <Route path="/fi/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App