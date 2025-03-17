"use client";
import React, { useState, useEffect, useCallback } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Footer from "./Footer";
import Header from "./Header";
import HeaderAux from "@/src/components/layout/HeaderAux";
import WhatsAppButton from "@/src/components/elements/WhatsAppButton";

export default function Layout(props) {
  const { headerStyle, footerStyle, children, wrapperCls } = props;
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = useCallback(() => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  }, [isMobileMenu]);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({ live: false });
    window.wow.init();

    const scrollEffect = () => {
      setScroll(window.scrollY > 100);
    };

    document.addEventListener("scroll", scrollEffect);
    return () => {
      document.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <DataBg />

      <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
        {!headerStyle || headerStyle === 3 ? (
          <Header
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
        ) : null}
        {!headerStyle || headerStyle === 4 ? (
          <HeaderAux
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
        ) : null}

        {children}

        {!footerStyle ? <Footer /> : null}
        {footerStyle === 1 ? <Footer /> : null}
      </div>

      <WhatsAppButton />

      {scroll ? <BackToTop /> : null}
    </>
  );
}
