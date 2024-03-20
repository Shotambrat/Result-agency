import React from "react";
import Cover from "../components/Main/Cover";
import MainService from "../components/Main/MainService";
import MainCases from "../components/Main/MainCases";
import HowWeWork from "../components/Main/HowWeWork";
import OurPartners from "../components/Main/OurPartners";
import MainArticle from "../components/Main/MainArticle";
import Brif from "../components/Brif";
import Footer from "./Footer";
import MapFooter from "../components/MapFooter";
import { Element } from "react-scroll";

const Main = () => {
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
      <Brif />
      <MapFooter />
      <Element name="contacts">
        <Footer />
      </Element>
    </div>
  );
};

export default Main;
