import React from "react";

function Box() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body ">
                <div className="h1 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">In Person</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat vero fugit dignissimos minima eaque voluptas.
                </p>
                <a href="#" className="btn btn-light">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-success text-light">
              <div className="card-body">
                <div className="h1 mb-3">
                  <i className="bi bi-moon"></i>
                </div>
                <h3 className="card-title mb-3">Moon</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat vero fugit dignissimos minima eaque voluptas.
                </p>
                <a href="#" className="btn btn-light">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Laptop</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat vero fugit dignissimos minima eaque voluptas.
                </p>
                <a href="#" className="btn btn-secondary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Box;
