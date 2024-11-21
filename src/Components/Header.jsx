import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {



  return (
    <div className='d-flex justify-content-between container-fluid align-items-center' style={{zIndex:"1"}}>
      
        <Link to={'/'} style={{textDecoration:"none"}}>
          <div style={{"fontFamily":"Squada One, sans-serif",color:"black"}} className='fs-1'>
            Trouble<span style={{"color":"#6e1212"}}>Shooter</span>
          </div>
        </Link>
          <div>
          <Link to={'Login'} className='btn btn-dark fw-bold' style={{"fontFamily":"Yellowtail, cursive"}}>
              Sign In
          </Link>
        </div>
    </div>
  )
}

export default Header