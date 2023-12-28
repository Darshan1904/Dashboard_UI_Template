// PricingCard.tsx

import React from 'react';

interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    cost: string;
    features: string[];
  };
  isSelected: boolean;
  onSelectPlan: (planId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isSelected, onSelectPlan }) => {
  return (
    <div>
            <div className="p-8 bg-gray-900 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  Starter Plan
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $39
                  </p>
                  <p className="text-lg text-gray-500">/ month</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#1DE9B7"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#1DE9B7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">10 deploys per day</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#1DE9B7"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#1DE9B7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">10 GB of storage</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#1DE9B7"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#1DE9B7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">3 domains</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#1DE9B7"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#1DE9B7"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">SSL Certificates</p>
                </li>
              </ul>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
  );
};

export default PricingCard;