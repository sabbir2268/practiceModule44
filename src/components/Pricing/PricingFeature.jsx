import React from "react";
import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({ item }) => {
  return (
    <div className="flex mt-2 gap-2 mb-2">
      <p>
        <CircleCheckBig size={20} />
      </p>
      {item}
    </div>
  );
};

export default PricingFeature;
