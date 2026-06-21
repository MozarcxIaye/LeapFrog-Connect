import {create} from "zustand"

export const useMeetingList = create((set, get)=> ({
    meetings: ["Meeting 1", "Meeting 2", "Meeting 3"],
    getMeetings: () => state.meetings,
    addMeetings: (value) => set((state) => [...state.meetings, value]),

}))