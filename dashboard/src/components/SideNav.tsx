import { FC, useEffect, useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"; 

interface SideNavProps {}

const SideNav: FC<SideNavProps> = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[2];

  const [pageState, setPageState] = useState<string>(page);
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const activeTabLine = useRef<HTMLHRElement>(null);
  const sideBarIconTab = useRef<HTMLButtonElement>(null);
  const pageStateTab = useRef<HTMLButtonElement>(null);

  const changePageState = (e: React.MouseEvent<HTMLElement>) => {
    const targetText = (e.target as HTMLAnchorElement).innerText;

    const { offsetWidth, offsetLeft } = e.currentTarget;

    if (activeTabLine.current) {
      activeTabLine.current.style.width = offsetWidth + "px";
      activeTabLine.current.style.left = offsetLeft + "px";
    }

    if (e.currentTarget === sideBarIconTab.current) {
        setShowSideNav(true);
    } else {
        setShowSideNav(false);
    }

    setPageState(targetText);
  };

  useEffect(() => {
    setShowSideNav(false);
    pageStateTab.current?.click();
  }, [pageState]);

  return (
    <>
      <section className="relative flex gap-10 py-0 m-0 min-w-full text-white max-md:flex-col bg-[#13192F]">
        <div className="sticky top-2 z-30">
          <div className="md:hidden bg-gray-800 py-1 md:border-b border-grey flex flex-nowrap overflow-x-auto">
            <button ref={sideBarIconTab} className="p-5 capitalize" onClick={changePageState}>
              <i className="fi fi-rr-bars-staggered pointer-events-none" />
            </button>
            <button ref={pageStateTab} className="p-5 capitalize" onClick={changePageState}>
              {pageState}
            </button>
            <hr ref={activeTabLine} className="absolute bottom-0 duration-500" />
          </div>

          <div
            className={`min-w-[200px] h-[100vh] max-md:bg-gray-800 md:h-cover mt-2 md:sticky overflow-y-auto p-6 md:pr-0 md:border-[#494848] md:border-r absolute max-md:top-[64px] max-md:w-[calc(100%+80px)] max-md:px-16 max-md:-ml-7 duration-500 max-w-[90%] left-[7%] ${
                !showSideNav ? "max-md:opacity-0 max-md:pointer-events-none" : "opacity-100 pointer-events-auto"
              }`}
          >
            <h1 className="text-xl text-dark-grey mb-3">Dashboard</h1>
            <hr className="border-[#494848] -ml-6 mb-8 mr-6" />

            <NavLink to="/" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-test" />
              Test Prompts
            </NavLink>

            <NavLink to="/" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-bell" />
              Notification
            </NavLink>

            <NavLink to="/" onClick={(e) => changePageState(e)} className="sidebar-link">
              <i className="fi fi-rr-file-edit" />
              Write
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
