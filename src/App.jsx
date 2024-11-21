import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Authentication from './Pages/Authentication'
import Header from './Components/Header'
import UserComplaints from './Pages/UserComplaints'





function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/UserComplaints' element={<UserComplaints/>}/>
        <Route path='/Login' element={<Authentication/>}/>
        <Route path='/Register' element={<Authentication isRegister={true}/>}/>

     </Routes>
     
    </>
  )
}

export default App
