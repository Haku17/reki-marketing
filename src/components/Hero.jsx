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
            <p className="text--main">View, collect and edit data easily</p>
          </div>
          <button className="button">
            Lets chat <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
