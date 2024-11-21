import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Modal, Spinner } from "react-bootstrap";
import { deleteGrievanceApi, getAllGrievanceApi, viewReplyApi } from "../Services/AllApi";
import { addResponseContext } from "../Contexts/ContextShare";

const ComplaintsCard = () => {
  const [allGrievance, setAllGrievance] = useState([]);
  const [selectedReply, setSelectedReply] = useState(null); 
  const { addResponse, setAddResponse } = useContext(addResponseContext);

  useEffect(() => {
    getAllGrievance();
  }, [addResponse]);


  const getAllGrievance = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You are not logged in. Please log in to view grievances.");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await getAllGrievanceApi(reqHeader);
      if (result.status === 200) {
        setAllGrievance(result.data);
      } else {
        alert(result.response?.data || "Failed to fetch grievances.");
      }
    } catch (err) {
      console.error("Error fetching grievances:", err);
      alert("An error occurred while fetching grievances. Please try again.");
    }
  };


  const handleDelete = async (gid) => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You are not logged in. Please log in to delete grievances.");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await deleteGrievanceApi(gid, reqHeader);
      if (result.status === 200) {
        alert("Grievance deleted successfully.");
        getAllGrievance();
      } else {
        alert(result.response?.data || "Failed to delete grievance.");
      }
    } catch (err) {
      console.error("Error deleting grievance:", err);
      alert("An error occurred while deleting the grievance. Please try again.");
    }
  };

 
  const viewReply = async (gid) => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You are not logged in. Please log in to view the reply.");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await viewReplyApi(gid, reqHeader);
      if (result.status === 200) {
        setSelectedReply(result.data.reply); // Assuming the reply is in `result.data.reply`
      } else {
        alert(result.response?.data || "Failed to fetch reply.");
      }
    } catch (err) {
      console.error("Error fetching reply:", err);
      alert("An error occurred while fetching the reply. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100 mt-2 row">
        {allGrievance.length > 0 ? (
          allGrievance
            .slice()
            .reverse()
            .map((grievance) => (
              <div className="col-lg-3 mt-3" key={grievance._id}>
                <Card style={{ width: "100%" }} className="mt-2 flex-grow-1 h-100">
                  <Card.Body>
                    <Card.Title>
                      <h1>{grievance.title}</h1>
                    </Card.Title>
                    <Card.Text>
                      <h5>Description:</h5>
                      <p>{grievance.description}</p>
                      <hr />
                      <span className="fw-bold mb-3">Status:</span>
                      {grievance.status === "pending" ? (
                        <div className="d-flex align-items-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                          <span className="ms-2 fw-bold">Pending...</span>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="fa-solid fa-circle-check text-success"></i>
                          </span>
                          <span className="ms-2 fw-bold">Resolved</span>
                          <button
                            onClick={() => viewReply(grievance._id)}
                            className="btn btn-dark ms-2"
                          >
                            View Reply
                          </button>
                        </div>
                      )}
                      <div className="d-flex justify-content-end align-items-center mt-2">
                        <button
                          onClick={() => handleDelete(grievance._id)}
                          className="btn btn-danger text-light fw-bold ms-2"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
        ) : (
          <div className="fw-bold text-danger text-center">Grievance Not Found</div>
        )}
      </div>


      {selectedReply && (
        <Modal show={true} onHide={() => setSelectedReply(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Grievance Reply</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedReply}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedReply(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ComplaintsCard;
