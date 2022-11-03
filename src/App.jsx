import { useState } from 'react'

import Profile from './components/Profile'
import Links from './components/Link'
import Footer from './components/Footer'

import './styles/main.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
