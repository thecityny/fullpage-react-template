import React from "react";
import { useSearchParams } from "react-router-dom";
import { ExamplePage } from "./pages/ExamplePage";
import { Homepage } from "./pages/Homepage";

import "./styles/app.scss";

export const App = () => {
  const [searchParams] = useSearchParams();
  return !!searchParams.get("customPath") ? <ExamplePage /> : <Homepage />;
};
