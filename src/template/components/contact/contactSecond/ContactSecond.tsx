import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSecond = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mdb6izc', 'template_5sflthd', form.current, {
        publicKey: 'KnpSwhuXxsyMxnLxJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
 <div>
    <section className="contact-form-area pb-2">
        <div className="container">
            <div className="default-section-title default-section-title-middle">
                <h3>Contactez-nous</h3>
                <p>
                    Vous avez une question ou un projet ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
            </div>
            <div className="section-content">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="google-map pr-20">
                            <img src="assets/images/home/6.jpg" alt="image"></img>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-form-text-area">
                            <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nom"
                                                id="name"
                                                name="name"
                                                required
                                                data-error="Veuillez entrer votre nom"
                                            ></input>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                id="email"
                                                required
                                                data-error="Veuillez entrer votre email"
                                            ></input>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Numéro de téléphone"
                                                id="phone_number"
                                                required
                                                data-error="Veuillez entrer votre numéro de téléphone"
                                            ></input>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Sujet"
                                                id="msg_subject"
                                                required
                                                data-error="Veuillez entrer le sujet"
                                            ></input>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="form-control"
                                                placeholder="Votre message..."
                                                cols="30"
                                                rows="5"
                                                required
                                                data-error="Veuillez entrer votre message"
                                            ></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    name="gridCheck"
                                                    value="J'accepte les termes et la politique de confidentialité."
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="gridCheck"
                                                    required
                                                ></input>
                                                <label className="form-check-label" for="gridCheck">
                                                    J'accepte les <a href="#">termes</a> et la <a href="#">politique de confidentialité</a>
                                                </label>
                                                <div className="help-block with-errors gridCheck-error"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-12">
                                        <button className="default-button" type="submit">
                                            <span>Envoyer le message</span>
                                        </button>
                                        <div id="msgSubmit" className="h6 text-center hidden"></div>
                                        <div className="clearfix"></div>
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
