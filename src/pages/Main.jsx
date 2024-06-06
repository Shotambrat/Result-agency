import React from "react";
import Cover from "../components/Main/Cover";
import MainService from "../components/Main/MainService";
import MainCases from "../components/Main/MainCases";
import HowWeWork from "../components/Main/HowWeWork";
import OurPartners from "../components/Main/OurPartners";
import MainArticle from "../components/Main/MainArticle";
<<<<<<< HEAD
=======
import Brief from "../components/Brief";
import Footer from "./Footer";
import MapFooter from "../components/MapFooter";
>>>>>>> 2940db10a8a43c14e2445bbb557bff90df5f772f
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
<<<<<<< HEAD
=======
      <Brief />
      {/* <MapFooter /> */}
      <Element name="contacts">
        <Footer />
      </Element>
>>>>>>> 2940db10a8a43c14e2445bbb557bff90df5f772f
    </div>
  );
};

export default Main;
