import React, { useEffect } from "react";
import Cover from "../components/Main/Cover";
import MainService from "../components/Main/MainService";
import MainCases from "../components/Main/MainCases";
import HowWeWork from "../components/Main/HowWeWork";
import OurPartners from "../components/Main/OurPartners";
import MainArticle from "../components/Main/MainArticle";
import ScrollToTopButton from "../components/Main/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet-async"

const Main = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    scrollToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);


  const { t } = useTranslation();

  const keywords = [
    t('medicalMarketing'),
    t('tashkentMedicalAdvertising'),
    t('clinicWebsiteCreation'),
    t('smmForMedicalInstitutions'),
    t('mobileAppDevelopment'),
    t('brandStyleForMedicalBrands'),
    t('medicalServicePromotion'),
    t('medicalMarketingInUzbekistan'),
    t('clinicAdvertising'),
    t('digitalMarketing'),
    t('marketingForDentistry'),
    t('onlineMedicalPromotion'),
    t('brandStyleDevelopment'),
    t('logoForMedicalCompanies'),
    t('medicalWebsites'),
    t('socialNetworksForClinics'),
    t('medicalApps'),
    t('seoForMedicalSites'),
    t('contextualAdvertisingForClinics'),
    t('webDevelopmentForMedicalInstitutions'),
    t('marketingForPrivateClinics'),
    t('turnkeyWebsiteDevelopment'),
    t('marketingForLaboratories'),
    t('medicalServiceAdvertising'),
    t('medicalCampaigns'),
    t('tashkentWebAgency'),
    t('medicalSeoOptimization'),
    t('socialMediaManagement'),
    t('medicalBranding'),
    t('designForMedicalCompanies'),
    t('targetedAdvertisingForMedicine'),
    t('contentForMedicalSites'),
    t('mobileAppCreation'),
    t('medicalContent'),
    t('pharmacyMarketing'),
    t('designOfMedicalBrochures'),
    t('internetMedicalServiceAdvertising'),
    t('medicalMarketingAnalytics'),
    t('medicalPr'),
    t('marketingForHospitals'),
    t('medicalSmm'),
    t('onlineConsultations'),
    t('medicalDesign'),
    t('websiteDevelopmentForDoctors'),
    t('brandingMedicalServices'),
    t('medicalBrandPromotion'),
    t('webDevelopmentForHealthcare'),
    t('contentMarketingForMedicine'),
    t('medicalPromotions'),
    t('onlineClinicPromotion')
  ].join(', ');

  return (
    <>
      <Helmet>
        <title>{t('titlemain')}</title>
        <meta name="description" content={t('descriptionmain')} />
        <link rel="canonical" href="https://result-me.uz" />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={t('titlemain')} />
        <meta property="og:description" content={t('descriptionmain')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://result-me.uz" />
        <meta property="og:site_name" content="Result Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('titlemain')} />
        <meta name="twitter:description" content={t('descriptionmain')} />
      </Helmet>
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
        <Element name="blog">
          <MainArticle />
        </Element>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Main;
