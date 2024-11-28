import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Survey'
import './Formsubmit.css'

function Formsubmit() {
  const location = useLocation();
  const navigate = useNavigate()
  const gotoSyrvey = () => {
    navigate('/Survey')
  } 
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data submitted!</p>;
  }

  return (
    <div className="container">
      <div className="form">
        <h1>SUBMIT SUCCESSFUL</h1>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Date of Birth:</strong> {formData.dob}</p>
        <p style={{marginRight:"30px"}}>To enter another email address, click on Back buttom in your browser or the Return button shown below</p>
        <button onClick={gotoSyrvey}>Return</button>
        <p>@khangbanhmi</p>
      </div>
    </div>
  );
}

export default Formsubmit;
