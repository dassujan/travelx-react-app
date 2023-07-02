import React from "react";

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="d-flex justify-content-center align-items-center flex-column text-area">
        <h1 className="display-3">TravelX</h1>
        <h1 className="display-3">The new Adventure</h1>
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit modi quasi.
        </p>
        <button className="btn btn-1">Book Now</button>
      </div>
    </div>
  );
};

export default Header;