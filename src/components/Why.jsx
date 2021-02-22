import rekiAdmin from '../images/reki-admin.png'

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <div className="why__box">
          <div className="why__image">
            <img src={rekiAdmin} alt="Reki Admin View"/>
          </div>
          <div className="why__text">
            <h3 className="heading">Why</h3>
            <p className="text">The world is modernizing and technology is progressing faster then ever before. It is important to do business in the modern way. Our system gives your members more of the tools they need to do business in the modern world.</p>
            <p className="text">Access to up-to-date market data is crucial for making smart business moves, and our system guarantees they will always have the latest data to make the best decisions. Security, ease of use, and the ability to use it on any internet connected device are just a few of the reasons why associations love our system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why