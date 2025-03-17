import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Image } from "react-bootstrap";
import { ShoppingBag } from "lucide-react";
import CartCount from "../common/CartCount";

export default function Header(props) {
  const { scroll, isMobileMenu, handleMobileMenu, isSidebar } = props;

  return (
    <>
      <header
        className={`main-header header-style-three ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* header-lower */}
        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <figure className="logo">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/Group%2045.png?alt=media&token=827170a8-1063-46de-b7bf-db0ae19e3058"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Autonivelante main navbar Logo"
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
                    <ShoppingBag size={23} className="cart-icon" />
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
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <figure className="logo">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/Group%2052.png?alt=media&token=ec59cd9b-219d-4e66-a64e-7cc615a896a7"
                      className="img-fluid"
                      width={200}
                      height={50}
                      alt="autonivelante Navbar Logo"
                    />
                  </figure>
                </Link>
              </div>
              <div className="menu-area clearfix">
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
                    <ShoppingBag
                      color="black"
                      size={25}
                      className="cart-icon"
                    />
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
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
