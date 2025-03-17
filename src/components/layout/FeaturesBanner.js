import Button from "react-bootstrap/Button";
import { Container, Image } from "react-bootstrap";
import Link from "next/link";

export default function FeaturesBanner() {
  const rightArrowSvg = (
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
  );
  return (
    <section className="feature-section sec-pad centred">
      <Container>
        <div className="content-box">
          <div className="feature-block">
            <div
              className="feature-block wow fadeIn animated"
              data-wow-delay="00ms"
              data-wow-duration="2000ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/banner-productos.png?alt=media&token=330a069b-a595-46be-830f-965d0189efb0"
                    alt=""
                  />
                  <Link href="/products" className="overlay-box">
                    <Button variant="outline-light">
                      Ver productos{rightArrowSvg}
                    </Button>{" "}
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
