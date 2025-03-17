"use client";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

export default function Services() {
  const serviceSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );

  return (
    <section
      id="services-section"
      className="service-section p_relative centred sec-pad"
    >
      <Container
        fluid
        className="d-flex justify-content-center wow fadeInUp animated"
        data-wow-delay="00ms"
        data-wow-duration="1000ms"
      >
        <article className="postcard">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            className="mySwiper"
            keyboard={true}
          >
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fservices-banner-image.jpg?alt=media&token=f37763e5-238a-4cf9-92f2-888c4437f4be)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fpatio-foster-banner.jpg?alt=media&token=6af21c25-4f44-4883-ab56-f7e4608d9a99)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_01.jpg?alt=media&token=5f4b719d-f458-4253-94c4-179aabe1b691)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_02.jpg?alt=media&token=8c56824c-687f-463f-adf4-abb0822b5896)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_04.jpg?alt=media&token=db3d84d9-38f9-4f6b-9e46-b27d0834bb41)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_05.jpg?alt=media&token=151ffcd5-50b3-48b5-bf0c-b165522ac473)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_06.jpg?alt=media&token=1071ee83-18c8-4300-a49d-c10da333c3e5)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="postcard__img"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/huellitas%20products%2Fcarrusel-home_08.jpg?alt=media&token=c7db24d3-51e7-4f7a-8152-b23da539f87a)",
              }}
            ></SwiperSlide>
          </Swiper>

          <div className="postcard__text">
            <h1 className="postcard__title blue text-light text-start">
              <Link href="/projects">
                Conoce Nuestros
                <br />
                Servicios
              </Link>
            </h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Expertos en superficies, al igual que en aplicación de
              autonivelantes cementicios, Nivelación y afinado de losa,
              sobrelosas, retape, reparación de fisuras y superficies.
              <br />
              <br />
              Deja tu proyecto en nuestras manos; Somos los referentes en
              instalación y reparación de toda la gama de pisos vinilicos en
              rollos y en palmetas. Especialistas en instalación y reparación en
              toda la gama de pisos vinilicos en rollos y en palmetas.
            </div>
            <Container fluid className="mb-5 text-center">
              <Row>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Autonivelantes Cementicios</p>
                  </div>
                </Col>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Autonivelacion</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Preparación de Superficies</p>
                  </div>
                </Col>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Sobrelosas</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Afinado de Losas</p>
                  </div>
                </Col>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Retape</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="postcard__content">
                    {serviceSvg}
                    <p className="text-light">Reparación de Fisuras</p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="buttons__container">
              <Link href="/projects" alt="Link sección Contacto">
                <Button variant="light" className="service-button">
                  Servicios
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </Button>{" "}
              </Link>
              <Link href="/contact-page" alt="Link sección Contacto">
                <Button variant="outline-light" className="service-button">
                  Contáctanos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </Button>{" "}
              </Link>
            </Container>
          </div>
        </article>
      </Container>
    </section>
  );
}
