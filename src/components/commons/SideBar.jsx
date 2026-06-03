import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const SideBar = ({ isOpen, onClose }) => {
  const [isStudentOpen, setIsStudentOpen] = useState(false);

  return (
    <>
      <div className="w-64 hidden md:flex h-auto flex-col bg-[#125887] text-white font-sans text-lg">
        <ul className="space-y-2 text-left ml-6 mt-3">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block w-full px-3 py-4 ${
                  isActive
                    ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                    : "hover:bg-[#04395e] hover:rounded-l-2xl"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <button
              onClick={() => setIsStudentOpen(!isStudentOpen)}
              className="flex items-center justify-between w-full px-3 py-4 hover:bg-[#04395e] hover:rounded-l-2xl"
            >
              <span>Students</span>
              {isStudentOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            {isStudentOpen && (
              <ul className="">
                <li>
                  <NavLink
                    to="/home/addstudent"
                    className={({ isActive }) =>
                      `block w-full pl-8 py-3 mb-3 ${
                        isActive
                          ? "bg-[#04395e] rounded-l-2xl "
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                    onClick={() => setIsStudentOpen(false)}
                  >
                    Add Student
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/editstudent"
                    className={({ isActive }) =>
                      `block w-full pl-8 py-3 mb-3 ${
                        isActive
                          ? "bg-[#04395e] rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                    onClick={() => setIsStudentOpen(false)}
                  >
                    Edit Student
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/deletestudent"
                    className={({ isActive }) =>
                      `block w-full pl-8 py-3 mb-2 ${
                        isActive
                          ? "bg-[#04395e] rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                    onClick={() => setIsStudentOpen(false)}
                  >
                    Delete Student
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/home/results"
              className={({ isActive }) =>
                `block w-full px-3 py-4 ${
                  isActive
                    ? "bg-[#04395e] rounded-l-2xl "
                    : "hover:bg-[#04395e] hover:rounded-l-2xl"
                }`
              }
            >
              Results
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/analytics"
              className={({ isActive }) =>
                `block w-full px-3 py-4 ${
                  isActive
                    ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                    : "hover:bg-[#04395e] hover:rounded-l-2xl"
                }`
              }
            >
              Analytics
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-72 h-screen bg-[#125887] z-50 md:hidden text-lg">
            <button onClick={onClose} className="absolute top-4 right-4">
              <RxCross1 size={24} className="text-white font-bold text-2xl" />
            </button>

            <ul className="space-y-4 mt-14 ml-8 text-white">
              <li onClick={onClose}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block w-full px-3 py-4 ${
                      isActive
                        ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                        : "hover:bg-[#04395e] hover:rounded-l-2xl"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <button
                  onClick={() => {
                    setIsStudentOpen(!isStudentOpen);
                  }}
                  className="w-full px-3 py-4 text-lg hover:bg-[#04395e] hover:rounded-l-2xl"
                >
                  <div className="flex items-center gap-2">
                    <span>Students</span>{" "}
                    {isStudentOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  {isStudentOpen && (
                    <ul className="ml-2 mt-2 space-y-2">
                      <li>
                        <NavLink
                          onClick={onClose}
                          to="/home/addstudent"
                          className={({ isActive }) =>
                            `block w-full pl-8 py-3 mb-3 ${
                              isActive
                                ? "bg-[#04395e] rounded-l-2xl "
                                : "hover:bg-[#04395e] hover:rounded-l-2xl"
                            }`
                          }
                        >
                          Add Student
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={onClose}
                          to="/home/editstudent"
                          className={({ isActive }) =>
                            `block w-full pl-8 py-3 mb-3 ${
                              isActive
                                ? "bg-[#04395e] rounded-l-2xl "
                                : "hover:bg-[#04395e] hover:rounded-l-2xl"
                            }`
                          }
                        >
                          Edit Student
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={onClose}
                          to="/home/deletestudent"
                          className={({ isActive }) =>
                            `block w-full pl-8 py-3 mb-3 ${
                              isActive
                                ? "bg-[#04395e] rounded-l-2xl "
                                : "hover:bg-[#04395e] hover:rounded-l-2xl"
                            }`
                          }
                        >
                          Delete Student
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </button>
              </li>

              <li onClick={onClose}>
                <NavLink
                  to="/home/results"
                  className={({ isActive }) =>
                    `block w-full px-3 py-4 ${
                      isActive
                        ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                        : "hover:bg-[#04395e] hover:rounded-l-2xl"
                    }`
                  }
                >
                  Results
                </NavLink>
              </li>

              <li onClick={onClose}>
                <NavLink
                  to="/home/analytics"
                  className={({ isActive }) =>
                    `block w-full px-3 py-4 ${
                      isActive
                        ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                        : "hover:bg-[#04395e] hover:rounded-l-2xl"
                    }`
                  }
                >
                  Analytics
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
