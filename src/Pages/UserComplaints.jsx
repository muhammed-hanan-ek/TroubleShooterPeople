import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner, Modal, Button } from "react-bootstrap";
import { getResolvedHistory, viewReplyApi } from "../Services/AllApi";
import { addResponseContext } from "../Contexts/ContextShare";

const UserComplaints = () => {
  const [selectedReply, setSelectedReply] = useState(null);
  const { addResponse } = useContext(addResponseContext);
  const [resolvedGrievances, setResolvedGrievances] = useState([]);

  useEffect(() => {
    fetchResolvedGrievances();
  }, [addResponse]);

 
  const fetchResolvedGrievances = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You are not logged in. Please log in to view your grievances.");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await getResolvedHistory(reqHeader);

      if (result.status === 200) {
        setResolvedGrievances(result.data);
      } else {
        alert(result.response?.data || "Failed to fetch resolved grievances.");
      }
    } catch (err) {
      console.error("Error fetching resolved grievances:", err);
      alert("An error occurred while fetching grievances. Please try again.");
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
        setSelectedReply(result.data.reply);
      } else {
        alert(result.response?.data || "Failed to fetch reply.");
      }
    } catch (err) {
      console.error("Error fetching reply:", err);
      alert("An error occurred while fetching the reply. Please try again.");
    }
  };

  return (
    <>
      <h3 className="ms-5 fw-bold mt-3">
        <span className="bg-dark py-2 px-5 rounded text-light">
          <i className="fa-solid fa-clock-rotate-left me-2 fs-4"></i>History
        </span>
      </h3>

      <div className="w-100 mt-5 container-fluid py-3 rounded row">
        {resolvedGrievances.length > 0 ? (
          resolvedGrievances
            .slice()
            .reverse()
            .map((grievance) => (
              <div className="col-lg-3 mt-3" key={grievance._id}>
                <Card style={{ width: "100%" }} className="mt-2 flex-grow-1 h-100 bg-dark text-light">
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
                            className="btn btn-light fw-bold ms-2"
                            onClick={() => viewReply(grievance._id)}
                          >
                            View Reply
                          </button>
                        </div>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
        ) : (
          <div className="fw-bold text-danger text-center">
            No resolved grievances found.
          </div>
        )}

        {selectedReply && (
          <Modal centered show={true} onHide={() => setSelectedReply(null)}>
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
    </>
  );
};

export default UserComplaints;
