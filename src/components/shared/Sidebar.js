import React, { useState, useEffect, useRef } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import logo from "../../assets/images/invezza-logo.png";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { HiMenuAlt1 } from "react-icons/hi";

const LinkClasses =
  "flex hover:bg-sky-50 hover:duration-500 p-3 mt-1.5 rounded-md euclid";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    }

    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Set initial mobile/desktop state
    window.addEventListener("resize", handleResize);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    if (isMobile) {
      setClickedItem(clickedItem === item ? null : item);
    }
  };

  const handleMouseEnter = (item) => {
    if (!isMobile) {
      setClickedItem(item);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setClickedItem(null);
    }
  };

  const handleToggleAndItemClick = (item) => {
    toggleSidebar();
    handleItemClick(item);
  };
  return (
    <div className="z-10">
      <button
        className="md:hidden fixed top-2 left-2 p-3 text-black bg-white rounded-md"
        onClick={toggleSidebar}
      >
        <HiMenuAlt1 className="text-2xl " />
      </button>
      <div
        ref={sidebarRef}
        className={`md:flex md:flex-col w-60 h-[98vh] md:h-screen ml-2 mt-2 md:m-0 md:rounded-none rounded-md absolute md:relative p-4 bg-white z-50 shadow-2xl md:shadow-none ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className=" flex flex-row justify-between items-center">
          <img src={logo} className="pr-16" alt="logo" />
          <TbLayoutSidebarLeftCollapseFilled
            className="text-2xl absolute flex md:hidden right-5 mt-5 hover:bg-sky-50 rounded-md"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex-1 mt-10 mb-2">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <React.Fragment key={item.key}>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <SidebarLink
                  item={item}
                  pathname={pathname}
                  onClick={handleToggleAndItemClick}
                />
                {clickedItem === item && item.subItems && (
                  <div className="md:absolute left-52 md:pl-6 top-0 md:w-60 ">
                    <div className=" bg-white shadow-md rounded-md p-1 border">
                      {item.subItems.map((subItem) => (
                        <SidebarLink
                          key={subItem.key}
                          item={subItem}
                          pathname={pathname}
                          onClick={toggleSidebar}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item, pathname, onClick }) {
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "euclid-bold bg-sky-50 after:w-1.5 after:bg-[#3C5EFE] after:rounded-full"
          : "",
        LinkClasses
      )}
      onClick={onClick}
    >
      <span className="text-xl my-auto">{item.icon}</span>
      <span className="ml-3 w-[90%]">{item.label}</span>
    </Link>
  );
}
