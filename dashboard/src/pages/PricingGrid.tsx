// PricingPage.tsx

import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const pricingData = [
  {
    id: 'basic',
    title: 'Basic Plan',
    monthlyCost: 4,
    yearlyCost: 48, // 4 * 12
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    monthlyCost: 8,
    yearlyCost: 96, // 8 * 12
    features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Plan',
    monthlyCost: 'Contact for Price',
    yearlyCost: 'Contact for Price', // 10 * 12
    features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
  },
];

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingFrequency, setBillingFrequency] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingFrequency = () => {
    setBillingFrequency((prevFrequency) => (prevFrequency === 'monthly' ? 'yearly' : 'monthly'));
  };

  return (
    <div className="mx-auto h-max pb-10 w-full bg-[#0C0C1C] font-inter">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="text-center py-5 text-white">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold text-2xl md:text-3xl lg:text-4xl">plans</span> for your <span className="font-semibold text-2xl md:text-3xl lg:text-4xl">strategies</span>
          </h1>
          <p className="text-sm font-normal text-gray-400">
            See below our main three plans for your research helping.
          </p>
          <p className="text-sm font-normal text-gray-400">It starts from here! You can choose what you really like.</p>
        </div>

        <div className="flex items-center text-white justify-center mt-5 space-x-4">
          <span className={`text-base font-medium ${billingFrequency === 'monthly' && 'text-[#4CCEC6]'}`}>
            Bill Monthly
          </span>
          <button
            className="relative rounded-full focus:outline-none"
            onClick={toggleBillingFrequency}
          >
            <div
              className="w-16 h-8 transition bg-[#0467d9c2] rounded-full shadow-md outline-none"
            ></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billingFrequency === 'yearly' && 'translate-x-8'
              }`}
            ></div>
          </button>
          <span className={`text-base font-medium ${billingFrequency === 'yearly' && 'text-[#4CCEC6]'}`}>
            Bill Annually
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:grid-cols-3 gap-8 mx-5 pb-10">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={{
              ...plan,
              cost: billingFrequency === 'monthly' ? `$${plan.monthlyCost}` : `$${plan.yearlyCost}`,
            }}
            isSelected={selectedPlan === plan.id}
            onSelectPlan={setSelectedPlan}
            ind={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;