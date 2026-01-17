import React, { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    if (word === "") {
      return;
    }
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <AlertContext.Provider value={{ capitalize, showAlert, alert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
