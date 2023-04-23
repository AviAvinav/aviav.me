import { MetadataRoute } from "next";

const sitemap: () => MetadataRoute.Sitemap = () => {
  return [
    {
      url: "https://www.aviav.me",
      lastModified: new Date(),
    },
    {
      url: "https://www.aviav.me/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.aviav.me/blog",
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
