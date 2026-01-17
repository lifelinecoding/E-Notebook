import React from "react";
import Layout from "../Components/Layout";
import AlertState from "../Context/Alert/AlertState";

function App() {
  return (
    <>
      <AlertState>
        <Layout />
      </AlertState>
    </>
  );
}

export default App;
