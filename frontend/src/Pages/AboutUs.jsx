import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"About Us — Good Health"}
        description={"Good Health is Nepal's leading online Hospital Management System dedicated to bridging the gap between patients and expert healthcare providers."}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
