import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
