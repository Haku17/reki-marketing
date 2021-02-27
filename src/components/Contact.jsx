import arrow from "../images/arrow.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact__box">
          <h3 className="heading contact__heading">Contact us</h3>
          <p className="text contact__subheading">
            Start doing business better today! <br className="contact__br"/>
            Leave us your email and
            we'll contact you.
          </p>
          <form className="contact__form">
            <div className="contact__input">
              <label htmlFor="email">Your email</label>
              <input type="email" />
            </div>
            <button className="button">
              Lets go <img src={arrow} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <p className="text">RekiApp 2021</p>
        <p className="text">info@rekiapp.com</p>
        <p className="text invisible">RekiApp 2021</p>
      </div>
    </div>
  );
};

export default Contact;
