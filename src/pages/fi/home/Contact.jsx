const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact__box">
          <h3 className="heading contact__heading">Ota yhteyttä</h3>
          <p className="text contact__subheading">
            Tehosta yhdistyksesi toimintaa jo tänään. <br className="contact__br" />
            Ota meihin yhteyttä sähköpostitse ja kerro meille tarpeistasi.
          </p>
          <a className="contact__link" href="mailto:info@rekiapp.com">info@rekiapp.com</a>
          {/*<form className="contact__form">
            <div className="contact__input">
              <label htmlFor="email">Your email</label>
              <input type="email" />
            </div>
            <button className="button">
              Lets go <img src={arrow} alt="" />
            </button>
          </form>*/}
        </div>
      </div>
      <div className="contact__footer">
        <p className="text">Reki © 2021</p>
      </div>
    </div>
  );
};

export default Contact;
