import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "../Context/Note/NoteState";

const Layout = () => {
  return (
    <>
      <NoteState>
        <Navbar />
        <Outlet />
      </NoteState>
    </>
  );
};

export default Layout;
