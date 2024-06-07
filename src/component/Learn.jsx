import React from "react";

function Learn() {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src={`https://shared.akamai.steamstatic.com/store_item_assets/mm/4948513060706568186/0/ba3dd443978ab75c61b2208a8792809f64d321e8.jpg`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md p-5">
              <h2>The Final Shape</h2>
              <p className="lead">
                Purchase now to unlock the new Pyramidic Vessel Exotic ship,
                Exotic Ghost shell, and Legendary emblems.
              </p>
              <p>
                The Standard edition of The Final Shape includes the new story
                campaign, three new Supers, a new destination, new weapons and
                armor to collect, and the first Episode in the year of The Final
                Shape.
              </p>
              <p>
                <span className="fw-bold">Prismatic Subclass</span>
                <br />
                For the first time ever, Prismatic empowers you to combine Arc,
                Solar, Void, Stasis, and Strand into a custom subclass of your
                design. Light and Darkness have no quarrel within you, Guardian.
              </p>
              <p>
                <span className="fw-bold">Campaign</span>
                <br />
                The Final Shape looms—a nightmarish calcification of reality
                into the Witness's twisted design. Embark on a perilous journey
                into the heart of the Traveler, rally the Vanguard, and end the
                War of Light and Darkness.
              </p>
              <a href="#" className="btn btn-dark mt-3">
                <i className="bi bi-chevron-right"></i> Free To Play
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Granblue Fantasy: Relink</h2>
              <p className="lead">
                Granblue Fantasy takes place in the Sky Realm, a world where
                myriad islands float in a great blue expanse.
              </p>
              <p>
                <span className="fw-bold">Story</span>
                <br />
                Assume your role as the captain of a skyfaring crew, joined by a
                scrappy little dragon named Vyrn and a young girl with
                mysterious powers named Lyria.
              </p>
              <p>
                <span className="fw-bold">Gameplay</span>
                <br />
                Engage in real-time combat with a party of four in this character action RPG—choose from a diverse roster of skyfarers, each with their own unique weapons, skills, and combat styles.
              </p>
              <a href="#" className="btn btn-dark mt-3 border-white">
                <i className="bi bi-chevron-right"></i> Free To Play
              </a>
            </div>
            <div className="col-md">
              <img
                src={`https://cdn.akamai.steamstatic.com/steam/apps/881020/header.jpg`}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;
