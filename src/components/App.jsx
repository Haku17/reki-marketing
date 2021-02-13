import "../styles/index.scss"
import Data from './data'
import dragon from '../images/dragon.png'
import piggy from '../images/piggy.svg'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi from React</h1>
        </section>
        <img src={dragon} alt="dragon" width="250"/>
        <img src={piggy} alt="piggy" width="250"/>
        <Data />
      </main>
    </>
  )
}

export default App