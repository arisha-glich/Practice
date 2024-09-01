import React from "react";
import EventTicketing from "../Layout/EventTicketing";
import FeaturesSection from "../Components/Features/Features";
import Section from "../Components/Features/ManageEvents";
import StyledBox from "../Components/Features/StyleBox";
import DiscoverEvents from "../Components/Features/DiscoverEvents";
import PricingComponent from "../Components/Pricing/PricingComponent";
import EventCategories from "../Components/Card/Card";
import FAQSection from "../Components/Faq/Faq";
import HelpCenterContainer from "../Components/Help/HelpContainer";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import HeaderTwo from "../Layout/HeaderTwo";
import HowItWorks from "../Components/Features/HowItWorks";

function LandingPage() {
  return (
    <>
      <HeaderTwo />
      <Header />
      <EventTicketing />
      <FeaturesSection />
      <HowItWorks />
      <DiscoverEvents />
      <Section />
      <StyledBox />
      <PricingComponent />
      <EventCategories />
      <FAQSection />
      <HelpCenterContainer />
      <Footer />
    </>
  );
}

export default LandingPage;
