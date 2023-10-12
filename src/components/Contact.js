import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import HeroBannerImage from "../assets/images/3.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_19zu5y8",
      "template_sdfpcif",
      form.current,
      "5SuyQXUK8son_Ocr8"
    );
    e.target.reset();
  };
  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3>Contact us</h3>
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span>Address:</span> Ismailia
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span>Email:</span>{" "}
                              <a
                                href="mailto:muhammedanwarwork@gmail.com.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                muhammedanwarwork
                                <br />
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span>Phone:</span>{" "}
                              <a
                                href="https://api.whatsapp.com/send?phone=+201098931572&text=Hello, more information!"
                                target="_blank"
                              >
                                +201098931572
                                <br />
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} class="contactForm">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Write a message here"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-danger"
                              style={{ backgroundColor: "#FF2625" }}
                            />
                            <div
                              class="submitting"
                              style={{ backgroundColor: "#FF2625" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="w-100 social-media mt-5">
                      <h3>Follow us here</h3>
                      <p className="mt-3">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-stretch">
                  <div class="info-wrap w-100 p-4 img">
                    <img src={HeroBannerImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
