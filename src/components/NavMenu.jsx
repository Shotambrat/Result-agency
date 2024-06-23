import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import FooterSocial from "./FooterSocial";
import logoBack from "../assets/img/logoBackButton.svg";
import { useTranslation } from "react-i18next";

export default function NavMenu({ isNavOpen, handleClose }) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 z-[100] ${
        isNavOpen ? "transform translate-x-0" : "transform translate-x-full"
      } w-full xxs:w-[65%] sm:w-[55%] md:w-[50%] lg:hidden flex flex-col items-center`}
    >
      <div
        onClick={handleClose}
        className="absolute top-4 right-4"
      >
        <img src={logoBack} alt="close" className="text-right w-12 h-12" />
      </div>
      <div className="max-h-full">
        <nav className="mt-20 flex flex-col items-center space-y-12 text-[24px] max-h-[571px] ">
          {(location.pathname === "/cases" ||
            location.pathname === "/cases/1" ||
            location.pathname === "/cases/2" ||
            location.pathname === "/cases/3" ||
            location.pathname === "/cases/4" ||
            location.pathname === "/cases/5" ||
            location.pathname === "/cases/6" ||
            location.pathname === "/blog/1" ||
            location.pathname === "/blog/2" ||
            location.pathname === "/blog/3") && (
            <NavLink to="/" smooth={true} duration={500}
            onClick={handleClose}>
              {t("header-aboutUs")}
            </NavLink>
          )}
          {location.pathname === "/" && (
            <div>
              <Link
                to="services"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-services")}
              </Link>
            </div>
          )}
          {location.pathname === "/" && (
            <Link
              to="cases"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              {t("header-cases")}
            </Link>
          )}
          {location.pathname === "/" && (
            <Link
              to="blog"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              {t("header-blog")}
            </Link>
          )}

          {(location.pathname === "/cases" ||
            location.pathname === "/cases/1" ||
            location.pathname === "/cases/2" ||
            location.pathname === "/cases/3" ||
            location.pathname === "/cases/4" ||
            location.pathname === "/cases/5" ||
            location.pathname === "/cases/6") && (
            <div>
              <Link
                to="resultk"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-result")}
              </Link>
            </div>
          )}
          {(location.pathname === "/cases" ||
            location.pathname === "/cases/1" ||
            location.pathname === "/cases/2" ||
            location.pathname === "/cases/3" ||
            location.pathname === "/cases/4" ||
            location.pathname === "/cases/5" ||
            location.pathname === "/cases/6") && (
            <div>
              <Link
                to="statistics"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-statistics")}
              </Link>
            </div>
          )}
          {(location.pathname === "/blog/1" ||
            location.pathname === "/blog/2" ||
            location.pathname === "/blog/3") && (
            <div>
              <Link
                to="conclusion"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-сonclusion")}
              </Link>
            </div>
          )}
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            onClick={handleClose}
          >
            {t("header-contacts")}
          </Link>
          <a
            onClick={handleClose}
            href="Tel:+998900228073"
            className="text-center"
          >
            +998900228073
          </a>
        </nav>
        <div className="flex justify-center gap-x-10 mt-12">
          <FooterSocial isNavOpen={isNavOpen} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
