import arrow from '../images/arrow.svg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__box">
          <h3 className="heading">Contact us</h3>
          <p className="text">Start doing business better today! Tell us how to reach you and we'll contact you.</p>
          <form className="contact__form">
            <label htmlFor="email">Your email</label>
            <input type="email"/>
            <button className="button">Lets go <img src={arrow} alt=""/></button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <p className="text">RekiApp 2021</p>
        <p className="text">info@rekiapp.com</p>
        <p className="text invisible">RekiApp 2021</p>
      </div>
    </div>
  )
}

export default Contact