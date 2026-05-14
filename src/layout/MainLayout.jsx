import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import SideBar from "../components/commons/SideBar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuItemClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1">
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
