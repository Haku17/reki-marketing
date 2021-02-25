import Hero from "./Hero"
import Showcase from './Showcase'
import Features from "./Features"
import What from './What'
import Why from './Why'
import Who from './Who'
import Contact from './Contact'
import "../styles/index.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLock, faGlobe, faComments, faUpload, faUserCog, faSyncAlt } from "@fortawesome/free-solid-svg-icons"

library.add(faLock, faGlobe, faComments, faUpload, faUserCog, faSyncAlt)


const App = () => {
  return (
    <>
      <Hero />
      <Showcase />
      <Features />
      <What />
      <Why />
      <Who />
      <Contact />
    </>
  )
}

export default App