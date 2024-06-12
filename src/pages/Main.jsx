import React, { useEffect } from "react";
import Cover from "../components/Main/Cover";
import MainService from "../components/Main/MainService";
import MainCases from "../components/Main/MainCases";
import HowWeWork from "../components/Main/HowWeWork";
import OurPartners from "../components/Main/OurPartners";
import MainArticle from "../components/Main/MainArticle";
import ScrollToTopButton from "../components/Main/ScrollToTopButton";
import { Element } from "react-scroll";


const Main = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    scrollToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);
  return (
    <div>
      <Element name="home">
        <Cover />
      </Element>
      <Element name="services">
        <MainService />
      </Element>
      <Element name="cases">
        <MainCases />
      </Element>
      <HowWeWork />
      <OurPartners />
      <MainArticle />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
