import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../Context/Alert/AlertContext";

const Signup = () => {
  const alertcontext = useContext(AlertContext);
  const { showAlert } = alertcontext;

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [passwordView, setPasswordView] = useState({
    type: "password",
    text: "Show",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const togglePasswordState = () => {
    setPasswordView((prev) => ({
      type: prev.type === "password" ? "text" : "password",
      text: prev.type === "password" ? "Hide" : "Show",
    }));
    setTimeout(() => {
      setPasswordView({ type: "password", text: "Show" });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      showAlert("Password does not match", "warning");
      return;
    }

    // console.log("Signup Data:", credentials);
    try {
      let response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const token = await response.json();
      setCredentials({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
      if (token.success) {
        navigate("/");
        localStorage.setItem("auth-token", token.token);
        showAlert("Your account has been created successfully", "success");
      }
      if (!token.success) {
        showAlert(token.error, "danger");
      }
    } catch (error) {
      console.log(error.message);
      // showAlert(error.message, "danger");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "420px" }}>
        <h3 className="text-center fw-bold mb-3 text-primary">
          Create Account
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              name="email"
              value={credentials.email}
              onChange={onChange}
              autoComplete="username"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <input
                type={passwordView.type}
                className="form-control rounded-start-3"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Create password"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="btn btn-primary rounded-end-3 fw-bold"
                onClick={togglePasswordState}
                disabled={credentials.password.length <= 0}
              >
                {passwordView.text}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              autoComplete="new-password"
              placeholder="Re-enter password"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
            disabled={
              credentials.password.length < 8 || credentials.email.length < 5
            }
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-muted">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary fw-semibold text-decoration-none"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
