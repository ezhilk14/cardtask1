// src/App.js

import React from 'react';
import './App.css';

const pricingPlans = [
  {
    title: "Free",
    price: "$0/month",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
    ],
    unavailableFeatures: [
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  },
  {
    title: "Plus",
    price: "$9/month",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
    ],
    unavailableFeatures: [
      "Monthly Status Reports",
    ],
  },
  {
    title: "Pro",
    price: "$49/month",
    features: [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    unavailableFeatures: [],
  },
];

const PricingCard = ({ title, price, features, unavailableFeatures }) => (
  <div className="pricing-card">
    <h2>{title}</h2>
    <h3>{price}</h3>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className="available">{feature}</li>
      ))}
      {unavailableFeatures.map((feature, index) => (
        <li key={index} className="unavailable">{feature}</li>
      ))}
    </ul>
    <button>BUTTON</button>
  </div>
);

const App = () => (
  <div className="pricing-table">
    {pricingPlans.map((plan, index) => (
      <PricingCard
        key={index}
        title={plan.title}
        price={plan.price}
        features={plan.features}
        unavailableFeatures={plan.unavailableFeatures}
      />
    ))}
  </div>
);

export default App;
