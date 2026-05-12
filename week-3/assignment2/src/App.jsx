import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './components/Homepage'
import PageNotFound from './components/common/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default App