import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image, type = 'website', schema }) {
  const siteName = 'Loyalist Digital';
  const defaultTitle = 'Loyalist | The Premium Digital Loyalty Platform for Local Businesses';
  const defaultDescription = 'Increase customer retention and revenue with a fully automated, native Apple Wallet & Google Pay loyalty program built for high-growth local businesses. No apps to download.';
  const defaultImage = 'https://loyalist.digital/assets/hero_dashboard.png'; // Make sure this is an absolute URL
  const defaultUrl = 'https://loyalist.digital';

  const seo = {
    title: title ? `${title} | ${siteName}` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url ? `${defaultUrl}${url}` : defaultUrl,
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
