"use client";

import Link from "next/link";
import Layout from "@/src/components/layout/Layout";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ModalVideoPage = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const exitButtonSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="white"
      fillRule="evenodd"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className="bi bi-x-lg"
      viewBox="0 0 16 16"
      onClick={() => window.history.back()}
      aria-label="Modal Video Exit Button"
      role="button"
      tabIndex={0}
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imageSrc =
    "https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/autonivelante_contact_bg.png?alt=media&token=385298ec-ac43-43a5-94d8-52df6e8b50c8";

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <section className="modalvideo__section">
        <div className="modalvideo__section-bg">
          {imageSrc && (
            <Image
              src={imageSrc}
              layout="fill"
              style={{ width: "100%", height: "100%" }}
              alt="Background Autonivelante Image"
              onError={(e) => console.error("Error loading image:", e)}
            />
          )}
        </div>
        <div className="modalvideo__section-inner">
          {isClient && (
            <ReactPlayer
              url="https://youtu.be/tBoRtfl5Kfk?si=MC9GvXxcMg9sVwZ8"
              controls={false}
              width={isMobile ? "100%" : "60%"}
              height={isMobile ? "40%" : "80%"}
              loop
              onError={(e) => console.error("Error loading video:", e)}
              onReady={() => {
                console.log("Player is ready");
              }}
            />
          )}
          <div className="exit__button-card">
            <Link href="#about-section" title="Exit Button Link Icon">
              {exitButtonSvg}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModalVideoPage;
