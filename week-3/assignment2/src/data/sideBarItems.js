import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaUser } from "react-icons/fa";



export const SIDEBAR_LINKS = [
    {
        id: 1,
        label: "Dashboard",
        path: "/",
        icon: FaHome
    },
     {
        id: 2,
        label: "New Meeting",
        path: "/new-meeting",
        icon: FaPlay
    },
     {
        id: 3,
        label: "Join Meeting",
        path: "/join-meeting",
        icon: IoMdLink
    },
     {
        id: 4,
        label: "Calendar",
        path: "/calendar",
        icon: FaRegCalendarAlt
    },
     {
        id: 5,
        label: "Schedule Meeting",
        path: "/schedule-meeting",
        icon: FiClock
    },
     {
        id: 6,
        label: "Profile Setting",
        path: "/profile-setting",
        icon: FaUser
    },
]