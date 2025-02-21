import React from "react";
import "./homeFirstSection.css";

const HomeFirstSection = () => {
  return (
    <section className="precess mb-4 mt-3">
      <div className="container">
        <div className="default-section-title default-section-title-middle">
          <h3>Notre Processus</h3>
          <p>
            Nous suivons un processus simple et efficace pour garantir des
            solutions adaptées et fiables à vos besoins spécifiques.
          </p>
        </div>
        <div className="section-content">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="process-card">
                <i className="flaticon-google-docs"></i>
                <h4 style={{ display: "block", color: "#00aa55" }}>
                  Évaluation
                </h4>
                <p>
                  Nous identifions vos besoins et proposons des solutions qui
                  répondent parfaitement à vos attentes.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="process-card">
                <i className="flaticon-process"></i>
                <h4 style={{ display: "block", color: "#00aa55" }}>
                  Développement
                </h4>
                <p>
                  Nos experts développent des solutions avec des technologies
                  modernes et une attention particulière aux détails.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="process-card">
                <i className="flaticon-checked-1"></i>
                <h4 style={{ display: "block", color: "#00aa55" }}>
                  Livraison
                </h4>
                <p>
                  Nous livrons des solutions prêtes à l’emploi et assurons un
                  suivi pour garantir une satisfaction durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
