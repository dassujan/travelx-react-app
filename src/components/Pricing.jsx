import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="image-hero">
      <div className="overlay d-flex flex-column align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-3 text-white">Book now and Get 50% off</h1>
              <p className="about-p lead text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis fuga vero. Aut cupiditate sapiente eveniet officiis ratione dignissimos tempora!</p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
              <button className="btn btn-info">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;