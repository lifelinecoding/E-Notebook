import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "15px", }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show py-3`}
          role="alert"
        >
          <strong>{props.capitalize(props.alert.type) + ": "}</strong>{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
