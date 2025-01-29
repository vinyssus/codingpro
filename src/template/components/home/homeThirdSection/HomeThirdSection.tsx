import React from "react";

const HomeThirdSection = () => {
  return (
    <section class="fun-facts fun-facts-1 pt-70 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
            <div class="fun-facts-card">
              <i class="flaticon-smart-city"></i>
              <h2>
                <span class="odometer" data-count="1500">
                  06
                </span>
              </h2>
              <p>Clients Satisfaits</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
            <div class="fun-facts-card">
              <i class="flaticon-location-1"></i>
              <h2>
                <span class="odometer" data-count="25">
                  06
                </span>
                <span class="sign-icon">+</span>
              </h2>
              <p>Projets Réalisés</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
            <div class="fun-facts-card">
              <i class="flaticon-park-1"></i>
              <h2>
                <span class="odometer" data-count="10">
                  02
                </span>
                <span class="sign-icon">+</span>
              </h2>
              <p>Années d’Expérience</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
            <div class="fun-facts-card last-card">
              <i class="flaticon-award"></i>
              <h2>
                <span class="odometer" data-count="50">
                  12
                </span>
                <span class="sign-icon">+</span>
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
