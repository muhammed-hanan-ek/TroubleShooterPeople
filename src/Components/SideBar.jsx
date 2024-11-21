import React, { useContext, useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './side.css'
import { addGrievanceApi } from '../Services/AllApi';
import { addResponseContext } from '../Contexts/ContextShare';



const SideBar = () => {
  const {addResponse,setAddResponse} =useContext(addResponseContext)
  const [GrievanceData, setGrievanceData] = useState({
    title: "", description: "",status:"pending"
  })
  const[username,setUsername]=useState("")
  const[mail,setMail]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUsername(JSON.parse(sessionStorage.getItem("user")).username)
      setMail(JSON.parse(sessionStorage.getItem("user")).email)
    }
  })
  console.log(username);
  console.log(mail);
  
  
  
  console.log(GrievanceData);

  const [open, setOpen] = useState(false);
  const [showadd, setShowadd] = useState(false);

  const handleCloseAdd = () => setShowadd(false);
  const handleShowAdd = () => setShowadd(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGrivancesave = async() => {
    const { title, description } = GrievanceData;
    if (title && description) {
      // api call
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        };        
        console.log(`this is ${token}`);
        try{
          const result =await addGrievanceApi(GrievanceData,reqHeader)
          console.log(result);
          if(result.status==200){
            handleCloseAdd()
            setAddResponse(result)
            setGrievanceData({
                title: "", description: ""
            }) 
          }
          else{
            alert(result.response.data)
          }
        }catch(err){
          console.log(err);
        }
        
      }
      
      
    } else {
      alert("Please Fill the form Completely");
    }
  };
  
  const navigate = useNavigate()
  const handleLogout =()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    navigate('/')
  }

  return (
    <div style={{ minHeight: '80vh' }}>
      <div
        style={{
          minHeight: '80vh',
          width: open ? '250px' : '70px',
          transition: 'width 0.3s',
          color: 'white',
          borderRadius: '0px 20px 20px 0px',
        }}
        className="d-flex bg-dark flex-column align-items-center py-3"
      >
        <div
          style={{ fontFamily: 'Squada One, sans-serif', color: 'white' }}
          className="fs-3 mt-2 text-center"
        >
          T<span>S</span>
          {open && <span className="ms-2" style={{ fontFamily: 'Squada One, sans-serif', color: 'white' }}>TroubleSooter</span>}
        </div>
        <div className="mt-5 w-100 text-center">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-solid fa-house fs-4 mb-5"></i>
            {open && <span className="ms-2">Home</span>}
          </Link>
        </div>
        <div className="w-100 text-center">
          <Link onClick={handleShowAdd} style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-solid fa-plus fs-4 mb-5"></i>
            {open && <span className="ms-2">Add Grievance</span>}
          </Link>
        </div>
        <div className="w-100 text-center">
          <Link to="/UserComplaints" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-solid fa-clock-rotate-left fs-4 mb-5"></i>
            {open && <span className="ms-2">History</span>}
          </Link>
        </div>
        <div className="w-100 text-center">
          <Link onClick={handleShow} style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-solid fa-user fs-4 mb-5"></i>
            {open && <span className="ms-2">Profile</span>}
          </Link>
        </div>
        <div className="w-100 text-center" style={{ marginTop: "31vh" }}>
          <button className='btn btn-dark' onClick={handleLogout} style={{ textDecoration: 'none', color: 'white'  }}>
            <i className="fa-solid fa-right-from-bracket fs-4 mb-5"></i>
            {open && <span className="ms-2">Logout</span>}
          </button>
        </div>
        <Button
          id='button'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          style={{

            top: '20px',
            left: open ? '250px' : '70px',
            transition: 'left 0.3s',
          }}
          className="btn btn-dark"
        >
          {open ? '<' : '>'}
        </Button>
      </div>
      <Modal centered show={showadd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Greivance!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="title"
            className="mb-3"
          >
            <Form.Control value={GrievanceData.title} onChange={e => setGrievanceData({ ...GrievanceData, title: e.target.value })} type="text" placeholder="title" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="description"
            className="mb-3"
          >
            <Form.Control value={GrievanceData.description} onChange={e => setGrievanceData({ ...GrievanceData, description: e.target.value })} type="text" placeholder="description" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="dark" onClick={handleGrivancesave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Username: </h5>
            <h4>{username}</h4>
            <h5 className='mt-5'>E-mail:</h5>
            <h4>{mail}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='fw-bold p-2' variant="dark" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>  Logout 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SideBar;
