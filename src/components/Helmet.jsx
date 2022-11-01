import React from "react";
import Helmet from "react-helmet";
import { meta } from "../data/meta";

export const SiteMetadata = () => {
  const absoluteUrl = window.location.href;
  return (
    <Helmet>
      <html lang="en" />
      <title>{meta.seo_headline}</title>
      <meta charset="utf-8" />
      <meta name="description" content={meta.seo_description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={absoluteUrl} />
      <meta property="og:title" content={meta.social_headline} />
      <meta property="og:description" content={meta.social_description} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:image" content={meta.social_image} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:locale" content={meta.locale} />

      <meta property="twitter:title" content={meta.social_headline} />
      <meta property="twitter:description" content={meta.social_description} />
      <meta property="twitter:url" content={absoluteUrl} />
      <meta property="twitter:image" content={meta.social_image} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    "headline": "{{ meta.seo_headline }}",
    "image": {
      "@type": "ImageObject",
      "contentUrl": "{% staticabsolute meta.social_image %}",
      "url": "{% staticabsolute meta.social_image %}",
      "representativeOfPage": true
    },
    "dateCreated": "{{ meta.pub_date|date("yyyy-MM-dd HH:mm:ss") }}",
    "datePublished": "{{ meta.pub_date|date("yyyy-MM-dd HH:mm:ss") }}",
    {% if meta.update_date %}
    "dateModified": "{{ meta.update_date|date("yyyy-MM-dd HH:mm:ss") }}",
    {% endif -%}
    "mainEntityOfPage": "{{ page.absoluteUrl }}",
    "description": "{{ meta.seo_description }}",
    "publisher": {
      "@type": "Organization",
      "name": "{{ meta.site_name }}",
      "url": "{{ DOMAIN }}",
    },
    "author": [{% for author in meta.byline %}{
      {% if author.name %}"name": "{{ author.name }}",{% endif %}
      {% if author.url %}"url": "{{ author.url }}",{% endif %}
      "@type": "Person"
    }{% if not loop.last %},{% endif %}{% endfor %}]
  }
  </script> */}
    </Helmet>
  );
};
