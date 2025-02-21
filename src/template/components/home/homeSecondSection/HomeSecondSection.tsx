import React from "react";
import "./homeSecondSection.css"

const HomeSecondSection = () => {
  return (
    <div>
      <section className="explore-event explore-event-1 mt-3 d-none d-md-block">
        <div className="container">
          <div className="default-section-title default-section-title-middle">
            <h3>Découvrez un Futur Connecté</h3>
            <p>
              Nous transformons le quotidien grâce à des solutions
              technologiques innovantes. Dirigée par un ingénieur engagé à
              développer son pays, notre équipe rassemble des talents de
              plusieurs continents pour façonner l'avenir.
            </p>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="explore-events-text-area">
                  <div className="default-section-title">
                    <h3>
                      Un Leadership Visionnaire au Service de la Transformation
                    </h3>
                    <p>
                      Après avoir acquis une expertise internationale, notre CEO
                      est revenu pour investir ses compétences dans le
                      développement de son pays. Nous croyons que le changement
                      se construit en collaborant avec des ingénieurs et des
                      innovateurs issus de divers horizons, pour créer des
                      solutions adaptées et durables.
                    </p>
                  </div>
                  <div className="explore-events-text-list">
                    <i className="flaticon-government"></i>
                    <h4>Construire Ensemble un Avenir Meilleur :</h4>
                    <p>
                      En collaborant avec des experts du monde entier, nous
                      introduisons des technologies de pointe pour répondre aux
                      besoins locaux. Notre engagement repose sur l'innovation,
                      la qualité et la vision d’un avenir plus connecté.
                    </p>
                    <ul>
                      <li>
                        Un CEO animé par le désir de contribuer au développement
                        local.
                      </li>
                      <li>
                        Une collaboration internationale pour un impact global.
                      </li>
                      <li>Des solutions adaptées aux défis modernes.</li>
                      <li>
                        Une approche centrée sur l’humain et l’innovation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="explore-events-img">
                  <img
                    src="assets/images/home/2.jpg"
                    alt="Un ingénieur visionnaire pour un avenir connecté"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog bg-f9fbfe d-block d-md-none mt-3">
    <div className="container">
        <div className="default-section-title default-section-title-middle">
            <h3>Actualités et Innovations</h3>
            <p>Découvrez les dernières avancées en domotique, développement web et solutions de sécurité pour un monde plus connecté et sécurisé.</p>
        </div>
        <div className="section-content">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="blog-card">
                        <div className="blog-card-img">
                            <a href="blog-details.html"><img src="assets/images/home/7.jpg" alt="image"></img></a>
                        </div>
                        <div className="blog-card-text-area">
                            <h4>Des maisons intelligentes et autonomes</h4>
                            <p>La domotique transforme nos espaces en environnements intelligents, sûrs et écoénergétiques grâce à des technologies avancées.</p>
                            <a className="read-more-btn" href="blog-details.html">Lire Plus</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="blog-card">
                        <div className="blog-card-img">
                            <a href="blog-details.html"><img src="assets/images/home/6.jpg" alt="image"></img></a>
                        </div>
                        <div className="blog-card-text-area">
                            <h4>Solutions web sur mesure pour votre entreprise</h4>
                            <p>Des plateformes performantes et évolutives pour booster votre présence en ligne et automatiser vos processus métiers.</p>
                            <a className="read-more-btn" href="blog-details.html">Lire Plus</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="blog-card">
                        <div className="blog-card-img">
                            <a href="blog-details.html"><img src="assets/images/home/5.jpg" alt="image"></img></a>
                        </div>
                        <div className="blog-card-text-area">
                            <h4>Surveillance et cybersécurité : un enjeu majeur</h4>
                            <p>De la vidéosurveillance à la cybersécurité, protégez vos biens et données grâce aux dernières innovations technologiques.</p>
                            <a className="read-more-btn" href="blog-details.html">Lire Plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
};

export default HomeSecondSection;
