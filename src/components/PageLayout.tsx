import React, { useEffect } from "react";
import pym from "pym.js";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/social-icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/social-icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/social-icons/facebook.svg";

const Header = () => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-logo">
        <a href="https://thecity.nyc/" aria-label="THE CITY">
          <Logo />
        </a>
      </div>
      <div className="nav-title"></div>
      <div className="nav-links">
        <a href="https://checkout.fundjournalism.org/memberform?&org_id=thecity&campaign=7011U000000VXZIQA4">
          Donate
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    const pymParent = new pym.Parent(
      "donation-box",
      "https://projects.thecity.nyc/donation-form/",
      {}
    );
    /**
     * This is a meaningless call of a method from `pymParent` that does nothing,
     * just to avoid the "no unused variables" linting error.
     */
    pymParent.onMessage("", () => {});
  }, []);

  return (
    <footer className="footer">
      <div className="donation-box-container">
        <div id="donation-box" />
      </div>

      <div className="container">
        <div className="footer-credit">
          Made with ♥ in NYC by{" "}
          <a href="https://thecity.nyc/" aria-label="THE CITY">
            THE CITY
          </a>
        </div>
        <div className="footer-icons">
          <a
            className="twitter"
            aria-label="Twitter"
            href="https://twitter.com/intent/follow?screen_name=TheCityNY"
          >
            <TwitterIcon />
          </a>
          <a
            className="instagram"
            aria-label="Instagram"
            href="https://www.instagram.com/thecityny"
          >
            <InstagramIcon />
          </a>
          <a
            className="facebook"
            aria-label="Facebook"
            href="https://www.facebook.com/thecityny"
          >
            <FacebookIcon />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://www.thecity.nyc/about-us/">About</a>
          </li>
          <li>
            <a href="https://donorbox.org/nycdonate">Donate</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/team/">Team</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/funders/">Funders</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/ethics/">Ethics</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/republishing/">Republish</a>
          </li>
          <br />
          <li>
            <a href="https://www.thecity.nyc/contact/">Contact</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/privacy-policy/">Privacy Notice</a>
          </li>
        </ul>
        <div className="copyright">
          © {year}, THE CITY REPORT, INC. All Rights Reserved.{" "}
        </div>
      </div>
    </footer>
  );
};

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <article>
    <Header />
    {children}
    <Footer />
  </article>
);
