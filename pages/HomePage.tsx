"use client";

import React, { useEffect } from "react";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import Footer from "./(components)/Footer";
import WhyChooseUs from "./(components)/WhyChooseUs";
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
        <title>Prop Firm || Homepage</title>
      </Head>
      {/* HEADER SECTION */}
      <Header />

      {/* MAIN SECTION */}

      {/* HERO SECTION */}
      <section className="hero_sec">
        <Hero />
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why_choose_us_sec">
        <WhyChooseUs />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default HomePage;
