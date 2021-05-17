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
            <h3 className="heading showcase__heading">Kaikki tarvitsemasi yhdessä palvelussa</h3>
            <ul className="showcase__ul">
              <li className="text">Ylläpidon hallintanäkymä</li>
              <li className="text">Dynaamiset taulukot</li>
              <li className="text">Räätälöidyt kaaviot</li>
              <li className="text">Ilmoitusjärjestelmä</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase