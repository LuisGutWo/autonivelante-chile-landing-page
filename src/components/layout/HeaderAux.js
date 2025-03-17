import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Image } from "react-bootstrap";
import { ShoppingBag } from "lucide-react";
import CartCount from "../common/CartCount";

export default function HeaderAux(props) {
  const { scroll, isMobileMenu, handleMobileMenu, isSidebar } = props;

  return (
    <>
      <header
        className={`main-header header-style-three2 ${
          scroll ? "fixed-header2" : ""
        }`}
      >
        {/* header-lower */}
        <div className="header-lower2">
          <div className="outer-container2">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <figure className="logo">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/logo_horizontal.png?alt=media&token=6ae9fe22-0156-4a49-b178-bb8d6f80fff3"
                      className="img-fluid"
                      width={200}
                      height={50}
                      alt="Autonivelante Navbar Logo"
                    />
                  </figure>
                </Link>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="cart-box">
                  <Link href="/cart">
                    <ShoppingBag size={23} />
                    <div className="count-products">
                      <span id="contador-productos">
                        <CartCount />
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky-header2 ${scroll && ""}`}
        >
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/logo_horizontal.png?alt=media&token=6ae9fe22-0156-4a49-b178-bb8d6f80fff3"
                      className="img-fluid"
                      width={200}
                      height={50}
                      alt="Autonivelante Navbar Logo"
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area2 clearfix">
                <nav className="main-menu2 navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix text-light"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="cart-box">
                  <Link href="/cart">
                    <ShoppingBag />
                    <div className="count-products">
                      <span id="contador-productos">
                        <CartCount size={25} className="cart-icon" />
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
