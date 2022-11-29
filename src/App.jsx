import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { ExamplePage } from "./pages/ExamplePage";
import { Homepage } from "./pages/Homepage";

import "./styles/app.scss";

export const App = () => (
  <Router basename="/">
    <Routes>
      {/* The Routes component decides which component to show based on the current URL.*/}
      <Route path="/" element={<Homepage />} />
      <Route path="/page/:customPath" element={<ExamplePage />} />
    </Routes>
  </Router>
);
