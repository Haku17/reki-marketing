import logo from "../images/Reki-logo.svg";
import arrow from "../images/arrow.svg";

const Hero = () => {
  return (
    <div className="container__full hero">
      <div className="container">
        <img className="hero__logo" src={logo} alt="Reki" />
        <div className="hero__textbox">
          <h1 className="hero__header heading--main">
            Data management for <br /> modern associations
          </h1>
          <div className="hero__subheader">
            <p className="text--main">
              We empower you to take control of your data.
            </p>
            <p className="text--main">Reki is built for associations that collect and <br className="hero__br"/> analyze data of all kinds.</p>
          </div>
          <a className="button button--link" href="#contact">
            Lets chat <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
