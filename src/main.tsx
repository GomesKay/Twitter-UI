import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { RouterProvider } from "react-router-dom";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
