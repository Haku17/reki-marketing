import chart from '../images/Reki-charts.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__postition">
        <img src={chart} alt="Chart View"/>
      </div>
      <div className="showcase__postition">
        <h3>Everything you need, all in one place</h3>
        <ul>
          <li>Admin control panel</li>
          <li>Dynamic data tables</li>
          <li>Customizable charts</li>
          <li>Data security</li>
        </ul>
        <p>... discover even more features below!</p>
      </div>
    </div>
  )
}

export default Showcase