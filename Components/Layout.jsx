import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "../Context/Note/NoteState";
import AlertContext from "../Context/Alert/AlertContext";
import Footer from "./Footer";
import Alert from "./Alert";

const Layout = () => {
  const alertContext = useContext(AlertContext);
  const {alert, capitalize} = alertContext;
  return (
    <>
      <div className="app-container">
        <NoteState>
          <Navbar />
          <div className="py-4"></div>
          <main className="main-content">
          <Alert alert={alert} capitalize={capitalize} />
          <div className="py-3"></div>
            <Outlet />
          </main>
          <Footer />
        </NoteState>
      </div>
    </>
  );
};

export default Layout;
