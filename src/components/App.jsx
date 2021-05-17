import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeEn from '../pages/en/home/Home'
import FeaturesEn from '../pages/en/features/Features'
import OnboardingEn from '../pages/en/onboarding/Onboarding'
import ContactEn from '../pages/en/contact/Contact'
import HomeFi from '../pages/fi/home/Home'
import FeaturesFi from '../pages/fi/features/Features'
import OnboardingFi from '../pages/fi/onboarding/Onboarding'
import ContactFi from '../pages/fi/contact/Contact'
import "../styles/index.scss"
import { useState } from 'react'

const App = () => {
  const [lang, setLang] = useState(() => true)
  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Switch>
        <Route path="/features" exact>
          <FeaturesEn />
        </Route>
        <Route path="/onboarding" exact>
          <OnboardingEn />
        </Route>
        <Route path="/contact" exact>
          <ContactEn />
        </Route>
        <Route path="/" exact>
          <HomeEn />
        </Route>
        {/* Fi routes */}
        <Route path="/fi/features" exact>
          <FeaturesFi />
        </Route>
        <Route path="/fi/onboarding" exact>
          <OnboardingFi />
        </Route>
        <Route path="/fi/contact" exact>
          <ContactFi />
        </Route>
        <Route path="/fi/" exact>
          <HomeFi />
        </Route>
      </Switch>
    </Router>
  )
}

export default App