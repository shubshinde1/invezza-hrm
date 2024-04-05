import React, { useState } from "react";
import empdata from "./leaveData.json";
import { useParams } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import NotFound from "../../assets/images/norecordfound.svg";

const data = empdata;

export default function TimeSheets() {
  const { empid } = useParams();
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // State to track current date

  // Filter the data array to find the matching employee data
  const employeeData = data.filter((emp) => emp.empid === empid);

  console.log(employeeData);

  // Check if there's any matching employee data
  if (employeeData.length === 0) {
    return <div>No data found for employee with ID {empid}</div>;
  }

  // Access tasks data for the current date
  const currentTasks = employeeData
    .map((emp) => emp.timesheet[currentDate])
    .filter(Boolean)[0]; // Get tasks for current date

  // Function to handle clicking the previous date button
  const handlePrevDate = () => {
    const prevDate = new Date(
      new Date(currentDate).getTime() - 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0]; // Get previous date
    setCurrentDate(prevDate);
  };

  // Function to handle clicking the next date button
  const handleNextDate = () => {
    const nextDate = new Date(
      new Date(currentDate).getTime() + 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0]; // Get next date
    setCurrentDate(nextDate);
  };

  // Function to handle clicking the "Today" button
  const handleToday = () => {
    setCurrentDate(new Date().toISOString().split("T")[0]); // Set current date to today's date
  };

  // Render tasks for the current date or "No data for today" if no tasks found
  return (
    <div className="rounded-md bg-white dark:bg-neutral-950 dark:text-white p-2 flex flex-col gap-2 mb-10">
      <div className="flex gap-2 ">
        <div className="bg-sky-50 dark:bg-neutral-900 py-2 px-4 rounded-md">
          <span>{currentDate}</span>
        </div>
        <Tooltip title="Previous Day" placement="top" arrow>
          <button
            onClick={handlePrevDate}
            className="bg-sky-50 dark:bg-neutral-900 p-2 rounded-md"
          >
            <FaCaretLeft fontSize={20} />
          </button>
        </Tooltip>
        <Tooltip title="Next Day" placement="top" arrow>
          <button
            onClick={handleNextDate}
            className="bg-sky-50 dark:bg-neutral-900 p-2 rounded-md"
          >
            <FaCaretRight fontSize={20} />
          </button>
        </Tooltip>
        <button
          onClick={handleToday}
          className="bg-sky-50 dark:bg-neutral-900 py-2 px-4 rounded-md"
        >
          Today
        </button>{" "}
        {/* Button to go back to today's date */}
      </div>
      <div className="">
        {currentTasks ? (
          <div className=" flex flex-col gap-2 overflow-scroll h-[78vh]  2xl:h-[70vh] scrollbar-hide">
            {Object.values(currentTasks).map((task, index) => (
              <div
                key={index}
                className="bg-sky-50 dark:bg-neutral-900 p-4 rounded-md"
              >
                <p>Task {task.task}</p>
                <p>Task Name: {task.taskname}</p>
                <p>Project Name: {task.projectname}</p>
                <p>Subtask: {task.subtask}</p>
                <p>Description: {task.description}</p>
                <p>Duration: {task.duration}</p>
                <p>Remark: {task.remark}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center bg-sky-50 dark:bg-neutral-900 rounded-md p-5">
            <div className="md:w-1/2 flex justify-center flex-col items-center gap-4">
              <h2 className="text-lg font-bold">
                No Records for {currentDate}
              </h2>
              <div className="flex items-center gap-3">
                <h2>Try For</h2>
                <button
                  onClick={handleToday}
                  className="bg-sky-800 text-white font-bold py-2 px-4 rounded-md "
                >
                  Today
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={NotFound} className="w-1/2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
