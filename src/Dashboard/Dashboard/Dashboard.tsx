import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user }: any = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="bg-gray-100">
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:border-gray-700">
          <div>
            <div className="fixed flex flex-col  left-0 w-14 hover:w-64 md:w-64 shadow-2xl h-full text-primary transition-all duration-300 border-none z-10 sidebar">
              <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center ">
                      <img
                        src="https://i.ibb.co/MSsVHm1/logo.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm tracking-wide text-Primary font-bold uppercase">
                        Main
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Board
                      </span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                        New
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Messages
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Notifications
                      </span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                        1.2k
                      </span>
                    </a>
                  </li>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center mt-5 h-8">
                      <div className="text-sm tracking-wide text-Primary font-bold uppercase">
                        Settings
                      </div>
                    </div>
                  </li>
                  <Link to={"/dashboard/test"}>
                    <li>
                      <Link
                        to='/dashboard/profile'
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Profile
                        </span>
                      </Link>
                    </li>
                  </Link>
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Billing
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rrelative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Settings
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                  Copyright @2021 Syntax Terminators
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="sticky top-0 h-16 border-b bg-white dark:border-gray-700 lg:py-2.5 hidden lg:block">
            <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
              <h5
                hidden
                className="text-2xl font-medium text-gray-600 lg:block "
              >
                Dashboard
              </h5>
              <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-6 pt-6 2xl:container">
            <div className="flex h-[80vh] items-center justify-center rounded-xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
