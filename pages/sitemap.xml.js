// pages/sitemap.xml.js

//import { getSortedPostsData } from "../lib/posts";

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

function generateSiteMap() {
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
     
  </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  //const posts = getSortedPostsData();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
