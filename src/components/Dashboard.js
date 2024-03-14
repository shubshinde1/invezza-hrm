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
            initial={{ originX: 0, x: -20 }}
            animate={{ originX: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" col-span-12 xl:col-span-9 bg-white p-4 rounded-md sticky"
          >
            <Greeting />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" col-span-12 xl:col-span-3  row-span-3 bg-white p-4 rounded-md sticky"
          >
            <Calendar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className=" col-span-12 xl:col-span-9   overflow-scroll scrollbar-hide"
          >
            <Bodycards />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
