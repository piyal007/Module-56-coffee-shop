import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
