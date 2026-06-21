import { useMeetingList } from "../store/meetingStore"

const Meetings = () => {
   const meetings = useMeetingList((state) => state.meetings)
   const count = meetings.length

  return (
   <div>
          List of Meetings: 
        {
          // console.log(meetings)
          meetings.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }

        Total Meetings: 
        {
          count
        }
        </div>

  )
}

export default Meetings
