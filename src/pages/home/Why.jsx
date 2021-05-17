import rekiAdmin from "../../images/reki-admin.png";

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <div className="why__box">
          <div className="why__image">
            <img src={rekiAdmin} alt="Reki Admin View" />
          </div>
          <div className="why__text">
            <h3 className="heading">Real human support</h3>
            <p className="text">
              The other main component is the support you get. Associations are
              unique, with different requirements, members, and data structures.
            </p>
            <p className="text">
              We will work closely together to refine your workflow and save
              your time, all while giving your members new benefits such as
              custom data tables and charts.
            </p>
            <p className="text">
              Our team is always ready to help when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
