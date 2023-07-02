import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <form className="d-flex justify-content-center align-items-center flex-column">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control input" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control input" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Your message</label>
            <input type="text" className="form-control input" placeholder="Write your message" />
          </div>
          <button className="btn-2 mb-3">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;