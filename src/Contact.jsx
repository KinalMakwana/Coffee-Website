import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsGeoAltFill,
  BsTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";

const Contact = () => {

  // STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);


  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
    }
    if (Object.keys(newErrors).length === 0) {

      setSuccess(true); // show success message

      // CLEAR FORM (NO REFRESH)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({}); // clear errors
    }

  };

  return (
    <>
      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="container">
            <div className="contact-hero-content">
              <h1>Contact</h1>
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/contact" className="text">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="contact-main">
        <div className="container">
          <div className="contact-inner">

            {/* TITLE */}
            <div className="contact-title">
            <span className="title-line"></span> 
              <h4>Contact us</h4>
              <h1>Feel Free To Contact</h1>
            </div>

            {/* INFO */}
            <div className="contact-info-box">
              <div className="info-item">
                <BsGeoAltFill className="icon" />
                <h4>Address</h4>
                <p>123 Street, New York, USA</p>
              </div>

              <div className="info-item">
                <BsTelephoneFill className="icon" />
                <h4>Phone</h4>
                <p>+012 345 6789</p>
              </div>

              <div className="info-item">
                <BsEnvelopeFill className="icon" />
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>

            {/* MAP + FORM */}
            <div className="contact-bottom">

              {/* MAP */}
              <div className="contact-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=New%20York&output=embed"
                  loading="lazy"
                ></iframe>
              </div>

              {/* FORM */}
              <div className="contact-form">

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="error">{errors.subject}</p>}

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}

                  <button type="submit">Send Message</button>
                  {success && (
                    <p className="success">
                      Your message has been sent successfully!
                    </p>
                  )}

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
