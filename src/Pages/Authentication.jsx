import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import hero from '../images/hero.webp'
import google from '../images/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../Services/AllApi'



const Authentication = ({isRegister}) => {

  const navigate = useNavigate()
  const[userData,setUserData]=useState({
    username:"",email:"",password:""
  })
  console.log(userData);

  const handleRegister = async(e)=>{
    e.preventDefault()
    if(userData.username && userData.email && userData.password){
      try{
        const result = await registerApi(userData)
        console.log(result);
        if(result.status==200){
          alert(`welcome ${result?.data?.username}...`)
          setUserData({username:"",email:"",password:""})
          navigate('/login')
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setUserData({username:"",email:"",password:""})
            navigate('/login')
          }
        }

      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Please fill the form completely")
    }
  }

  const handleLogin = async(e)=>{
    e.preventDefault()
    if(userData.email && userData.password){
      try{
        const result = await loginApi(userData)
        console.log(result);
        
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setUserData({username:"",email:"",password:""})
          alert("Login Successfull!!!")
          navigate('/Dashboard')
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
  
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  

  return (
    <div  style={{minHeight:"100vh",width:"100%"}} className='bg-dark row'>
      <div className="col-lg-2"></div>
      <div className='bg-light col-lg-8 text-light p-5 d-flex justify-content-center text-dark mt-5 mb-5' style={{borderRadius:"500px 300px 00px 400px"}} >
      <div className='w-75'>
        <div className='d-flex justify-content-center'>
          <div style={{"fontFamily":"Squada One, sans-serif"}}>
          <div className='fs-1 text-center'>
          Trouble<span style={{"color":"#6e1212"}}>Shooter</span>
        </div>
           { isRegister?
            <h1 className='fw-bold text-center'><u>Register</u></h1>
            :
            <h1 className='fw-bold text-center'><u>Login</u></h1>
          }
          <img src={hero} alt="" />
          </div>
        </div>
          <FloatingLabel
          controlId="floatingInputemail"
          label="Email address"
          className="mb-3 mt-5 text-dark"
        >
          <Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" />
        </FloatingLabel>
       {isRegister&&
        <FloatingLabel
          controlId="floatingInputname"
          label="Username"
          className="mb-3"
        >
          <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="Username" />
        </FloatingLabel>}
        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-2'>
          <Form.Control value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password" />
        </FloatingLabel>
       <div className='pb-5'>
          {isRegister?
            <button onClick={handleRegister} className='btn btn-dark w-100  p-3 fw-bold shadow'>Regiter</button>
          :
          <button onClick={handleLogin} className='btn btn-dark w-100  p-3 fw-bold shadow'>Login</button>}
          <hr />
          <div className="d-flex justify-content-center fw-bold">
          {
            isRegister?
            <div className='d-flex w-100 justify-content-center'><Link to={'/Login'} style={{textDecoration:"none", color:"black"}} >Already have an account?</Link></div>
            :
            <div><Link to={'/Register'} style={{textDecoration:"none", color:"black"}}>You don't have an account?</Link></div>
          }
          </div>
       </div>
      </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  )
}

export default Authentication