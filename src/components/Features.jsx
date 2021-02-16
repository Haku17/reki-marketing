import Feature from './Feature'
import cat from '../images/cat-solid.svg'

const Features = () => {
  return (
    <div className="container__full features">
      <div className="container">
        <h3 className="heading features__header">Features</h3>
        <div className="features__container">
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
          <Feature header="test" body="Test body" img={cat} imgalt="cat"/>
        </div>
      </div>
    </div>
    
  )
}

export default Features