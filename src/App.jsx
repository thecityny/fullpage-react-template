import React from "react";
import { Footer, Header } from "./components/HeaderFooter";
import { SiteMetadata } from "./components/Helmet";
import { meta } from "./data/meta";

import "./styles/app.scss";

export const App = () => (
  <article>
    <SiteMetadata />
    <Header />
    <div>
      <div className="container">
        <h1 className="headline">{meta.headline}</h1>
        <div className="attribution">
          <p className="byline">
            By{" "}
            {meta.byline.map((author, i) => (
              <span key={i} className="author">
                <a href={author.url}>{author.name}</a>
                {i < meta.byline.length - 2
                  ? ", "
                  : i < meta.byline.length - 1
                  ? " and "
                  : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </article>
);
