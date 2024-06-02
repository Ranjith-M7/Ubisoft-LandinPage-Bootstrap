import React from "react";
import learnImg from "../images/backend_1.jpg";

function Learn() {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={learnImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat quae est veniam ratione tenetur ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                quidem recusandae temporibus ratione repellat officiis non
                adipisci reiciendis quam minima.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat quae est veniam ratione tenetur ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                quidem recusandae temporibus ratione repellat officiis non
                adipisci reiciendis quam minima.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src={learnImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;
