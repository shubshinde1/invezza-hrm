import React from "react";
import { IoNotifications } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { FaPowerOff } from "react-icons/fa";


export default function Header() {
  const location = useLocation();

  const getTitle = () => {
    const currentPath = location.pathname;
    const currentLink = DASHBOARD_SIDEBAR_LINKS.find(
      (link) => link.path === currentPath
    );
    return currentLink ? currentLink.label : "Tab Title";
  };

  return (
    <div className="mt-2 mb-2 mr-2 ml-16 md:m-2 px-4 bg-white h-12 md:h-16 rounded-md flex justify-between items-center">
      <div className="font-bold">{getTitle()}</div>
      <div className="">
        <div className="flex items-center gap-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className=" open &&  'bg-red-700' , hover:bg-[#EBE9F6] duration-500 p-2 rounded-md cursor-pointer focus:outline-none">
                  <FaPowerOff fontSize={20} color="red" />
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
                  <Popover.Panel className="absolute md:-right-2 -right-20 z-10 m-2.5 w-80 mt-5">
                    <div className="bg-white rounded-md shadow-lg p-3">
                      this is the panel
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className=" open &&  'bg-red-700' , hover:bg-[#EBE9F6] duration-500 p-2 rounded-md cursor-pointer focus:outline-none">
                  <RiSettingsFill fontSize={20} />
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
                  <Popover.Panel className="absolute md:-right-2 -right-10 z-10 m-2.5 w-80 mt-5">
                    <div className="bg-white rounded-md shadow-lg p-3">
                      this is the panel
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className=" open &&  'bg-red-700' , hover:bg-[#EBE9F6] duration-500 p-2 rounded-md cursor-pointer focus:outline-none">
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
                  <Popover.Panel className="absolute md:-right-2 -right-10 z-10 m-2.5 w-80 mt-5">
                    <div className="bg-white rounded-md shadow-lg p-3">
                      this is the panel
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
