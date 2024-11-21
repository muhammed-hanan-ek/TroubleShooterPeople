import React from 'react'
import hero from '../images/heroStatic.png'
import { Link, useNavigate } from 'react-router-dom'
import AskedQuestions from '../Components/AskedQuestions'
import Footer from '../Components/Footer'
import { Button } from 'react-bootstrap'


const Home = () => {

  const navigate = useNavigate()
  const Gotodash=()=>{
    if(sessionStorage.getItem("token")){
      navigate('/Dashboard')
    }else{
      alert("Please Login to Get started")
    }
  }

  return (
    <>
      <div style={{ minHeight: "100vh", background: "linear-gradient(to right,#f1d7f7,#ffffff)" }} className=' w-100 d-flex'id='main'>
        <div className='container mt-5'>
          <div className='row d-flex justify-content-end align-items-center'>
            <div className='col-lg-8'>
              <p className='p-5 fs-5' style={{ textAlign: "justify", "fontFamily": "Yellowtail, cursive" }}>
  
                "
                I am <span className='fw-bolder'>Troubleshooter</span>, here to bridge the gap between you and the voices of the people you protect. This platform ensures every grievance reaches you securely, allowing you to review, manage, and take action effortlessly. Together, let’s uphold justice and make the world a better place!"
                <div><Button onClick={Gotodash} className='btn btn-dark fw-bold mt-3 p-3' style={{fontFamily:"sans-serif"}}>Get Started</Button></div>
              </p>
            </div>
            <div className='col-lg-4' style={{ marginTop: "50px" }}><img className='w-100' style={{ marginTop: "50px" }} src={hero} alt="" /></div>
          </div>
          <div className='bg-dark text-light container p-3 w-100 rounded'>
            <div>
              <h1 className='text-center' style={{ "fontFamily": "Squada One, sans-serif", fontSize: "48px" }}>One Step <span>"TroubleShooter"</span> for your <span>Trouble</span></h1>
  
            </div>
  
          </div>
          <div className="d-flex justify-content-evenly mt-5 flex-wrap">
            <div className='text-center'>
              <i class="fa-solid fa-user-group mb-2" style={{ fontSize: "50px" }}></i>
              <h4 className='fw-bold'>Grievance Submission</h4>
              <p className='fs-5'>A user-friendly form for <br /> common people to log their <br /> grievances.</p>
            </div>
            <div className='text-center'>
              <i class="fa-regular fa-clock mb-2" style={{ fontSize: "50px" }}></i>
              <h4 className='fw-bold'>Status Tracking</h4>
              <p className='fs-5'>Citizens can track the <br /> status of their grievances <br /> (e.g.,Submitted,In Review,Resolved).</p>
            </div>
            <div className='text-center'>
              <i class="fa-solid fa-lock mb-2" style={{ fontSize: "50px" }}></i>
              <h4 className='fw-bold'>Data Security</h4>
              <p className='fs-5'>Ensures that grievance <br /> data is stored securely and <br /> accessed only by the superhero.</p>
            </div>
          </div>
          
          <AskedQuestions/>
        </div>
        
        
      </div>
      <div className="d-flex justify-content-end align-items-center pb-5 me-3" style={{background: "linear-gradient(to right,#f1d7f7,#ffffff)"}}>
            <a href='#main' className="btn btn-outline-dark border border-2 border-dark rounded-circle  px-3 py-3 fw-bold">
            <i class="fa-solid fa-chevron-up"></i>
            </a>
          </div>
      
      <Footer/>
    </>
  )
}

export default Home
