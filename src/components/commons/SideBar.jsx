import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdAnalytics } from "react-icons/md";
import { MdOnlinePrediction } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogOut } from "react-icons/io5";

const SideBar = ({ isOpen, onClose }) => {
  const [isStudentOpen, setIsStudentOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="w-64 hidden md:flex h-[92vh] flex-col justify-between bg-[#125887] text-white font-sans text-lg">
        <div>
          <ul className="space-y-2 text-left ml-6 mt-3">
            <li>
              <NavLink
                to="/home"
                end
                className={({ isActive }) =>
                  `flex gap-1 items-center w-full px-3 py-4 ${
                    isActive
                      ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                      : "hover:bg-[#04395e] hover:rounded-l-2xl"
                  }`
                }
              >
                <MdDashboard className="text-xl" /> Dashboard
              </NavLink>
            </li>

            <li>
              <button
                onClick={() => setIsStudentOpen(!isStudentOpen)}
                className="flex items-center justify-between w-full px-3 py-4 hover:bg-[#04395e] hover:rounded-l-2xl"
              >
                <div className="flex items-center gap-1">
                  <FaUsers className="text-xl" />
                  <span>Students</span>
                </div>
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
                      to="/home/editdeletestudent"
                      className={({ isActive }) =>
                        `block w-full pl-8 py-3 mb-3 ${
                          isActive
                            ? "bg-[#04395e] rounded-l-2xl"
                            : "hover:bg-[#04395e] hover:rounded-l-2xl"
                        }`
                      }
                      onClick={() => setIsStudentOpen(false)}
                    >
                      Edit/Delete Student
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/home/results"
                className={({ isActive }) =>
                  `flex items-center gap-1 w-full px-3 py-4 ${
                    isActive
                      ? "bg-[#04395e] rounded-l-2xl "
                      : "hover:bg-[#04395e] hover:rounded-l-2xl"
                  }`
                }
              >
                <CiStar className="text-xl font-bold" /> Results
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/home/analytics"
                className={({ isActive }) =>
                  `flex items-center gap-1 w-full px-3 py-4 ${
                    isActive
                      ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                      : "hover:bg-[#04395e] hover:rounded-l-2xl"
                  }`
                }
              >
                <MdAnalytics className="text-xl" /> Analytics
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/home/prediction"
                className={({ isActive }) =>
                  `flex items-center gap-1 w-full px-3 py-4 ${
                    isActive
                      ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                      : "hover:bg-[#04395e] hover:rounded-l-2xl"
                  }`
                }
              >
                <MdOnlinePrediction className="text-xl" /> Prediction
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-10 ml-6 mr-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-4 hover:bg-[#A30000] rounded-l-2xl transition"
          >
            <IoLogOut className="text-2xl" />
            Logout
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-72 h-screen bg-[#125887] z-50 md:hidden text-lg flex flex-col justify-between">
            <button onClick={onClose} className="absolute top-4 right-4">
              <RxCross1 size={24} className="text-white font-bold text-2xl" />
            </button>

            <div>
              <ul className="space-y-4 mt-14 ml-8 text-white">
                <li onClick={onClose}>
                  <NavLink
                    to="/home"
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-1 w-full px-3 py-4 ${
                        isActive
                          ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                  >
                    <MdDashboard />
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
                      <div className="flex items-center gap-1">
                        <FaUsers />
                        <span>Students</span>
                      </div>
                      {isStudentOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {isStudentOpen && (
                      <ul className="ml-2 mt-2 space-y-2">
                        <li>
                          <NavLink
                            onClick={onClose}
                            to="/home/addstudent"
                            className={({ isActive }) =>
                              `flex items-center gap-1 w-full pl-8 py-3 mb-3 ${
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
                            to="/home/editdeletestudent"
                            className={({ isActive }) =>
                              `block w-full pl-8 py-3 mb-3 ${
                                isActive
                                  ? "bg-[#04395e] rounded-l-2xl "
                                  : "hover:bg-[#04395e] hover:rounded-l-2xl"
                              }`
                            }
                          >
                            Edit/Delete Student
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
                      `flex items-center gap-1 w-full px-3 py-4 ${
                        isActive
                          ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                  >
                    <CiStar />
                    Results
                  </NavLink>
                </li>

                <li onClick={onClose}>
                  <NavLink
                    to="/home/analytics"
                    className={({ isActive }) =>
                      `flex items-center gap-1 w-full px-3 py-4 ${
                        isActive
                          ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                  >
                    <MdAnalytics />
                    Analytics
                  </NavLink>
                </li>

                <li onClick={onClose}>
                  <NavLink
                    to="/home/prediction"
                    className={({ isActive }) =>
                      `flex items-center gap-1 w-full px-3 py-4 ${
                        isActive
                          ? "bg-[#04395e] shadow-inner text-lg rounded-l-2xl"
                          : "hover:bg-[#04395e] hover:rounded-l-2xl"
                      }`
                    }
                  >
                    <MdOnlinePrediction /> Prediction
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="mb-6 ml-6">
              <button
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                className="flex items-center gap-2 w-full px-3 py-4 hover:[#A30000] rounded-l-2xl text-white transition"
              >
                <IoLogOut className="text-2xl" />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
