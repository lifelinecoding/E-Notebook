import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [passwordView, setpasswordView] = useState({
    type: "password",
    text: "Show",
  });

  const togglePasswordState = () => {
    if (passwordView.text === "Hide") {
      setpasswordView({ type: "password", text: "Show" });
    } else {
      setpasswordView({ type: "text", text: "Hide" });
    }

    setTimeout(() => {
      setpasswordView({ type: "password", text: "Show" });
    }, 1000);
  };

  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Login logic will go here (API call)

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const token = await response.json();
    console.log(token);

    localStorage.setItem("auth-token", token.token);

    if (token.success) {
      navigate("/");
    }

    // console.log("Email:", credentials.email);
    // console.log("Password:", credentials.password);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group">
              <input
                type={passwordView.type}
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                className="btn btn-primary fw-bold"
                onClick={togglePasswordState}
              >
                {passwordView.text}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
