import React from "react";

function Instructors() {
  return (
    <section id="instructors" className="bg-primary p-5">
      <div className="container">
        <h2 className="text-center text-white">Our Game Developers</h2>
        <p className="lead text-center mb-5 text-white">
          Our developers have 7+ years working as a game developer in the
          industry
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <img
                  className="rounded-circle mb-3"
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt=""
                />
                <h3 className="card-title mb-3">John Cena</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus enim autem animi ipsum pariatur fuga?
                </p>
                <a href="#" className="bi bi-facebook text-dark mx-1"></a>
                <a href="#" className="bi bi-twitter text-dark mx-1"></a>
                <a href="#" className="bi bi-instagram text-dark mx-1"></a>
                <a href="#" className="bi bi-discord text-dark mx-1"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <img
                  className="rounded-circle mb-3"
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt=""
                />
                <h3 className="card-title mb-3">Lara Croft</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus enim autem animi ipsum pariatur fuga?
                </p>
                <a href="#" className="bi bi-facebook text-dark mx-1"></a>
                <a href="#" className="bi bi-twitter text-dark mx-1"></a>
                <a href="#" className="bi bi-instagram text-dark mx-1"></a>
                <a href="#" className="bi bi-discord text-dark mx-1"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <img
                  className="rounded-circle mb-3"
                  src="https://randomuser.me/api/portraits/women/20.jpg"
                  alt=""
                />
                <h3 className="card-title mb-3">Veronica</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus enim autem animi ipsum pariatur fuga?
                </p>
                <a href="#" className="bi bi-facebook text-dark mx-1"></a>
                <a href="#" className="bi bi-twitter text-dark mx-1"></a>
                <a href="#" className="bi bi-instagram text-dark mx-1"></a>
                <a href="#" className="bi bi-discord text-dark mx-1"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <img
                  className="rounded-circle mb-3"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />
                <h3 className="card-title mb-3">Ezio</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus enim autem animi ipsum pariatur fuga?
                </p>
                <a href="#" className="bi bi-facebook text-dark mx-1"></a>
                <a href="#" className="bi bi-twitter text-dark mx-1"></a>
                <a href="#" className="bi bi-instagram text-dark mx-1"></a>
                <a href="#" className="bi bi-discord text-dark mx-1"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructors;
