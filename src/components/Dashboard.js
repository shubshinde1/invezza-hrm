import React from "react";
import Greeting from "./dashboard/Greeting";
import Calendar from "./dashboard/Calendar";
import Bodycards from "./dashboard/Bodycards";
import { motion } from "framer-motion";

export default function dashboard() {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-12 grid-rows-3 gap-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" col-span-12 xl:col-span-9 bg-white p-4 rounded-md sticky"
          >
            <Greeting />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className=" col-span-12 xl:col-span-3 pb-4 md:pb-0 row-span-3 bg-white rounded-md sticky"
          >
            <Calendar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" col-span-12 xl:col-span-9   overflow-scroll scrollbar-hide"
          >
            <Bodycards />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
