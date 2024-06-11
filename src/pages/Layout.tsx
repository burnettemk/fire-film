import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import MarkedPageSelector from "../components/MarkedPageSelector";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <MarkedPageSelector />
    </>
  );
};

export default Layout;
