const Feature = ({header, body, img, imgalt}) => {
  return (
    <div className="feature">
      <div>
        <img className="feature__icon" src={img} alt="imgalt"/>
      </div>
      <div>
        <h3 className="heading--mini">{header}</h3>
        <p className="text">{body}</p>
      </div>
    </div>
  )
}

export default Feature