import React from "react";
import HomeSlider from "../../components/home/homeSlider/HomeSlider.tsx";
import HomeFirstSection from "../../components/home/homeFirstSection/HomeFirstSection.tsx";
import HomeSecondSection from "../../components/home/homeSecondSection/HomeSecondSection.tsx";
import HomeThirdSection from "../../components/home/homeThirdSection/HomeThirdSection.tsx";
import ServiceList from "../../components/service/servicesList/ServiceList.tsx";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeFirstSection />
      <HomeThirdSection />
      <HomeSecondSection />
      <ServiceList />
    </div>
  );
};

export default Home;
