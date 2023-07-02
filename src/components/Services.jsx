import React from "react";

const Services = () => {
  return (
    <section id="about" className="services">
      <div className="container text-center">
        <h1 className="mt-5 mb-5">Our Best Services</h1>
        <div className="row">
          <div className="col-lg-4">
            <i className="fas fa-umbrella-beach fa-5x"></i>
            <h1>Amazing Travel</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eveniet, saepe odio
              quidem vitae in expedita?</p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-route fa-5x"></i>
            <h1>Best Location</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eveniet, saepe odio
              quidem vitae in expedita?</p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-headset fa-5x"></i>
            <h1>24X7 Support</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eveniet, saepe odio
              quidem vitae in expedita?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;