import React from 'react'
import "./Calendar.css"
import { useSearchParams } from 'react-router'
import { useState } from 'react'

const Calendar = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentView = searchParams.get("view") || "month"

  const handleView = (newView) => {
    setSearchParams({ view: newView })
  }

  return (
    <div className='calendar'>
      <div className="calendar-header">

        <h1>Calendar</h1>
        <div className="toggle-btns">
          <button className={currentView === "month" ? "active" : ""} onClick={() => handleView("month")}>Monthly View</button>
          <button className={currentView === "week" ? "active" : ""} onClick={() => handleView('week')}>Weekly View</button>
        </div>
      </div>

      <div className="view-contents">
        {currentView === 'month' ? (<div className='monthly-view'>Monthly View</div>) : (<div className='weekly-view'>Weekly View</div>)}
      </div>

    </div>
  )
}

export default Calendar