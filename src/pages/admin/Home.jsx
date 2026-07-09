import React from "react";
import TopSection from "../../components/dashboard/TopSection";
import TopFive from "../../components/dashboard/TopFive";
import PieChart from "../../components/dashboard/PieChart";
import FeaturesChart from "../../components/dashboard/FeaturesChart";

const Home = () => {
  return (
    <div className="">
      <TopSection />
      <TopFive />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <PieChart />
        <FeaturesChart />
      </div>
    </div>
  );
};

export default Home;
