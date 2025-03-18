import React from "react";

function ContactFirst() {
  return (
    <section className="contact-card-area pt-2 pb-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-card">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>Notre Adresse</h5>
                    <p>
                        <a href="https://goo.gl/maps/zZEtThmwqkPz2GTE7" target="_blank">
                            Douala, Bonamoussadi, En face du Mermo 
                        </a>
                    </p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-card">
                    <i className="fas fa-envelope"></i>
                    <h5>Notre Email</h5>
                    <p><a href="mailto:contact@vrn-innovation.com">contact@vrn-innovation.com</a></p>
                    <p><a href="mailto:vinyssusrodolphe@gmail.com">vinyssusrodolphe@gmail.com</a></p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-card">
                    <i className="fas fa-phone-alt"></i>
                    <h5>Nos Contacts</h5>
                    <p><a href="tel:+44587154756">+237 658 060432</a></p>
                    <p><a href="tel:+44587154757">+237 683 355568</a></p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default ContactFirst;
