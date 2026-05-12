import React from 'react'
import { getFormattedDateTime } from '../../utils/dateTime'
import { useEffect, useState } from 'react'
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import "./Navbar.css"


const Navbar = () => {

  const [initialDate, initialTime] = getFormattedDateTime()
  const [date, setDate] = useState(initialDate)
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {

      const [formattedDate, formattedTime] = getFormattedDateTime()
      setDate(formattedDate)
      setTime(formattedTime)
    }, 1000)

    return (() => clearInterval(timer))
  }, [])

  return (
    <div className='nav-bar'>
      <div className="date">
        {date}
      </div>
      <div className="time">
        {time}
      </div>
      <div className="notifications">
        <FaBell/>
      </div>
      <div className="profile-mini">
        <IoPersonCircle className='profile-icon'/>
        <span>Chris</span>
      </div>
      <div className="menu-drop">
        <IoIosArrowDown/>
      </div>


    </div>
  )
}

export default Navbar