import React from 'react'

const AboutContent = () => {
  return (
    <div>
      <section className="about pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-img">
                            <img className="a-img-1 " src="assets/images/about/2.jpg" alt="VRN Innovation"></img>
                            <img className="a-img-2 d-none d-md-block" src="assets/images/about/1.jpg" alt="Équipe VRN"></img>
                            <img className="a-img-3 d-none d-md-block" src="assets/images/about/cercle.jpg" alt="Technologies innovantes"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="why-we-text-area about-text-area-2">
                            <div className="default-section-title">
                                <span>QUI SOMMES-NOUS ?</span>
                                <h3>VRN INNOVATION : Pionnier des Solutions Informatiques</h3>
                                <p>VRN INNOVATION est une entreprise spécialisée dans le développement de solutions numériques sur mesure. Notre mission est d'accompagner les entreprises dans leur transformation digitale grâce à des technologies innovantes et performantes.</p>
                            </div>
                            <div className="why-we-text-list">
                                <i className="flaticon-global"></i>
                                <h4>Notre Engagement :</h4>
                                <p>Fondée avec une expertise internationale, acquise notamment en Tunisie, VRN INNOVATION s'attache à développer des solutions adaptées aux besoins locaux et globaux. Nous collaborons avec des ingénieurs du monde entier pour offrir des prestations de haut niveau.</p>
                                <ul>
                                    <li>Développement web et mobile innovant</li>
                                    <li>Hébergement et gestion sécurisée des données</li>
                                    <li>Solutions de sécurité avancées</li>
                                    <li>Automatisation et intégration des nouvelles technologies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fun-facts pt-70 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="fun-facts-card fun-facts-card-2">
                        <i className="bi bi-cast"></i>
                            <h2><span className="odometer" data-count="150">22</span>+</h2>
                            <p>Projets Réalisés</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="fun-facts-card fun-facts-card-2">
                        <i className="bi bi-people"></i>
                            <h2>
                                <span className="odometer" data-count="50">16</span>+
                            </h2>
                            <p>Collaborateurs Internationaux</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="fun-facts-card fun-facts-card-2">
                        <i className="flaticon-park-1"></i>
                            <h2>
                                <span className="odometer" data-count="10">04</span>+
                            </h2>
                            <p>Années d’Expertise</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="fun-facts-card last-card fun-facts-card-2">
                        <i className="bi bi-mortarboard"></i>
                            <h2>
                                <span className="odometer" data-count="25">12</span>+
                            </h2>
                            <p>Distinctions et Récompenses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutContent
