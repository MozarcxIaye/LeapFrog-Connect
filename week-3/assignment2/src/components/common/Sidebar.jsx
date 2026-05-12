import React from 'react'
import "./Sidebar.css"
import { SIDEBAR_LINKS } from '../../data/sideBarItems'
import { NavLink } from 'react-router'

const Sidebar = () => {


  return (
    <aside className='sidebar'>
      <div className="logo">

        <h1>Meeting Basum</h1>
      </div>
      <div className="nav-links">
        {SIDEBAR_LINKS.map((link) => {
          const Icon = link.icon
          return (
            <NavLink to={link.path} className="nav-item" key={link.id}><Icon />
              <span>{link.label}</span></NavLink>
          )
        })}
      </div>

    </aside>
  )
}

export default Sidebar