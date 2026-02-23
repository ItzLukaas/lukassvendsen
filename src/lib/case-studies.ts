import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies');

export type CaseStudyMeta = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  client?: string;
  slug: string;
};

export type CaseStudy = CaseStudyMeta & {
  body: string;
};

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '');
}

export async function getCaseStudies(): Promise<CaseStudyMeta[]> {
  let files: string[];
  try {
    files = await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }
  const mdFiles = files.filter((f) => f.endsWith('.md'));
  const all = await Promise.all(
    mdFiles.map(async (filename) => {
      const fullPath = path.join(CONTENT_DIR, filename);
      const raw = await fs.readFile(fullPath, 'utf-8');
      const { data } = matter(raw);
      return {
        title: (data.title as string) ?? getSlugFromFilename(filename),
        date: (data.date as string) ?? '',
        excerpt: (data.excerpt as string) ?? '',
        image: (data.image as string) ?? '',
        client: data.client as string | undefined,
        slug: getSlugFromFilename(filename),
      };
    })
  );
  return all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(raw);
    return {
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? '',
      excerpt: (data.excerpt as string) ?? '',
      image: (data.image as string) ?? '',
      client: data.client as string | undefined,
      slug,
      body: content.trim(),
    };
  } catch {
    return null;
  }
}
