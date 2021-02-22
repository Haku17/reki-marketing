import rekiTable from "../images/reki-tables.jpg";

const What = () => {
  return (
    <div className="what">
      <div className="container">
        <div className="what__box">
          <div className="what__text">
            <h3 className="heading">what</h3>
            <p className="text">Are you an association that handles a lot of data and is looking for a better system to manage all of it? Is a lot of your time spent entering data into Excel or creating spreadsheets by hand? Reki is a data management system designed specifically for the needs of Finnish associations to automate these common tasks. Reki handles all of the data related tasks allowing you to get back to doing what your association does best.</p>
            <p className="text">All associations are different, with different needs, members, and data structures. That is why Reki is built in a customizable way so that the system will work best for you. We will work closely together to refine your workflow and save your time, all while giving your members new benefits such as custom data tables and charts.</p>
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
