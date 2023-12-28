// PricingPage.tsx

import React, { useState } from 'react';
import PricingCard from './PricingCard';

const pricingData = [
  {
    id: 'basic',
    title: 'Basic Plan',
    cost: '$4/month/user',
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    cost: '$8/month/user',
    features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Plan',
    cost: 'Contact for price',
    features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
  },
];

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricingData.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelectPlan={setSelectedPlan}
          />
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8 p-4 bg-blue-100 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Selected Plan: {selectedPlan}</h2>
          <p>Additional details about the selected plan can be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default PricingPage;