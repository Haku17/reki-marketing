import Feature from './Feature'

const Features = () => {
  return (
    <div className="container__full features">
      <div className="container">
        <h3 className="heading features__header">Ominaisuudet</h3>
        <div className="features__container">
          <Feature header="Tietoturva" body="Salaamme kaikki tilastotiedot viimeisimpien standardien mukaisesti." img="lock" />
          <Feature header="Varmuuskopiot" body="Teemme varmuuskopiot päivittäin, jotta tietosi pysyvät tallessa." img="sync-alt" />
          <Feature header="Latausjärjestelmä" body="Lataa tilastot Excel-mallipohjiemme avulla tai täytä tiedot suoraan palveluun." img="upload" />
          <Feature header="Hallintanäkymä" body="Hallinnoi käyttöoikeuksia, ilmoituksia ja paljon muuta yhdestä paikasta." img="user-cog" />
          <Feature header="Monikielinen" body="Palvelumme on täysin tuettu suomeksi ja englanniksi." img="globe" />
          <Feature header="Käyttötuki" body="Kun tarvitset teknistä tukea tai uuden toiminnon, olemme täällä sinua varten." img="comments" />
        </div>
      </div>
    </div>

  )
}

export default Features