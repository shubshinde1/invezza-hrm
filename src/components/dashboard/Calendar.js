import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { makeStyles } from "@mui/styles";
// import { TiArrowSortedUp } from "react-icons/ti";

// Custom styles
const useStyles = makeStyles({
  root: {
    "& .MuiPickersCalendarHeader-label": {
      fontFamily: "euclid",
      fontSize: 14,
      fontWeight: "bold",
    },
    "& .MuiPickersDay-root": {
      fontFamily: "euclid",
      fontSize: 12,
      fontWeight: "bold",
      borderRadius: 6,
    },
    "& :hover.MuiPickersDay-root": {
      // backgroundColor: "#f0f9ff",
      // color: "white",
    },
    "& :focus.Mui-selected": {
      backgroundColor: "#3C5EFE",
      color: "white",
    },
    "& .MuiPickersDay-today": {
      backgroundColor: "#3C5EFE",
      color: "white",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    "& :hover.MuiPickersDay-today": {
      backgroundColor: "#3C5EFE",
      color: "white",
    },
    "& .MuiPickersYear-yearButton": {
      borderRadius: 6,
    },
    "& .MuiPickersYear-yearButton ": {
      fontFamily: "euclid",
      fontSize: 14,
    },
    "& .MuiDayCalendar-weekDayLabel": {
      fontFamily: "euclid",
      fontSize: 13,
      fontWeight: "bold",
      // color: "black",
      borderRadius: 6,
      cursor: "pointer",
    },
    display: "block",
    width: "100%",
    fontFamily: "Euclid-medium",
  },
});

export default function Calendar() {
  const classes = useStyles();

  return (
    <div className="flex flex-col  sm:flex-row xl:flex-col justify-start items-start sm:items-stretch sm:justify-between xl:justify-normal ">
      <div className="w-full">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          className="dark:text-white "
        >
          <DateCalendar className={`${classes.root} dark:text-white `} />
        </LocalizationProvider>

        {/* <div class="flex items-center justify-center p-4 ">
          <div class="max-w-sm w-full">
            <div class=" ">
              <div class="flex items-center justify-between">
                <span
                  tabindex="0"
                  class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                >
                  October 2020
                </span>
                <div class="flex items-center">
                  <button
                    aria-label="calendar backward"
                    class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-left"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    aria-label="calendar forward"
                    class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler  icon-tabler-chevron-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between pt-12 overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Mo
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Tu
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            We
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Th
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Fr
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Sa
                          </p>
                        </div>
                      </th>
                      <th>
                        <div class="w-full flex justify-center">
                          <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Su
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            1
                          </p>
                        </div>
                      </td>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            2
                          </p>
                        </div>
                      </td>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            3
                          </p>
                        </div>
                      </td>
                      <td class="pt-6">
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            4
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            5
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            6
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            7
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="w-full h-full">
                          <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <a
                              role="link"
                              tabindex="0"
                              class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                            >
                              8
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            9
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            10
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            11
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            12
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            13
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            14
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            15
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            16
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            17
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            18
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            19
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            20
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            21
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            22
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            23
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            24
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100">
                            25
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            26
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            27
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            28
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            29
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                            30
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="sm:mr-5 sm:mt-4 xl:mt-2 w-full px-4 sm:w-1/2 xl:w-full">
        <div className="">
          <h2 className=" font-bold ">Upcoming Holidays</h2>
          <div className="mt-2 flex flex-col gap-3 ">
            <div className="flex flex-row items-center gap-5 p-2 rounded-md hover:bg-sky-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col relative items-center justify-start bg-sky-50 dark:bg-gray-800  rounded-md p-3   after:w-8  after:absolute after:h-1.5 after:bg-[#3C5EFE] after:-bottom-0 after:rounded-sm ">
                <h2 className="font-bold">Mar</h2>
                <h2>25</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold">Holi</h2>
                <h2>25 - March - 2024 (Monday)</h2>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5 p-2 rounded-md hover:bg-sky-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col relative items-center justify-start bg-sky-50 dark:bg-gray-800  rounded-md p-3 after:w-8  after:absolute after:h-1.5 after:bg-blue-200 dark:after:bg-gray-600 after:-bottom-0 after:rounded-sm">
                <h2 className="font-bold">Mar</h2>
                <h2>25</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold">Holi</h2>
                <h2>25 - March - 2024 (Monday)</h2>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5 p-2 rounded-md hover:bg-sky-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col relative items-center justify-start bg-sky-50 dark:bg-gray-800  rounded-md p-3 after:w-8  after:absolute after:h-1.5 after:bg-blue-200 dark:after:bg-gray-600 after:-bottom-0 after:rounded-sm">
                <h2 className="font-bold">Mar</h2>
                <h2>25</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold">Holi</h2>
                <h2>25 - March - 2024 (Monday)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
