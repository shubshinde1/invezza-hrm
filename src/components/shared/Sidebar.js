import React, { useState, useEffect, useRef } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import logo from "../../assets/images/invezza-logo.png";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";

const LinkClasses =
  "flex hover:bg-sky-50 hover:duration-500 p-3 mt-1.5 rounded-md euclid";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // function handleClickOutside(event) {
    //   if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //     setIsSidebarOpen(false);
    //   }
    // }

    // function handleEscapeKey(event) {
    //   if (event.key === "Escape") {
    //     setIsSidebarOpen(false);
    //   }
    // }

    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Set initial mobile/desktop state
    window.addEventListener("resize", handleResize);

    // document.addEventListener("mousedown", handleClickOutside);
    // document.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("resize", handleResize);
      // document.removeEventListener("mousedown", handleClickOutside);
      // document.removeEventListener("keydown", handleEscapeKey);
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

  const handleClick = () => {
    handleToggleAndItemClick();
    if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
      setRotate(!rotate); // Set rotate state only on mobile screen
    }
  };

  const [rotate, setRotate] = React.useState(true);
  return (
    <div className="z-10">
      <button
        className="md:hidden fixed top-2 left-2 p-3 text-black bg-white rounded-md"
        onClick={() => {
          toggleSidebar();
          setRotate(!rotate);
        }}
      >
        <HiMenuAlt1 className="text-2xl " />
      </button>
      <div
        ref={sidebarRef}
        className={`md:flex md:flex-col w-52 h-[98vh] md:h-screen ml-2 mt-2 md:m-0 md:rounded-none rounded-md absolute md:relative p-4 bg-white z-50 shadow-2xl md:shadow-none ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className=" flex flex-row justify-between items-center">
          <img src={logo} className="pr-16" alt="logo" />
          <TbLayoutSidebarLeftCollapseFilled
            className="text-2xl absolute flex md:hidden right-5 mt-5 hover:bg-sky-50 rounded-md"
            onClick={() => {
              toggleSidebar();
              setRotate(!rotate);
            }}
          />
        </div>
        <div className="flex-1 mt-10 mb-2">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <React.Fragment key={item.key}>
              <div
                className="relative gred5"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: -20 }}
                  transition={
                    // { type: "tween", duration: 5 },
                    { type: "spring", bounce: 0.7 }
                  }
                  className="hidden md:block"
                >
                  <SidebarLink
                    item={item}
                    pathname={pathname}
                    // onClick={handleToggleAndItemClick}
                    onClick={() => {
                      handleToggleAndItemClick();
                      setRotate(!rotate);
                    }}
                  />
                </motion.div>
                <motion.div
                  animate={{ x: rotate ? -20 : 0 }}
                  initial={{ x: rotate ? -20 : 0 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 10 }}
                  className="md:hidden"
                >
                  <SidebarLink
                    item={item}
                    pathname={pathname}
                    onClick={handleClick}
                    // onClick={() => {
                    //   handleToggleAndItemClick();
                    //   setRotate(rotate);
                    // }}
                  />
                </motion.div>
                {clickedItem === item && item.subItems && (
                  <div className="md:absolute left-44 md:pl-6 top-0 md:w-60 ">
                    <motion.div
                      className=" bg-white shadow-md rounded-md p-1 border"
                      animate={{ x: 0 }}
                      initial={{ x: -20 }}
                      transition={{ type: "spring", bounce: 0.7 }}
                    >
                      {item.subItems.map((subItem) => (
                        <SidebarLink
                          key={subItem.key}
                          item={subItem}
                          pathname={pathname}
                          onClick={toggleSidebar}
                        />
                      ))}
                    </motion.div>
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
  // Check if pathname exactly matches item.path or if it includes item.path followed by a '/'
  const isActive =
    pathname === item.path || pathname.startsWith(item.path + "/");

  return (
    <Link
      to={item.path}
      className={classNames(
        isActive
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
