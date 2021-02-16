import Hero from "./Hero"
import Showcase from './Showcase'
import "../styles/index.scss"
import Features from "./Features"
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Hero />
      <Showcase />
      <Features />
      <Showcase />
      <Contact />
    </>
  )
}

export default App