import React from 'react'
import "./serviceList.css"
import { NavLink } from 'react-router-dom'

const ServiceList = () => {
  return (
<div>
    <section className="service pt-70 pb-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/web.jpg" alt="Développement Web" /></a>
                            <i className="flaticon-web-development"></i>
                        </div>
                        <div className="service-card-text">
                            <NavLink to="detail-web"><h4>Développement d'Applications Web</h4></NavLink>
                            <p>Conception et développement d’applications web sur mesure, performantes et sécurisées, adaptées à vos besoins.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/mobile.jpg" alt="Développement Mobile" /></a>
                            <i className="flaticon-mobile-app"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Développement d'Applications Mobiles</h4></a>
                            <p>Création d’applications mobiles natives et hybrides pour Android et iOS, offrant une expérience fluide et intuitive.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/hebergement.jpg" alt="Hébergement" /></a>
                            <i className="flaticon-cloud-server"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Hébergement et Gestion de Code</h4></a>
                            <p>Solutions d'hébergement performantes et sécurisées pour vos applications et sites web, avec gestion et maintenance du code.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/marketing.jpg" alt="Marketing Digital" /></a>
                            <i className="flaticon-digital-marketing"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Marketing Digital</h4></a>
                            <p>Développez votre visibilité en ligne avec des stratégies de marketing digital efficaces : SEO, réseaux sociaux, publicité en ligne.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/camera.jpg" alt="Sécurité" /></a>
                            <i className="flaticon-cctv-camera"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Installation de Caméras et Alarmes</h4></a>
                            <p>Solutions complètes pour la sécurité de votre domicile ou entreprise : installation de caméras de surveillance et systèmes d’alarme.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/domotique.jpg" alt="Domotique" /></a>
                            <i className="flaticon-smart-home-1"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Solutions de Maison Connectée</h4></a>
                            <p>Automatisez et contrôlez votre maison avec des solutions intelligentes : éclairage, sécurité, chauffage et plus encore.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/formation.jpg" alt="Formation" /></a>
                            <i className="flaticon-online-learning"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Formations Professionnelles</h4></a>
                            <p>Des formations pratiques en développement web, mobile, administration système et domotique, adaptées à tous les niveaux.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/flyers.jpg" alt="Design Graphique" /></a>
                            <i className="flaticon-graphic-design"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Conception de Logos et Flyers</h4></a>
                            <p>Création de logos uniques et de supports de communication visuelle (flyers, affiches, cartes de visite) pour valoriser votre image de marque.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="service-card">
                        <div className="service-card-img">
                            <a href="service-details.html"><img src="assets/images/services/consultan.jpg" alt="Consultation IT" /></a>
                            <i className="flaticon-consulting"></i>
                        </div>
                        <div className="service-card-text">
                            <a href="#"><h4>Consultation en IT</h4></a>
                            <p>Accompagnement et conseils stratégiques en technologies de l'information pour optimiser vos projets et infrastructures.</p>
                            <a className="read-more-btn" href="service-details.html"><p>En savoir plus</p></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
  )
}

export default ServiceList
