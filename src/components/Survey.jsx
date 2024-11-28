import { useState } from 'react';
import './Survey.css';
import { useNavigate } from 'react-router-dom';

function Survey() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    howDidYouHear: '',
    announcements: [],
    contactBy: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    howDidYouHear: '',
    announcements: [],
    contactBy: ''
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        announcements: checked
          ? [...prev.announcements, value]
          : prev.announcements.filter((item) => item !== value)
      }));
    } else if (type === 'radio') {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };
  const valueCheckError = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required.';
    }
    if (!formData.howDidYouHear.trim()) {
      newErrors.howDidYouHear = 'Please select how you heard about us.';
    }
    if (!formData.contactBy.trim()) {
      newErrors.contactBy = 'Please select a preferred contact method.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const gotoForm = () => {
    if(valueCheckError()){
      navigate('/Formsubmit', { state: { formData } });
    }
  };

  return (
    <div className="container">
      <div className="body">
        <div className="header">
          <img src="/Murach_image-300x300.jpg" alt="" />
          <h1>Survey</h1>
          <p>If you have a moment, we'd appreciate it if you would fill out this survey</p>
        </div>
        <div className="footer">
          <h2>Your Information</h2>
          <div className="input">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="input">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="input">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input">
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className="radiobox">
            <h2>How did you hear about us?</h2>
            <div className="checkradio">
              <input
                type="radio"
                name="howDidYouHear"
                value="Search Engine"
                onChange={handleChange}
              />Search Engine
              <input
                type="radio"
                name="howDidYouHear"
                value="Word of Mouth"
                onChange={handleChange}
              />Word of Mouth
              <input
                type="radio"
                name="howDidYouHear"
                value="Social Media"
                onChange={handleChange}
              />Social Media
              <input
                type="radio"
                name="howDidYouHear"
                value="Other"
                onChange={handleChange}
              />Other
            </div>
            {errors.howDidYouHear && <p className="error">{errors.howDidYouHear}</p>}
          </div>
          <div className="offer">
            <h2>Would you like to receive announcements about new CDs and special offers?</h2>
            <div className="checkbox">
              <input
                style={{
                  marginLeft:"-90px",
                  marginRight:"-80px"
                }}
                type="checkbox"
                value="Receive Offers"
                onChange={handleChange}
              />Yes, I'd like that <br />
              <input
                style={{
                  marginLeft:"-90px",
                  marginRight:"-80px"
                }}
                type="checkbox"
                value="Receive Email Announcements"
                onChange={handleChange}
              />Yes, please send me email announcements
            </div>
          </div>
          <div className="listbox">
            Please contact me by
            <select
              name="contactBy"
              value={formData.contactBy}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Email only">Email only</option>
              <option value="Postal mail only">Postal mail only</option>
              <option value="Email or postal mail">Email or postal mail</option>
            </select>
            {errors.contactBy && <p className="error">{errors.contactBy}</p>}
          </div>
          <button className="submit" onClick={gotoForm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Survey;
