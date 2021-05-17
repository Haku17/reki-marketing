import Feature from './Feature'

const Features = () => {
  return (
    <div className="container__full features">
      <div className="container">
        <h3 className="heading features__header">Features</h3>
        <div className="features__container">
          <Feature header="Security" body="All data is encrypted to modern standards for complete security." img="lock" />
          <Feature header="Data Backups" body="Daily backups so your data is always safe." img="sync-alt" />
          <Feature header="Upload System" body="Upload data through Excel, custom templates, or fill data right on the page." img="upload" />
          <Feature header="Admin control panel" body="Manage users, data, notifications, and much more from one place." img="user-cog" />
          <Feature header="Multi-language" body="Finnish and English fully supported." img="globe" />
          <Feature header="Support" body="Whether you need tech support or a new feature, our support is at your service." img="comments" />
        </div>
      </div>
    </div>
    
  )
}

export default Features