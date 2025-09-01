import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ item }) => {
  const { name, price, features, buttonText, currency, description } = item;
  return (
    <div className="bg-gray-200 rounded-sm p-2 flex flex-col">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h1 className="text-2xl mb-3">
          {currency} {price}
        </h1>
        <p className="text-gray-500 mb-4">{description}</p>
        {features.map((item, index) => (
          <PricingFeature item={item} key={index}></PricingFeature>
        ))}
      </div>
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
};

export default PricingCard;
