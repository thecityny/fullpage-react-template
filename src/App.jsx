import React from "react";
import { Footer, Header } from "./components/HeaderFooter";
import { SiteMetadata } from "./components/Helmet";

import "./styles/app.scss";

export const App = () => (
  <article>
    <SiteMetadata />
    <Header />
    <div></div>
    <Footer />
  </article>
);
