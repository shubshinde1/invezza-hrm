import React from "react";
import { IoNotifications, IoPerson } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
// import { FaPowerOff } from "react-icons/fa";
import classNames from "classnames";
import LogoutMenuItem from "./LogoutMenuItem"; // Import the LogoutMenuItem component

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    const currentPath = location.pathname;
    const currentLink = DASHBOARD_SIDEBAR_LINKS.find(
      (link) => link.path === currentPath
    );
    return currentLink ? currentLink.label : "Tab Title";
  };

  return (
    <div className=" mt-2 mb-2 mr-2 ml-16 md:m-2 pl-2 bg-white h-12 md:h-16 rounded-md flex justify-between items-center">
      <div className="font-bold">{getTitle()}</div>
      <div className="">
        <div className="flex items-center gap-3 text-sm">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open && "clor",
                    "hover:bg-[#DAF4FF] duration-500 p-2 rounded-md cursor-pointer focus:outline-none"
                  )}
                >
                  <IoNotifications fontSize={20} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute md:-right-2 right-0 z-10 md:m-2.5 md:w-52 w-[50vw] md:mt-5 mt-4">
                    <div className="bg-white rounded-md shadow-lg p-3">
                      this is the panel
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex align-middle">
                <div
                  className="h-10 w-10 rounded-md bg-top bg-no-repeat"
                  style={{
                    backgroundImage: `url(${require("../../assets/images/profilepic.png")})`,
                  }}
                >
                  <span className="sr-only">Shubham Shinde</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute -right-5 z-10 m-2.5 w-52 md:mt-5 mt-4 bg-white rounded-md shadow-lg p-2">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "clor cursor-pointer rounded-md",
                        "px-3 py-2 flex"
                      )}
                      onClick={() => navigate("/myprofile")}
                    >
                      <IoPerson fontSize={20} />
                      <span className="ml-3">View Profile</span>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "clor cursor-pointer rounded-md",
                        "px-3 py-2 flex"
                      )}
                      onClick={() => navigate("/myprofile")}
                    >
                      <RiSettingsFill fontSize={20} />
                      <span className="ml-3">Settings</span>
                    </div>
                  )}
                </Menu.Item>
                {/* <Menu.Item> */}
                <LogoutMenuItem />
                {/* </Menu.Item> */}
              </Menu.Items>
            </Transition>
          </Menu>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
