import React from "react";
import Header from "./components/Header/Header";
import BackgroundSection from "./components/Background/Background_section";
import Specialists from "./components/Specialists/Specialists";
import ServicesSection from "./components/Offer/Services_section";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BackgroundSection />
      <Specialists />
      <ServicesSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
