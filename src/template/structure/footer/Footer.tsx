import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="mt-4">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{ background: "linear-gradient(to left, #00796b, #4db6ac)" }}
          >
            <div className="me-5">
              <span>Nos réseaux sociaux:</span>
            </div>
            <div>
              <a href="" class="text-white me-4">
                <i class="flaticon-facebook"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="flaticon-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="flaticon-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="flaticon-linkedin"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-3">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img className="logo" src="assets/images/logo.png" alt="logo" />
                  <p>
                    La satisfaction de nos clients est notre priorité absolue.
                    Nous nous engageons à offrir des solutions adaptées et de
                    qualité pour répondre à vos besoins 😉.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Services</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>Application Web</p>
                  <p>Application Mobile</p>
                  <p>Hebergement</p>
                  <p>Sécurité</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Pages</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                    <a href="#!" className="lien">
                      <p> A propos</p>
                    </a>
                    <a href="#!" className="lien">
                      <p>Portfolio</p>
                    </a>
                    <a href="#!" className="lien">
                      <p>Team</p>
                    </a>
                    <a href="#!" className="lien">
                      <p>Projets</p>
                    </a>
                    <a href="#!" className="lien">
                      <p>Contact</p>
                    </a>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="flaticon-home mr-3"></i> Bonamoussadi, Douala, CMR
                  </p>
                  <p>
                    <i class="flaticon-email mr-3"></i> contact@vrn-inovation.com
                  </p>
                  <p>
                    <i class="flaticon-phone-call mr-3"></i> + 237 658 060 432
                  </p>
                  <p>
                    <i class="flaticon-phone-call mr-3"></i> + 237 683 355 568
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
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
