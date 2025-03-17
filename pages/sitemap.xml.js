// pages/sitemap.xml.js

import { getAllPosts } from "lib/getPosts";

const URL = "https://www.cboard.io";
const staticPages = [
  {
    url: `${URL}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `https://app.cboard.io`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${URL}/pricing`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${URL}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${URL}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  },
  {
    url: `${URL}/team`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${URL}/history`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${URL}/locations`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${URL}/terms-of-use`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${URL}/404`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs -->
      ${staticPages
      .map((page) => {
        return `
          <url>
            <loc>${page.url}</loc>
            <lastmod>${page.lastModified}</lastmod>
            <changefreq>${page.changeFrequency}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `;
      })
      .join("")}
      <!-- Add the dynamic URLs -->
      ${posts
      .map((post) => {
        return `
          <url>
            <loc>${`${URL}/blog/${post.slug}`}</loc>
            <lastmod>${post.date}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>
        `;
      })
      .join("")}
     
  </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // Get all the posts from the server
  const postsFromServer = getAllPosts();
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(postsFromServer);
  // Set the response header
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() { }
