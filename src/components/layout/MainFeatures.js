import { Container } from "react-bootstrap";

const caracteristicas = [
  { id: 0, name: "Fácil preparación y colocación." },
  { id: 1, name: "Sólo necesita 4 horas de secado." },
  {
    id: 2,
    name: "Instala revestimientos entre 24 y 48 horas después de su aplicación.",
  },
  { id: 3, name: "Alta estabilidad dimensional y durabilidad." },
  { id: 4, name: "Acabado liso y fino acompañado de alta resistencia final." },
];

export default function MainFeatures() {
  const checkSvg = (
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
    <Container>
      <section className="mainfeat-section p_relative">
        <div
          className="bg-layer wow fadeIn animated"
          data-wow-delay="00ms"
          data-wow-duration="1000ms"
          style={{ backgroundColor: "#015c93" }}
        >
          <h2 className="text-light fw-bold">Campos de Aplicación</h2>
          <div className="mainfeat__bar-2"></div>
          <p className="text-light">
            El autonivelante está diseñado para la instalación de recubrimientos
            de alfombras, pisos vinílicos, de madera, flotantes, y de goma.
            <br />
            <br />
            Es utilizado principalmente para la nivelación reparación y afinado
            de losas, sobrelosas, radieres y pisos de concreto.
          </p>
        </div>
        <div
          className="auto-container wow fadeIn animated"
          data-wow-delay="00ms"
          data-wow-duration="1000ms"
        >
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-column p-0">
              <div className="content_block_two">
                <div className="content-box">
                  <div className="featcard__text">
                    <h1 className="featcard__title blue text-dark text-start fw-bold">
                      Características
                      <br />
                      Principales
                    </h1>
                    <div className="mainfeat__bar"></div>
                    <Container
                      fluid
                      className="text-start d-flex flex-column gap-4 mt-3"
                    >
                      <ul className="featcard__content">
                        {caracteristicas.map((caracteristica) => (
                          <li key={caracteristica.id}>
                            {checkSvg}
                            <p>{caracteristica.name}</p>
                          </li>
                        ))}
                      </ul>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="outer-box wow fadeIn animated"
          data-wow-delay="00ms"
          data-wow-duration="1000ms"
        >
          <h2>Espesor aplicable</h2>
          <div className="mainfeat__bar"></div>
          <p className="text-dark">
            Cargas desde 3 mm hasta 30 mm de espesor en una sola aplicación;
            tomando en cuenta las especificaciones de cada producto.
          </p>
        </div>
      </section>
    </Container>
  );
}
