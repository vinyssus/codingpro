import React from "react";

const ContactSecond = () => {
  return (
 <div>
    <section class="contact-form-area pb-100">
        <div class="container">
            <div class="default-section-title default-section-title-middle">
                <h3>Contactez-nous</h3>
                <p>
                    Vous avez une question ou un projet ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
            </div>
            <div class="section-content">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="google-map pr-20">
                            <img src="assets/images/home/6.jpg" alt="image"></img>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="contact-form-text-area">
                            <form id="contactForm">
                                <div class="row align-items-center">
                                    <div class="col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nom"
                                                id="name"
                                                required
                                                data-error="Veuillez entrer votre nom"
                                            ></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                class="form-control"
                                                placeholder="Email"
                                                id="email"
                                                required
                                                data-error="Veuillez entrer votre email"
                                            ></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="phone_number"
                                                class="form-control"
                                                placeholder="Numéro de téléphone"
                                                id="phone_number"
                                                required
                                                data-error="Veuillez entrer votre numéro de téléphone"
                                            ></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="msg_subject"
                                                class="form-control"
                                                placeholder="Sujet"
                                                id="msg_subject"
                                                required
                                                data-error="Veuillez entrer le sujet"
                                            ></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                class="form-control"
                                                placeholder="Votre message..."
                                                cols="30"
                                                rows="5"
                                                required
                                                data-error="Veuillez entrer votre message"
                                            ></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input
                                                    name="gridCheck"
                                                    value="J'accepte les termes et la politique de confidentialité."
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    id="gridCheck"
                                                    required
                                                ></input>
                                                <label class="form-check-label" for="gridCheck">
                                                    J'accepte les <a href="#">termes</a> et la <a href="#">politique de confidentialité</a>
                                                </label>
                                                <div class="help-block with-errors gridCheck-error"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <button class="default-button" type="submit">
                                            <span>Envoyer le message</span>
                                        </button>
                                        <div id="msgSubmit" class="h6 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  );
};

export default ContactSecond;
