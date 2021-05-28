import React from 'react'

export default function Security() {
  return (
    <div className="container">
      <h3 className="heading">Security</h3>
      <ul>
        <li className="text">SSl</li>
        <li className="text">Password encryption</li>
        <li className="text">Database encryption</li>
        <li className="text">Server located in Finland</li>
        <li className="text">Daily backups</li>
        <li className="text">Easily restore system if lost or corrupted</li>
      </ul>
      <p className="text">Keeping your data safe is a top priority for us. We keep up-to-date with all of the latest web security standards. Features like password encryption and SSL enforcement are built in, and all data is stored in servers located in Finland.</p>
      <p className="text">Along with security comes our backup service. Our system takes daily backups and keeps a history of snapshots for up to two months. At any point if something unexpected happens, we can flash a backup of your system and have you up and running again in no time. </p>
    </div>
  )
}
