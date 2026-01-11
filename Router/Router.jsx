import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
// import Layout from "../Components/Layout.jsx";
import App from "../src/App.jsx";

const Router = createBrowserRouter([
  // Define your routes here
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
