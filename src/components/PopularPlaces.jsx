import React from "react";
import Poland from "../img/Poland.jpg"
import India from "../img/India.jpg";
import Switzerland from "../img/Switzerland.jpg";
import London from "../img/London.jpg";
import NewYork from "../img/NewYork.jpg";
import Paris from "../img/Paris.jpg";



const PopularPlaces = () => {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-5 text-center">Most popular places</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">Poland</h2>
              <img src={Poland} alt="" className="img-card" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">India</h2>
              <img src={India} alt="" className="img-card" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">Switzerland</h2>
              <img src={Switzerland} alt="" className="img-card" />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">London</h2>
              <img src={London} alt="" className="img-card" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">New York</h2>
              <img src={NewYork} alt="" className="img-card" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h2 className="c-1 overlay-c">Paris</h2>
              <img src={Paris} alt="" className="img-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;