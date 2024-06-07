import React from "react";

function Box() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body ">
                <img
                  src={`https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/25jYqtlv4yZXspIIIrPYcy/f90d2f35fcb4f0080a6abbddb5e927ad/AC-Shadows-boxshot.jpg`}
                  alt="Assassin's Creed Shadows"
                  className="img-fluid"
                />
                <h3 className="card-title mb-3 mt-3">
                  Assassin's Creed Shadows <br />
                  (2014)
                </h3>
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
                <img
                  src={`https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3a1Eo3mixiKRP69sewbisM/19c27f9470353122ee7c4592a56c9e05/avatar-frontiers-of-pandora-boxshot.jpg`}
                  alt="Avatar: Frontiers of Pandora"
                  className="img-fluid"
                />
                <h3 className="card-title mb-3 mt-3">
                  Avatar: Frontiers of Pandora <br />
                  (2014)
                </h3>
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
            <div className="card bg-primary text-white">
              <div className="card-body">
                <img
                  src={`https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Ldpa61RRMW3ER8Ilvx5s8/b82409866edacc584a5c2486b9f307ae/POPTLC_Packshot_v2.jpg`}
                  alt="Prince of Persia: The Lost Crown"
                  className="img-fluid"
                />
                <h3 className="card-title mb-3 mt-3">
                  Prince of Persia <br />
                  (2014)
                </h3>
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
        </div>
      </div>
    </section>
  );
}

export default Box;
