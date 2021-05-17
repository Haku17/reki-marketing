import logo from "../../../images/Reki-logo.svg";
import arrow from "../../../images/arrow.svg";

const Hero = () => {
  return (
    <div className="container__full hero">
      <div className="container">
        <img className="hero__logo" src={logo} alt="Reki" />
        <div className="hero__textbox">
          <h1 className="hero__header heading--main">
            Modernia tilastointia <br /> yhdistyksille ja järjestöille
          </h1>
          <div className="hero__subheader">
            <p className="text--main">
              Hallitse yhdistyksesi keräämiä tietoja.
            </p>
            <p className="text--main">Rekin avulla käsittelet helposti jäsentesi <br className="hero__br" />myyntilukuja ja muita tilastoja.</p>
          </div>
          <a className="button button--link" href="#contact">
            Tehosta tilastointia Rekillä <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
