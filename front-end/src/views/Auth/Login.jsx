import React, { useState } from "react";
import "./login.css";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import { Navigate, useNavigate } from "react-router-dom";

export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin");
  const email1 = document.getElementById("email1");
  const email2 = document.getElementById("email2");
  const name = document.getElementById("name2");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  const changeAuthMode = () => {
    if (email1) {
      email1.value = "";
    }
    if (email2) {
      email2.value = "";
    }
    if (name) {
      name.value = "";
    }
    if (password1) {
      password1.value = "";
    }
    if (password2) {
      password2.value = "";
    }
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }; 
  // Get the history object
    const navigate = useNavigate();
  function redirectToDashboard() {
   
  
    // Redirect to the dashboard component
    navigate("/admin/dashboard");
  }

  if (authMode === "signin") {
    if (email1) {
      email1.value = "";
    }
    // if (email2) {
    //   email2.value = "";
    // }
    // if (name) {
    //   name.value = "";
    // }
    if (password1) {
      password1.value = "";
    }
    // if (password2) {
    //   password2.value = "";
    // }
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <center>
          <img src={require("assets/img/logo-black.png")} alt="Logo" />
        </center>
            <h3 className="titleClr text-center">Sign In</h3>
            
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary cursor-pointer" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              id="email1"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
              id="password1"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn subBtn" onClick={redirectToDashboard}>
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn googleBtn  me-2">
                <FaGoogle /> Sign in with Google
              </button>
              <button className="btn fbBtn">
                <FaFacebook /> Sign in with Facebook
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#" className="custom-gray-text">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
  if (email1) {
    email1.value = "";
  }
  if (email2) {
    email2.value = "";
  }
  if (name) {
    name.value = "";
  }
  if (password1) {
    password1.value = "";
  }
  if (password2) {
    password2.value = "";
  }
  return (
    

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <center>
          <img src={require("assets/img/logo-black.png")} alt="Logo" />
        </center>
          <h3 className="titleClr text-center">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary cursor-pointer" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
            id="name2"
              type="name "
              className="form-control mt-1"
              placeholder="Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            id="email2"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            id="password2"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3 ">
            <button type="submit" className="btn subBtn">
              Submit
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3 ">
            <button className="btn googleBtn me-2">
              <FaGoogle /> Sign up with Google
            </button>
            <button className="btn fbBtn">
              <FaFacebook /> Sign up with Facebook
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#" className="custom-gray-text">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
