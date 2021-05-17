import rekiAdmin from "../../../images/reki-admin.png";

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <div className="why__box">
          <div className="why__image">
            <img src={rekiAdmin} alt="Reki Admin View" />
          </div>
          <div className="why__text">
            <h3 className="heading">Henkilökohtaista tukea</h3>
            <p className="text">
              Tärkeä osa palvelua on tarjoamamme käyttötuki. Jokainen yhdistys on erilainen ja jäsenet ja tietorakenteet asettavat erilaisia vaatimuksia.
            </p>
            <p className="text">
              Teemme tiivistä yhteistyötä kanssasi työsi tehostamiseksi. Samalla jäsenesi hyötyvät uusista, räätälöidyistä keinoista käsitellä ja tutkia tilastotietoja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
