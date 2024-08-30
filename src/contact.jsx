import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
        from_name: formData.name,       // Maps to {{from_name}}
        reply_to: formData.email,       // Maps to {{reply_to}}
        to_name: "Vishwajeet Kumar",    // Hardcode or dynamically set your name if it's always the same
        message: formData.message       // Maps to {{message}}
    };

    emailjs
        .send(
            'service_gzojcvj', 
            'template_h6k9pvw', 
            emailData,
            'vVKc2k5f9X7QLeR2w'
        )
        .then(
            (result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            },
            (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
            }
        );

    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
};


  return (
    <section id="contact" className="contact">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
        </h2>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
