import React from "react";
import titleImg from "../images/pngwing.com.svg";

function Showcase() {
  return (
    <section className="bg-light text-dark p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Assassin's Creed <span className="text-danger">Shadows </span>
              (2024)
            </h1>
            <p className="lead my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              labore est nobis. Aspernatur cumque atque saepe, quae non mollitia
              voluptate!
            </p>
            <button className="btn btn-danger btn-lg">
              Start The Enrollment
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
  );
}

export default Showcase;
