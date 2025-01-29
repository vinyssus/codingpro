import React from "react";
import "./homeSlider.css";

const HomeSlider = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/assets/images/slider-home/4.jpg"
            className="d-block w-100"
            alt="slider1"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Sécurisez votre croissance</h5>
            <p style={{color:"white"}}>
              L’optimisation continue pour garantir un environnement stable et
              sûr.
            </p>
            <button type="button" className="btn btn-primary btn-lg custom-btn">
              Contactez-nous
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="/assets/images/slider-home/5.jpg"
            className="d-block w-100"
            alt="slider2"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Construisez un avenir connecté</h5>
            <p style={{color:"white"}}>
              Nous créons des bases solides pour une performance durable et
              invisible.
            </p>
            <button type="button" className="btn btn-primary btn-lg custom-btn">
              Explorez nos approches
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/slider-home/12.jpg"
            className="d-block w-100"
            alt="slider3"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Transformez vos défis numériques</h5>
            <p style={{color:"white"}}>
              Des solutions agiles qui s'adaptent à vos besoins pour un avenir
              digital optimisé.
            </p>
            <button type="button" className="btn btn-primary btn-lg custom-btn">
              Découvrez nos services
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider;
