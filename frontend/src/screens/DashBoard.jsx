import React from "react";
import Header from "../common/Header";
import ContactComponent from "../components/dashboardComponents/ContactComponent";
import CardGrid from "../components/dashboardComponents/CardGrid";
import EcoConsciousBanner from "../components/dashboardComponents/EcoConsciousBanner";

const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="w-full flex p-4 font-montserrat">
        <div className="flex flex-col gap-5">
          <CardGrid />
          <EcoConsciousBanner />
        </div>
          <ContactComponent />
      </div>
    </>
  );
};

export default DashBoard;