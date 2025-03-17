"use client";
import Link from "next/link";
import { Button } from "react-bootstrap";

const caracteristicas = [
  { id: 0, name: "Suelos industriales." },
  { id: 1, name: "Zonas de alto tráfico." },
  { id: 2, name: "Oficinas, Plantas Abiertas." },
  { id: 3, name: "Galpones, Hangares y Bodegas." },
  { id: 4, name: "Estacionamientos." },
];

export default function About() {
  const arrowRightSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      fill="dark"
      className="bi bi-arrow-right-short"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
      />
    </svg>
  );
  const playVideoSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      style={{ marginLeft: "12px" }}
      fill="currentColor"
      className="bi bi-play-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
    </svg>
  );
  const renderCaracteristicas = caracteristicas.map((caracteristica) => (
    <li key={caracteristica.id}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        fill="currentColor"
        className="bi bi-circle-fill pe-1"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      {caracteristica.name}
    </li>
  ));

  return (
    <section id="about-section" className="about__section p_relative">
      <div className="outer-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-13 image-column ml_0 about__main-column">
            <div className="image_block">
              <div className="image-box p_relative">
                <div
                  className="aboutcard__text bg-light wow fadeInUp animated"
                  data-wow-delay="05ms"
                  data-wow-duration="1500ms"
                >
                  <div className="aboutcard__text-inner">
                    <h1 className="postcard__title blue text-dark text-start fs-3 fw-bold">
                      ¿Qué es el autonivelante?
                    </h1>
                    <div className="aboutcard__bar"></div>
                    <div className="aboutcard__preview-txt">
                      El Autonivelante crea una superficie plana, lisa y con
                      resistencia a la compresión; similar o superior a la del
                      concreto tradicional.
                      <br />
                      <br />
                      Se puede utilizar en exterior e interior, como por ejemplo
                      en:
                      <br />
                      <br />
                      <ul>{renderCaracteristicas}</ul>
                    </div>
                  </div>

                  <section className="aboutcard__buttons">
                    <div className="aboutcard__buttons-btn-video">
                      <Link href="/modalvideo">
                        <Button size="lg" className="theme-btn-one w-100">
                          <p>Reproducir video</p>
                          {playVideoSvg}
                        </Button>
                      </Link>
                    </div>
                    <div className="aboutcard__buttons-btn-contact">
                      <Link href="/contact-page">
                        <Button
                          size="lg" className="theme-btn-tree"
                        >
                          <p className="text-dark">Contáctanos</p>
                          {arrowRightSvg}
                        </Button>{" "}
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
