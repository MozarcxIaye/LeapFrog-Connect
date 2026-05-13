import React from 'react'
import { useParams } from 'react-router'
import { UPCOMMING_MEETINGS } from '../data/upcommingMeetings'
import "./MeetingDetails.css"

const MeetingDetails = () => {

    const { meetingId } = useParams()
    const meeting = UPCOMMING_MEETINGS.find((item) => item.id === Number(meetingId))

    return (
        <div className='meeting-details'>
            <div className="meeting-header">
                <h2>{meetingId}. {meeting.title}</h2>
                <p>Host: {meeting.host}</p>
                <p>{meeting.time}</p>
            </div>
        </div>
    )
}

export default MeetingDetails