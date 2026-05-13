import React from 'react'
import { DASHBOARD_ROUTES } from '../data/dashboardRoute'
import "./Dashboard.css"
import { UPCOMMING_MEETINGS } from '../data/upcommingMeetings'
import { useNavigate } from 'react-router'

const Dashboard = () => {
  
  const navigate = useNavigate()

  const handleJoin = (id) => {
    navigate(`/meetings/${id}`)
  }

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
              <button style={{ background: item.variant }}>{item.buttontext}</button>
            </div>
          })}
        </div>
      </section>

      <section className='upcomming-meetings'>
        <div className="meetings-header">
          <h2>Upcomming Meetings</h2>
          <div>
            <button>View All</button>
          </div>
        </div>
        <div className="meetings">
          {UPCOMMING_MEETINGS.map((item) => {
            return <div className='meeting' key={item.id}>
              <div className="meeting-main">
                <h3>{item.title}</h3>
                <p>Host: {item.host}</p>
              </div>
              <div className="meeting-description">
                <p className="meeting-time">
                  {item.time}
                </p>
                <div className="join-btn">
                  <button onClick={() => handleJoin(item.id)}>Join</button>
                </div>
              </div>

            </div>
          })}
        </div>

      </section>

    </main>
  )
}

export default Dashboard