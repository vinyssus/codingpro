import React from "react";
import "./teamContend.css";

const Teamcontend = () => {
  return (
    <div className="container mt-2">
    <div className="row justify-content-start">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="service-card d-flex flex-column">
          <div className="service-card-img">
            <a href="service-details.html" className="team-image">
              <img
                src="assets/images/team/viny.jpg"
                alt="Développement Mobile"
              />
            </a>
          </div>
          <div className="service-card-text flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <a href="#">
                <h4 className="name">Naoussi Viny Rodolphe</h4>
              </a>
              <h6 className="occupation">CEO</h6>
            </div>
            <p>
              Diplomé a titre d'ingénieur en génie logiciel il est aussi fondateur de VRN Innovation et chargé de définir la vision, la stratégie et d’assurer la croissance et la rentabilité de l’organisation.
            </p>
          </div>
        </div>
      </div>
  
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="service-card d-flex flex-column">
          <div className="service-card-img">
            <a href="service-details.html" className="team-image">
              <img
                src="assets/images/team/edwin.jpg"
                alt="Développement Mobile"
              />
            </a>
          </div>
          <div className="service-card-text flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <a href="#">
                <h4 className="name">Slik Edwin</h4>
              </a>
              <h6 className="occupation">Chef des projets vidéosurveillance et contrôle d'accès.</h6>
            </div>
            <p>
             Diplomé d'une licence en Informatique industriel et doté de plus de 8 années d'expérience en Sécurité informatique, il est le barron de la sécurité électronique.
            </p>
          </div>
        </div>
      </div>
  
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="service-card d-flex flex-column">
          <div className="service-card-img">
            <a href="service-details.html" className="team-image">
              <img
                src="assets/images/team/mathurin.png"
                alt="Développement Mobile"
              />
            </a>
          </div>
          <div className="service-card-text flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <a href="#">
                <h4 className="name">Wansi Mathurin</h4>
              </a>
              <h6 className="occupation">Formateur et Expert en développement mobile</h6>
            </div>
            <p>
            Ingénieur en Développement Mobile – L’expert derrière toutes nos applications mobiles, garant de performance et d’innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="service-card d-flex flex-column">
          <div className="service-card-img">
            <a href="service-details.html" className="team-image">
              <img
                src="assets/images/team/alain.jpg"
                alt="Développement Mobile"
              />
            </a>
          </div>
          <div className="service-card-text flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <a href="#">
                <h4 className="name">Mfouapon Alain</h4>
              </a>
              <h6 className="occupation">Technicien en Sécurité électronique</h6>
            </div>
            <p>
              Il est l'un de nos technicien clé dans la sécurité electronique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Teamcontend;
