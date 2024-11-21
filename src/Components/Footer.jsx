import React from 'react'
import hero from '../images/hero.webp'

const Footer = () => {
  return (
    <div className='container-fluid bg-body-tertiary pt-5' style={{boxShadow:"7px 7px 7px 7px"}}>
      <div className='row'>
        <div className="col-lg-3 mt-3 d-flex justify-content-center">
        <div className='w-100'>
          <div style={{"fontFamily":"Squada One, sans-serif"}} className='fs-3'>
            Trouble<span style={{"color":"#6e1212"}}>Shooter</span>
          </div>
            <img className='w-75' style={{marginTop:"-50px",marginLeft:"-30px"}} src={hero} alt="" />
          </div>
        </div>
        <div className="col-lg-3 pe-5 mt-3">
          <h3>About Us</h3>
          <p style={{textAlign:"justify"}}>
          Welcome to <span style={{"fontFamily":"Squada One, sans-serif"}} className=' fs-5'>
          Trouble<span style={{"color":"#6e1212"}}>Shooter</span>
        </span> , where citizens can directly log grievances for their superhero to review and address. We ensure every concern is heard and handled through a secure dashboard, fostering transparency and trust. Together, let’s create a safer, stronger community!</p>
        </div>
        <div className="col-lg-3 text-center mt-3">
          <h3>Contact Us</h3>
          <p><span className='fw-bold'>E-mail:</span>troubleshooter@gmail.com <br />
          <span className='fw-bold'>Phone:</span>9876543210</p>
          <div className="d-flex justify-content-evenly fs-5">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-regular fa-envelope"></i>
          </div>
        </div>
        <div className="col-lg-3 mt-3">
          <h3>Ask?</h3>
          <div className="d-flex mt-3">
          <input className='form-control p-3 me-3' type="text" placeholder='Ask questions about Troubleshooter'/>
          <button className='btn btn-dark py-3 px-4'><i class="fa-solid fa-arrow-right text-light"></i></button>
          </div>
        </div>
      </div>
      <div className='text-center fw-bold pb-5'>
      © Copy Right 2024 : Trouble Shooter
      </div>
    </div>
  )
}

export default Footer