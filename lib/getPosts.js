import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const defaultPostsDir = join(process.cwd(), "public/locales/en/posts");
const defaultAnnounDir = join(process.cwd(), "public/locales/en/announcements");

export function getPostSlugs() {
  return fs.readdirSync(defaultPostsDir);
}

export function getAnnouncementsSlugs() {
  return fs.readdirSync(defaultAnnounDir);
}

export function getInfoBySlug(slug, dir = defaultPostsDir) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content };
}

export function getAllPosts(directory = defaultPostsDir) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getInfoBySlug(slug, directory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllAnnouncements() {
  const slugs = getAnnouncementsSlugs();
  const announcements = slugs
    .map((slug) => getInfoBySlug(slug, defaultAnnounDir))
    // sort announcements by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return announcements;
}