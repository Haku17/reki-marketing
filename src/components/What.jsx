import rekiTable from "../images/reki-tables.jpg";

const What = () => {
  return (
    <div className="what">
      <div className="container">
        <div className="what__box">
          <div className="what__text">
            <h3 className="heading">Data management modernized</h3>
            <p className="text">Reki is a data management system for associations to automate common tasks. It lives on the web so you can use it wherever you have internet access. There are two sides to our system:</p>
            <p className="text">The first is the admin control panel. Here you have complete control over your system, the data, and all your users. You can add users, change permissions, view statistics and send emails.</p>
            <p className="text">The other side is for your members. They can create custom tables and charts, download Excels of tables, and use our easy upload system. They can choose to upload from our Excel templates, fill a form manually, or even send custom Excels!</p>
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