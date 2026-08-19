import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.swp.co.th/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.swp.co.th/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.swp.co.th/capabilities',
      lastModified: new Date(),
    },
    {
      url: 'https://www.swp.co.th/manufacturing',
      lastModified: new Date(),
    },
    {
      url: 'https://www.swp.co.th/brochure',
      lastModified: new Date(),
    },
    {
      url: 'https://www.swp.co.th/contact',
      lastModified: new Date(),
    },
  ];
}