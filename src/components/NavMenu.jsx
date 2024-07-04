import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Link } from "react-scroll";
import FooterSocial from "./FooterSocial";
import logoBack from "../assets/img/logoBackButton.svg";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

export default function NavMenu({ isNavOpen, handleClose }) {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();

  const currentLanguage = cookies.get("i18next") || "ru";

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 z-[100] ${isNavOpen ? "transform translate-x-0" : "transform translate-x-full"
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
          {(location.pathname.includes("/cases") ||
            location.pathname.includes("/blog")) && (
              <NavLink
                to={`/${currentLanguage}`}
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-aboutUs")}
              </NavLink>
            )}

          {location.pathname === `/${currentLanguage}` && (
            <>
              <Link
                to="services"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-services")}
              </Link>
              <Link
                to="cases"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-cases")}
              </Link>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-blog")}
              </Link>
            </>
          )}
          {location.pathname.includes("/cases") && (
            <>
              <Link
                to="resultk"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-result")}
              </Link>
              <Link
                to="statistics"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                {t("header-statistics")}
              </Link>
            </>
          )}
          {location.pathname.includes("/blog") && (
            <Link
              to="conclusion"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              {t("header-сonclusion")}
            </Link>
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
