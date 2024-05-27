import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/Auth/Login";
import "./views/index.css";
import Home from "views/client/Home";
import PostDetails from "views/Posts/PostDetails";
import InternDetails from "views/interns/InternshipDetails";
import ForgotPassword from "views/Auth/ForgotPassword";
import store from "./Redux/store";
import { Provider } from "react-redux";
import ApplicationForm from "views/client/ApplicationForm ";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<ApplicationForm />} />
        {/* <Route path="/reset_password" element={<ForgotPassword />} /> */}
        <Route
          path="/post/Postdetails/:postid/:imageSrc/:title/:description/:requirement?/:deadline/:company"
          element={<PostDetails />}
        />
        <Route
          path="/intern/Postdetails/:internid/:imageSrc/:title/:description/:requirement?/:deadline/:company"
          element={<InternDetails />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
