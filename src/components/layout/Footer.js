import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright text-center">
            <figure className="footer-logo">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/logo_horizontal.png?alt=media&token=6ae9fe22-0156-4a49-b178-bb8d6f80fff3"
                className="img-fluid"
                width={200}
                height={50}
                alt="Autonivelante"
              />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}
