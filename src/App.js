import React from "react";
import HeroPage from "./Pages/heroPage";
import Section2 from "./Pages/section2";
import GetStarted from "./Pages/getStarted";
import Footer from "./Pages/footer";
import "./App.css";
import TestimonialPage from "./Pages/testimonialPage";

function App() {
  return (
    <div className="App">
      <HeroPage />
      <Section2 />
      <GetStarted />
      <TestimonialPage />
      <Footer />
    </div>
  );
}

export default App;
