import type { MetadataRoute } from 'next';

// SEO not implemented yet.
// Next.js requires a default export when this file exists in the app directory.
// To implement SEO in the future, replace with proper crawl rules.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}