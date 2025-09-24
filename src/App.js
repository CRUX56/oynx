import React from "react";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import onyxTheme from "./theme/onxy"; // Assuming you have the onyx theme defined in this file
import Config from "./content/config.json"; // Assuming you have a config file for the application
import Navbar from "./components/layout/Navbar"; // Assuming you have a Navbar component
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import content from "./content/content.json"; // Assuming you have a content.json file for the content
import FullWidth from "./components/ui/FullWidthSection"; // Assuming you have a Parallax component
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <ThemeProvider theme={onyxTheme}>
      <div className="App">
        {/* Navbar */}
        <Navbar
          options={Config}
          logo={Config.logo.src}
          navigation={Config.navigation}
        />

        {/* Hero Section */}

        <HeroSection
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          buttonText={content.hero.button.text}
          onButtonClick={() => alert("Button Clicked!")}
          image={content.hero.image}
        ></HeroSection>

        <FeaturesSection
          title={content.features.title}
          description={content.features.description}
          features={content.features.items}
        ></FeaturesSection>

        {/* Parallax Section */}
        <FullWidth title={content.fullWidth.title}></FullWidth>

        {/* About Section */}
        <AboutSection
          title={content.about.title}
          description={content.about.description}
        ></AboutSection>

        <FeaturesSection
          title={content.selectedWorks.title}
          description={content.selectedWorks.description}
          features={content.selectedWorks.items}
        ></FeaturesSection>

        {/* Parallax Section */}
        <FullWidth title={content.footerCTA.title}></FullWidth>

        {/* Footer */}
        <Footer
          logo={content.footer.logo}
          blurb={content.footer.blurb}
          email={content.footer.email}
          navigation={content.footer.navigation}
          copyright={content.footer.copyright}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
