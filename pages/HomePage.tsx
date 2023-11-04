import React from "react";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import Footer from "./(components)/Footer";
import WhyChooseUs from "./(components)/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <div>
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
        <>
          <Footer />
        </>
      </div>
    </>
  );
};

export default HomePage;
