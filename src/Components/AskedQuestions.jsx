import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const AskedQuestions = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className='container mt-5 mb-5'>
      {/* Question 1 */}
      <div
        onClick={() => setOpen1(!open1)}
        aria-controls="collapse-text-1"
        aria-expanded={open1}
        className="d-flex justify-content-between btn btn-link"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className='fs-5 fw-bold'>• What is this website for?</p>
        {open1 ? (
          <i className="fa-solid fa-caret-up fs-5"></i>
        ) : (
          <i className="fa-solid fa-caret-down fs-5"></i>
        )}
      </div>
      <Collapse in={open1}>
        <div id="collapse-text-1" className='fs-5 px-4'>
        This website is a platform for citizens to log their grievances or concerns directly with the superhero, who reviews and resolves them to ensure safety and justice.
        </div>
      </Collapse>
      <hr />

      {/* Question 2 */}
      <div
        onClick={() => setOpen2(!open2)}
        aria-controls="collapse-text-2"
        aria-expanded={open2}
        className="d-flex justify-content-between btn btn-link"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className='fs-5 fw-bold'>•  Is my grievance confidential?</p>
        {open2 ? (
          <i className="fa-solid fa-caret-up fs-5"></i>
        ) : (
          <i className="fa-solid fa-caret-down fs-5"></i>
        )}
      </div>
      <Collapse in={open2}>
        <div id="collapse-text-2" className='fs-5 px-4'>
        Yes, all grievances are handled securely and are accessible only to the superhero through a protected dashboard.
        </div>
      </Collapse>
      <hr />

      {/* Question 3 */}
      <div
        onClick={() => setOpen3(!open3)}
        aria-controls="collapse-text-3"
        aria-expanded={open3}
        className="d-flex justify-content-between btn btn-link"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className='fs-5 fw-bold'>• Will I receive updates on my grievance?</p>
        {open3 ? (
          <i className="fa-solid fa-caret-up fs-5"></i>
        ) : (
          <i className="fa-solid fa-caret-down fs-5"></i>
        )}
      </div>
      <Collapse in={open3}>
        <div id="collapse-text-3" className='fs-5 px-4'>
        Yes, you can track the status of your grievance to know if it’s under review, resolved, or requires more information.
        </div>
      </Collapse>
      <hr />

      {/* Question 4 */}
      <div
        onClick={() => setOpen4(!open4)}
        aria-controls="collapse-text-4"
        aria-expanded={open4}
        className="d-flex justify-content-between btn btn-link"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className='fs-5 fw-bold'>•  What kind of issues can I report?</p>
        {open4 ? (
          <i className="fa-solid fa-caret-up fs-5"></i>
        ) : (
          <i className="fa-solid fa-caret-down fs-5"></i>
        )}
      </div>
      <Collapse in={open4}>
        <div id="collapse-text-4" className='fs-5 px-4'>
        You can report any concerns related to safety, community issues, or anything that requires the superhero's attention and action.
        </div>
      </Collapse>
      <hr />
    </div>
  );
};

export default AskedQuestions;
