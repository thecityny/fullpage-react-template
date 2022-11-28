import React from "react";
import { Header, Footer } from "./components/HeaderFooter";
import { Homepage } from "./pages/Homepage";

import "./styles/app.scss";

export const App = () => (
  <article>
    <Header />
    <Homepage />
    <Footer />
  </article>
);
