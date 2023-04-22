import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aviav.me',
      lastModified: new Date(),
    },
    {
      url: 'https://www.aviav.me/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.aviav.me/blog',
      lastModified: new Date(),
    },
  ];
}
