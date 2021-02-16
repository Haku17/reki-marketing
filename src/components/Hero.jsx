import logo from "../images/Reki-logo.svg"

const Hero = () => {
  return (
    <div className="container__full hero">
      <div className="container">
        <img src={logo} alt="Reki"/>
        <div>
          <h1>Data management for modern associations</h1>
          <p>We empower you to take control of your data.</p>
          <p>View, collect and edit data easily</p>
          <button>Lets chat</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;