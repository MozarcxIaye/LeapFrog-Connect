import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './components/Homepage'
import PageNotFound from './components/common/PageNotFound'
import Appshell from './layouts/Appshell'
import Dashboard from './pages/Dashboard'
import Calendar from './pages/Calendar'
import ProfileSetting from './pages/ProfileSetting'
import NewMetting from './pages/NewMeeting'
import JoinMeeting from './pages/JoinMeeting'
import ScheduleMeeting from './pages/ScheduleMeeting'
import MeetingDetails from './pages/MeetingDetails'
import MeetingInfo from './components/MeetingInfo'
import MeetingParticipants from './components/MeetingParticipants'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Appshell />}>
        <Route index path='/' element={<Dashboard />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/join-meeting' element={<JoinMeeting />}></Route>
        <Route path='/new-meeting' element={<NewMetting />}></Route>
        <Route path='/schedule-meeting' element={<ScheduleMeeting />}></Route>
        <Route path='/profile-setting' element={<ProfileSetting />}></Route>

        <Route path='/meetings/:meetingId' element={<MeetingDetails />}>
          <Route index element={<MeetingInfo />}/>
          <Route path='details' element={<MeetingInfo/>}></Route>
          <Route path='participants' element={<MeetingParticipants/>}></Route>
        </Route>
      </Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App