import React from 'react';

interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    cost: string;
    features: string[];
  };
  isSelected: boolean;
  ind: number;
  onSelectPlan: (planId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isSelected, ind, onSelectPlan }) => {
  const { title, cost, features } = plan;
  return (
    <div className={"w-full md:w-96 " + (isSelected && "-translate-y-4 transition transform duration-150 ease-in-out")}>
            <div className={"p-8 bg-gray-800 rounded h-96 relative " + (isSelected && "border-l-[#0469D9] border-b-[#0469D9] border-r-[#4CCEC6] border-t-[#4CCEC6] border-2 transition transform duration-300 ease-in-out")}>
              {ind === 1 && <span className="bg-[#CCFBF1] text-[#42B1A5] font-bold px-4 py-2 tracking-widest text-xs absolute right-4 -top-4 rounded-full">Most Popular</span>}
              <div className="mb-6 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  {title}
                </p>
                <div className="flex items-center justify-center my-3">
                  {ind === 2 ?
                  <p className="mr-2 text-4xl pb-2 font-semibold text-white">
                    {cost.slice(1)}
                  </p>
                  :
                  <p className="mr-2 text-5xl font-semibold text-white">
                    {cost}
                  </p>}
                  {ind !== 2 && <p className="text-lg text-gray-500">/ month</p>}
                </div>
              </div>
              <hr className="w-full bg-gray-400 my-5" />
              <ul className="mb-8 space-y-2">
                {
                  features.map((feature, index) => (
                    <li key={index} className="flex items-center">
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
                      <p className="font-medium text-gray-300">{feature}</p>
                    </li>
                  ))
                }
              </ul>
              <div className="flex items-center justify-center">
                <button
                  className="mx-auto w-5/6 h-12 font-medium tracking-wide text-white transition duration-200 rounded-full absolute bottom-5 shadow-md bg-gradient-to-r from-[#0469D9] to-[#4CCEC6] focus:shadow-outline focus:outline-none"
                  onClick={
                    () => onSelectPlan(plan.id)
                  }
                >
                  Select
                </button>
              </div>
              
            </div>
            {
              isSelected && (
                <>
                  <div className="w-11/12 h-2 mx-auto bg-gray-800 rounded-b opacity-90" />
                  <div className="w-10/12 h-2 mx-auto bg-gray-800 rounded-b opacity-60" />
                  <div className="w-9/12 h-2 mx-auto bg-gray-800 rounded-b opacity-30" />
                </>
              )
            }
            
      </div>
  );
};

export default PricingCard;