import React, { useEffect } from "react";
import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import about4 from "../img/about4.jpg";
import "../App.css";


/* global bootstrap */

const About = () => {
  useEffect(() => {
    // Initialize the carousel
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselExampleSlidesOnly")
    );

    return () => {
      // Dispose the carousel when component unmounts
      carousel.dispose();
    };
  }, []);

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={about1}
                    className="d-block w-100 caro-img"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={about2}
                    className="d-block w-100 caro-img"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={about3}
                    className="d-block w-100 caro-img"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={about4}
                    className="d-block w-100 caro-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1>About TravelX</h1>
            <p className="lead mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              voluptatum explicabo quod praesentium molestiae itaque aspernatur
              fuga maxime aut voluptatem iusto suscipit ad ducimus dolore sunt,
              temporibus dolor sapiente tempora.
            </p>
            <button className="btn btn-1">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;