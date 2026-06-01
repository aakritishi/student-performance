import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, onClose }) => {

  return (
    <>
      <div className="w-72 hidden md:flex h-auto flex-col bg-gray-200 p-5">
        <ul className="space-y-4">
          <li>
            <Link to="/home">Dashboard</Link>
          </li>

          <li>
            <Link to="/home/students">Students</Link>
          </li>

          <li>
            <Link to="/home/results">Results</Link>
          </li>

          <li>
            <Link to="/home/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-72 h-screen bg-gray-200 p-5 z-50 md:hidden">
            <button onClick={onClose} className="absolute top-4 right-4">
              <RxCross1 size={22} className="text-blue-600 font-bold" />
            </button>

            <div className="mt-4">
            </div>

            <ul className="space-y-4">
              <li>
                <Link to="/home">Dashboard</Link>
              </li>

              <li>
                <Link to="/home/students">Students</Link>
              </li>

              <li>
                <Link to="/home/results">Results</Link>
              </li>

              <li>
                <Link to="/home/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
