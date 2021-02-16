const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__box">
          <h3>Contact us</h3>
          <p>Start doing business better today! Tell us how to reach you and we'll contact you.</p>
          <form className="contact__form">
            <label htmlFor="email">Your email</label>
            <input type="email"/>
            <button>Lets go</button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <p>RekiApp 2021</p>
        <p>info@rekiapp.com</p>
      </div>
    </div>
  )
}

export default Contact