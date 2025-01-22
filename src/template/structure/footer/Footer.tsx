import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="my-5">
        <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor: "#ECEFF1"}}
        >
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{  background: "linear-gradient(to left, #00796b, #4db6ac)"}}
          >
            <div className="me-5">
              <span>Connectez-vous avec nous sur les réseaux sociaux:</span>
            </div>
            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Coding pro</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                  La satisfaction de nos clients est notre priorité absolue. Nous nous engageons à offrir des solutions adaptées et de qualité pour répondre à vos besoins 😉.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Services</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      Application Web
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Application Mobile
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Hebergement
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Sécurité
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Pages</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      A propos
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Team
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Projets
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Contact
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> Bonamoussadi, Douala, CMR
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@coding-pro.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 237 658 060 432
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 216 99 501 379
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2025 Copyright:
            <a className="text-dark" href="https://vinyssus.com">
              vinyssus.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
