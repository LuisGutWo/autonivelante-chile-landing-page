"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { formatPrice } from "@/src/config/formatPrice";
import { current } from "@reduxjs/toolkit";

export default function Contact() {
  const form = useRef();
  const cart = useSelector((state) => state.cart);

  const arrowRightSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-arrow-right-short"
      style={{ marginLeft: "1rem" }}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
      />
    </svg>
  );

  const clockSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      spacing="10"
      fill="currentColor"
      className="bi bi-clock mt-4"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
    </svg>
  );

  const addressSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-geo-alt mt-4"
      viewBox="0 0 16 16"
    >
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );

  const phoneSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="currentColor"
      className="bi bi-phone mt-4"
      viewBox="0 0 16 16"
    >
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  );

  const facebookSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      className="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    </svg>
  );

  const instagramSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      className="bi bi-instagram"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_SERVICE_ID,
        process.env.NEXT_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(" enviado con exito!");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Algo salio mal.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact__section p_relative">
      <Container>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-13 image-column ml_0 contact__main-column">
            <div className="contact_block_one d-flex justify-content-center align-items-center">
              <div className="contactcard image-box p_relative d-flex flex-wrap flex-row">
                {/* Inicio Contact Info */}
                <div className="contactcard__text">
                  <div className="contactcard__text-inner">
                    <div className="logo-box">
                      <figure className="logo">
                        <Link href="/">
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/autonivelante_logo_contact.png?alt=media&token=3e28f7c7-4fa2-4db4-8c63-3e9a5a01c37e"
                            alt=""
                          />
                        </Link>
                      </figure>
                    </div>

                    <Container
                      fluid
                      className="mb-5 text-start pt-0 pe-3 pb-0 ps-3"
                    >
                      <Row>
                        <Col>
                          <div className="contactcard__content d-flex flex-row align-items-start">
                            {phoneSvg}

                            <p className="text-light">
                              <b>Numero de contacto</b>
                              <br />
                              +56 9 7528 0836
                              <br />
                              +56 9 7144 7333
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="contactcard__content d-flex flex-row align-items-start">
                            {addressSvg}

                            <p className="text-light">
                              <b>Dirección</b>
                              <br />
                              Av. La Dehesa 1822 - Of. 430,
                              <br />
                              Lo Barnechea.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="contactcard__content-tree d-flex flex-row align-items-start">
                            {clockSvg}
                            <p className="text-light pt-3">
                              <b>Horario</b>
                              <br />
                              Lunes a Domingo.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
                {/* Final contact info */}

                {/* Inicio Contact Form Box section */}
                <div className="contactcard__text-two">
                  {/* Contact Form Section */}
                  <section className="contact-style">
                    <div className="auto-container">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="form__contact content-box mr_70">
                            <div className="sec-title mb_35 ms-1">
                              <h1 className="postcard__title blue text-dark text-start fw-bold fs-2">
                                Contáctanos
                              </h1>
                              <div className="contactcard__bar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12 form-column">
                          <div className="form-inner">
                            <Form
                              ref={form}
                              onSubmit={sendEmail}
                              id="contact-form"
                            >
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                              >
                                <Form.Control
                                  name="user_name"
                                  type="name"
                                  placeholder="Nombre y Apellido"
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPhone"
                              >
                                <Form.Control
                                  name="user_phone"
                                  type="phone"
                                  placeholder="Teléfono"
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Control
                                  name="user_email"
                                  type="email"
                                  placeholder="Correo electrónico"
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicCurrentMessage"
                              >
                                <Form.Control
                                  name="user_message"
                                  as="textarea"
                                  placeholder="Motivo de contacto"
                                  rows={3}
                                  value={current.value}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicMessage"
                              >
                                <Form.Control
                                  name="message"
                                  as="textarea"
                                  placeholder="Productos seleccionados"
                                  rows={4}
                                  value={cart
                                    .map(
                                      (cartItem) =>
                                        `${cartItem.qty} - ${
                                          cartItem.title
                                        } - (${formatPrice(
                                          cartItem.price
                                        )}) = ${formatPrice(
                                          cartItem.price *
                                            cartItem?.qty
                                        )}`
                                    )
                                    .join("\n")}
                                  readOnly
                                />
                              </Form.Group>

                              <Button
                                className="theme-btn theme-btn-one"
                                style={{ width: "100%", marginTop: "1rem" }}
                                value="Send"
                                type="submit"
                                name="submit-form"
                              >
                                Enviar mensaje
                                {arrowRightSvg}
                              </Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Contact Form Section End */}
                </div>
                <section className="social__icons">
                  <Link
                    href="https://www.instagram.com/autonivelante_cl/"
                    className="contact__links mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <div className="social__icons-inner d-flex justify-content-center align-items-center">
                      {instagramSvg}
                    </div>
                  </Link>
                  <Link
                    href="https://web.facebook.com/profile.php?id=100088723373843"
                    className="contact__links"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <div className="social__icons-inner d-flex justify-content-center align-items-center">
                      {facebookSvg}
                    </div>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
