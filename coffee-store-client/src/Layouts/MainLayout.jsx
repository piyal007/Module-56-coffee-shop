import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
