import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Feature = ({header, body, img}) => {
  return (
    <div className="feature">
      <div className="feature__icon">
        <FontAwesomeIcon icon={img} />
      </div>
      <div className="feature__card">
        <h3 className="heading--mini feature__header">{header}</h3>
        <p className="text feature__body">{body}</p>
      </div>
    </div>
  )
}

export default Feature