import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router'
import Sidebar from "../components/common/Sidebar"
import "./Appshell.css"

const Appshell = () => {
  return (
    <div className='app-shell'>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <section className='content-section'>
          <Outlet />
        </section>
        <Footer />
      </div>


    </div>
  )
}

export default Appshell