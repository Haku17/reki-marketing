import rekiTable from "../../../images/reki-tables.jpg";

const What = () => {
  return (
    <div className="what">
      <div className="container">
        <div className="what__box">
          <div className="what__text">
            <h3 className="heading">Modernia tietojenkäsittelyä</h3>
            <p className="text">Reki on yhdistyksille, liitoille ja järjestöille luotu tiedonhallintajärjestelmä, joka helpottaa arjen työtehtäviä. Palvelu toimii täysin verkossa, eli voit käyttää sitä aina kun sinulla on verkkoyhteys. Järjestelmä koostuu kahdesta osasta:</p>
            <ul className="what__ul">
              <li className="what__li text"><strong>Ylläpidon hallintanäkymästä</strong>, jonka avulla hallinnoit järjestelmää, tietoja sekä käyttäjiä. Voit lisätä käyttäjiä, muuttaa käyttöoikeuksia, seurata tilastoja ja lähettää sähköposteja.</li>
              <li className="what__li text"><strong>Jäsenillesi tarkoitetusta näkymästä</strong>, jossa he voivat käsitellä ja analysoida tilastotietoja ja tallentaa niitä itselleen Excel-tiedostoina. He voivat itse ladata tietoja palveluun Excel-pohjiemme avulla, täyttää tietoja suoraan tai lähettää jopa omia räätälöityjä Excel-tiedostojaan.</li>
            </ul>
          </div>
          <div className="what__image">
            <img src={rekiTable} alt="Reki Table"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;