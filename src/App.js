import React from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar"; // Assuming you have a Navbar component
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import content from "./content/content.json"; // Assuming you have a content.json file for the content
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import PortfolioSection from "./components/PortfolioSection"; // Assuming you have a PortfolioSection component
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/layout/Footer";
import NewsSection from "./components/NewsSection";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        buttonText={content.hero.button.text}
        onButtonClick={() => alert("Button Clicked!")}
        backgroundImage={content.hero.backgroundImage}
      ></HeroSection>

      {/* About Section */}
      <AboutSection
        title={content.about.title}
        description={content.about.description}
      ></AboutSection>

      {/* Services Section */}
      <ServicesSection
        title={content.services.title}
        description={content.services.description}
        services={content.services.items}
      ></ServicesSection>

      <FeaturesSection
        title={content.features.title}
        description={content.features.description}
        features={content.features.items}
      ></FeaturesSection>

      <PortfolioSection
        title={content.portfolio.title}
        description={content.portfolio.description}
        items={content.portfolio.items}
      ></PortfolioSection>

      {/* Testimonials Section */}

      {/* Testimonials Section */}
      <TestimonialsSection
        title={content.testimonials.title}
        description={content.testimonials.description}
        testimonials={content.testimonials.reviews}
      ></TestimonialsSection>

      {/* Latest News Section */}
      <NewsSection />

      {/* Footer */}
      <Footer
        logo={content.footer.logo}
        blurb={content.footer.blurb}
        navigation={content.footer.navigation}
        copyright={content.footer.copyright}
      />
    </div>
  );
};

export default App;
