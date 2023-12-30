import React, { useEffect, useRef, useState, ReactNode } from "react";

export let activeTabRef: React.RefObject<HTMLHRElement>;
export let activeTab: React.RefObject<HTMLButtonElement>;

interface InPageNavigationProps {
  routes: string[];
  defaultActiveIndex?: number;
  defaultHidden?: string[];
  children: ReactNode[] | ReactNode;
}

const InPageNavigation: React.FC<InPageNavigationProps> = ({ routes, defaultActiveIndex = 0, defaultHidden = [], children }) => {
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(defaultActiveIndex);
  activeTabRef = useRef<HTMLHRElement>(null);
  activeTab = useRef<HTMLButtonElement>(null);

  const changePageState = (btn: HTMLButtonElement, i: number) => {
    let { offsetWidth, offsetLeft } = btn;

    if (activeTabRef.current) {
      activeTabRef.current.style.width = `${offsetWidth}px`;
      activeTabRef.current.style.left = `${offsetLeft}px`;
    }

    setActiveRouteIndex(i);
  };

  useEffect(() => {
    if (activeTab.current) {
      changePageState(activeTab.current, defaultActiveIndex);
    }
  }, [defaultActiveIndex]);

  return (
    <>
      <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {routes.map((route, index) => (
          <button
            key={index}
            className={`p-4 px-5 capitalize ${activeRouteIndex === index ? "text-black " : "text-dark-grey "} ${defaultHidden.includes(route) ? "md:hidden " : ""}`}
            onClick={(e) => {
              if (e.target instanceof HTMLButtonElement) {
                changePageState(e.target, index);
              }
            }}
            ref={activeRouteIndex === index ? activeTab : null}
          >
            {route}
          </button>
        ))}

        {activeTabRef.current && <hr ref={activeTabRef} className="absolute bottom-0 duration-300" />}
      </div>

      {Array.isArray(children) ? children[activeRouteIndex] : children}
    </>
  );
};

export default InPageNavigation;