import { FC, useEffect, useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = () => {

  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const sideBarIconTab = useRef<HTMLButtonElement>(null);
  const pageStateTab = useRef<HTMLButtonElement>(null);

  const changePageState = (e: React.MouseEvent<HTMLElement>) => {

    if (e.currentTarget === sideBarIconTab.current) {
        setShowSideNav(true);
    } else {
        setShowSideNav(false);
    }
  };

  useEffect(() => {
    setShowSideNav(false);
    pageStateTab.current?.click();
  }, []);

  return (
    <>
      <section className="relative flex md:sticky gap-10 py-0 m-0 min-w-[90%] text-white max-md:flex-col bg-[#13192F]">
        <div className="top-2 z-30">
          <div className="md:hidden bg-gray-800 py-1 md:border-b border-grey flex flex-nowrap overflow-x-auto">
            <button ref={sideBarIconTab} className="p-5 capitalize" onClick={changePageState}>
              <i className="fi fi-rr-bars-staggered pointer-events-none" />
            </button>
            <hr className="absolute bottom-0 duration-500" />
          </div>

          <div
            className={`min-w-[200px] h-[100vh] max-md:bg-gray-800 md:h-cover mt-2 md:sticky md:top-0 md:mt-0 overflow-y-auto p-6 md:pr-0 md:border-[#494848] md:border-r absolute max-md:top-[64px] max-md:w-[calc(100%+80px)] max-md:px-16 max-md:-ml-2 duration-500 max-w-[90%] left-[7%] ${
                !showSideNav ? "max-md:opacity-0 max-md:pointer-events-none" : "opacity-100 pointer-events-auto"
              }`}
          >
            <h1 className="text-xl text-dark-grey mb-3">Dashboard</h1>
            <hr className="border-[#494848] -ml-6 mb-8 mr-6" />

            <NavLink to="/" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-user" />
              Profile
            </NavLink>

            <NavLink to="/write" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-file-edit" />
              Create Graph
            </NavLink>

            <h1 className="text-xl text-dark-grey mb-3 mt-20">Settings</h1>
            <hr className="border-[#494848] -ml-6 mb-8 mr-6" />

            <NavLink to="/editProfile" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-user" />
              Edit Profile
            </NavLink>

            <NavLink to="/changePassword" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-lock" />
              Change Password
            </NavLink>

            <NavLink to="/pricingPage" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-dollar" />
              Manage subscription
            </NavLink>
          </div>
        </div>
        <div className="max-md:-mt-8 mt-5 w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SideNav;
