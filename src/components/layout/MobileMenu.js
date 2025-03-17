"use client";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Image } from "react-bootstrap";
import { menuList } from "@/src/config/menu";
import { ShoppingBag } from "lucide-react";
import CartCount from "../common/CartCount";

export default function MobileMenu(props) {
  const { isSidebar, handleMobileMenu, handleSidebar } = props;

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = useCallback(
    (key) => {
      if (isActive.key === key) {
        setIsActive({ status: false });
      } else {
        setIsActive({ status: true, key });
      }
    },
    [isActive]
  );

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/Group%2045.png?alt=media&token=827170a8-1063-46de-b7bf-db0ae19e3058"
                className="img-fluid"
                height={50}
                width={150}
                alt="autonivelante Mobile Navbar Logo"
              />
            </Link>
          </div>

          <div>
            <div className="mb-4 text-center">
              <Link href="/cart">
                <ShoppingBag color="white" size={30} className="cart-icon" />
                <div className="count-products-mobile">
                  <span id="contador-productos-mobile">
                    <CartCount />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {menuList.map((item, i) => (
                  <li key={i}>
                    <Link href={item.route}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="https://web.facebook.com/profile.php?id=100088723373843">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/autonivelante_cl/">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
