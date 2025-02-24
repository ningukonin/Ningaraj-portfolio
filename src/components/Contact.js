import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-item">
          <h3>Name</h3>
          <p>Ningaraj</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:ningukonin@gmail.com">ningukonin@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>9886555392</p>
        </div>
        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/ningaraj-konin-826534236/" target="_blank" rel="noopener noreferrer">Ningaraj Konin</a></p>
        </div>
        <div className="contact-item">
          <h3>GitHub</h3>
          <p><a href="https://github.com/ningukonin" target="_blank" rel="noopener noreferrer">ningukonin</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
