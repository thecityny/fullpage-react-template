import React from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";

/**
 * This component is an example of a secondary page that can have a dynamic pathname,
 * and dynamic page metadata. It can also reference the url parameter values within the component.
 */
export const ExamplePage = () => {
  const [searchParams] = useSearchParams();
  const customPath = searchParams.get("customPath");
  return (
    <PageLayout>
      <Helmet>
        {/* Custom page metadata (such as page title or description) goes here: */}
        <title>Page: {customPath}</title>
      </Helmet>
      <div>
        <div className="container">
          <h1 className="headline">Example Secondary Page</h1>
          <p className="deck">
            This page can have any dynamic url! Right now, it's found at{" "}
            <code>/{customPath}</code>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
