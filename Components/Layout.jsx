import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "../Context/Note/NoteState";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="app-container">
        <NoteState>
          <Navbar />
          <div className="py-4"></div>
          <main className="main-content">
            <Outlet />
          </main>
          <Footer />
        </NoteState>
      </div>
    </>
  );
};

export default Layout;
