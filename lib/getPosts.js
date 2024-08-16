import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "public/locales/en/posts");
const announcementsDirectory = join(process.cwd(), "public/locales/en/announcements");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAnnouncementsSlugs() {
  return fs.readdirSync(announcementsDirectory);
}

export function getInfoBySlug(slug, dir) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getInfoBySlug(slug, postsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllAnnouncements() {
  const slugs = getAnnouncementsSlugs();
  const announcements = slugs
    .map((slug) => getInfoBySlug(slug, announcementsDirectory))
    // sort announcements by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return announcements;
}