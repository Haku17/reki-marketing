import Feature from './Feature'
import cat from '../images/cat-solid.svg'

const Features = () => {
  return (
    <div className="container__full features">
      <div className="container">
        <h3 className="heading features__header">Features</h3>
        <div className="features__container">
          <Feature header="Feature 1" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
          <Feature header="Feature 2" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
          <Feature header="Feature 3" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
          <Feature header="Feature 4" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
          <Feature header="Feature 5" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
          <Feature header="Feature 6" body="This is such a great feature. We could talk about it all day long." img={cat} imgalt="cat"/>
        </div>
      </div>
    </div>
    
  )
}

export default Features