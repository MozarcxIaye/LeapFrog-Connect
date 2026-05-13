import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router'
import { UPCOMMING_MEETINGS } from '../data/upcommingMeetings'
import "./MeetingDetails.css"

const MeetingDetails = () => {


    return (
        <div className='meeting-details'>
            <div className="tabs">
                <NavLink to='details'>Details</NavLink>
                <NavLink to='participants'>Participants</NavLink>
            </div>

            <div className="meeting-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MeetingDetails