const Feature = ({header, body, img, imgalt}) => {
  return (
    <div className="feature">
      <div>
        <img className="feature__icon" src={img} alt="imgalt"/>
      </div>
      <div>
        <h3 className="heading--mini feature__header">{header}</h3>
        <p className="text feature__body">{body}</p>
      </div>
    </div>
  )
}

export default Feature