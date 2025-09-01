import React, { use } from "react";
import PricingCard from "./PricingCard";
import DaisiPricingCard from "../DaisiPricing/DaisiPricingCard";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="px-10">
      <h1 className="mb-3 text-3xl font-bold">Pricing Plans</h1>

      <div className="flex flex-col gap-5 bg-amber-200 p-5 rounded-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingData.map((item) => (
            <PricingCard item={item} key={item.id}></PricingCard>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingData.map((item) => (
            <DaisiPricingCard item={item} key={item.id}></DaisiPricingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
