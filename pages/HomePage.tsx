"use client";

import React, { useEffect } from "react";
import Footer from "./(components)/Footer";
import "aos/dist/aos.css";
import Head from "next/head";

const HomePage = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Footer Template</title>
      </Head>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default HomePage;
