import React from "react";
import titleImg from "../images/pngwing.com.svg";

function Showcase() {
  return (
    <>
      <section className="bg-light text-dark p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <span className="p-2 bg-dark text-white border border-black rounded-3">New Release <i className="bi bi-chevron-right"></i></span>
              <h1 className="mt-4">
                Assassin's Creed <span className="text-danger">Shadows </span>
                (2024)
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                labore est nobis. Aspernatur cumque atque saepe, quae non
                mollitia voluptate!
              </p>
              <button
                type="button"
                className="btn btn-danger btn-lg mt-3"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Click to pre-order
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={titleImg}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="enroll"
        tabIndex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Fill out the form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="lead">
                Enter your details to pre-order the game.
              </p>

              <form action="#">
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="col-form-label">
                    Game:
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
