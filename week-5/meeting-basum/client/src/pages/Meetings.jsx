import { useMeetingList } from "../store/meetingStore"

const Meetings = () => {
  const meetings = useMeetingList((state) => state.meetings)
  const count = meetings.length
  const addMeeting = useMeetingList(s => s.addMeeting)
  // addMeeting("Meeting 4")

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

      <button onClick={() => addMeeting(`Meeting ${meetings.length + 1}`)}>
        Add Meeting
      </button>

    </div>

  )
}

export default Meetings
