import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import RecentGreivance from '../Components/RecentGreivance'
import { addResponseContext } from '../Contexts/ContextShare'




const Dashboard = () => {
 
  const[username,setUsername]=useState("")

    useEffect(()=>{
        if(sessionStorage.getItem("user")){
            setUsername(JSON.parse(sessionStorage.getItem("user")).username)

        }else{
            setUsername("")
        }
    },[])
  return (
    <div style={{width:"100%"}}>
    <div className='d-flex' style={{width:"100%"}}>
      <div >
        <SideBar/>
      </div>
      <div className='ms-3 bg-dark rounded text-light' style={{width:"100%"}}>
        <div className="d-flex align-items-center">
          <span><h3 className='fw-bold mt-3 ms-5'>Welcome {username},</h3></span>
        </div>
        <RecentGreivance/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard