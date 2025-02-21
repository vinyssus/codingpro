import React from "react";

const HomeThirdSection = () => {
  return (
    <section className="fun-facts fun-facts-1 pt-70 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="fun-facts-card">
              <i className="flaticon-smart-city"></i>
              <h2>
                <span className="odometer" data-count="1500">
                  06
                </span>
              </h2>
              <p>Clients Satisfaits</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="fun-facts-card">
              <i className="flaticon-location-1"></i>
              <h2>
                <span className="odometer" data-count="25">
                  06
                </span>
                <span className="sign-icon">+</span>
              </h2>
              <p>Projets Réalisés</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="fun-facts-card">
              <i className="flaticon-park-1"></i>
              <h2>
                <span className="odometer" data-count="10">
                  02
                </span>
                <span className="sign-icon">+</span>
              </h2>
              <p>Années d’Expérience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="fun-facts-card last-card">
              <i className="flaticon-award"></i>
              <h2>
                <span className="odometer" data-count="50">
                  12
                </span>
                <span className="sign-icon">+</span>
              </h2>
              <p>Partenaires Internationaux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThirdSection;
