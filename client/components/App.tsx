import React from 'react'
import Map from './Map'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Loading Rate My Pie 🥧</h1>
      <Outlet />
    </div>
  )
}

export default App
