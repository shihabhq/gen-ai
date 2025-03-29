import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="min-h-screen relative flex overflow-hidden">
      <Dashboard />

      <div className="flex-grow w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
