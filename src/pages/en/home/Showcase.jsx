import chart from '../../../images/Reki-charts.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase__inner">
          <div className="showcase__image">
            <img src={chart} alt="Chart View" />
          </div>
          <div className="showcase__list">
            <h3 className="heading showcase__heading">Everything you need, all in one place</h3>
            <ul className="showcase__ul">
              <li className="text">Admin control panel</li>
              <li className="text">Dynamic data tables</li>
              <li className="text">Customizable charts</li>
              <li className="text">Notification system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase