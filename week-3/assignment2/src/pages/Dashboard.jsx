import React from 'react'
import { DASHBOARD_ROUTES } from '../data/dashboardRoute'
import "./Dashboard.css"

const Dashboard = () => {
  const user = "Chris"
  return (
    <main>
      <section className="greeting">
        <h1>
          Good Morning, {user}
        </h1>
        <p>Here's what's happening with your meetings today.</p>
      </section>

      <section className="dash-routes">
        <div className="card-container">
          {DASHBOARD_ROUTES.map((item) => {
            return <div className='dashboard-cards'>
              <h2>{item.label}</h2>
              <p>{item.description}</p>
              <button style={{background: item.variant}}>{item.buttontext}</button>
            </div>
          })}
        </div>
      </section>

    </main>
  )
}

export default Dashboard