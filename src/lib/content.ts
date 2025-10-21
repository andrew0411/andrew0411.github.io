import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;  // blog 컬렉션의 엔트리 타입

// 모든 게시글 불러와 날짜 최신순 정렬 (draft 글은 제외)
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// 특정 카테고리에 해당하는 게시글만 반환 (최신순 정렬 적용)
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.category === category);
}

// 특정 태그가 포함된 게시글만 반환
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.tags.includes(tag));
}

// 전체 게시글의 고유 태그 목록 추출 (ABC 정렬)
export async function getUniqueTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap(post => post.data.tags);
  return [...new Set(tags)].sort();
}

// 특정 카테고리 내 태그 목록 추출
export async function getUniqueTagsInCategory(category: string): Promise<string[]> {
  const posts = await getPostsByCategory(category);
  const tags = posts.flatMap(post => post.data.tags);
  return [...new Set(tags)].sort();
}

// 배열 아이템을 페이지네이션하여 잘라내는 함수
export function paginate<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 6
) {
  const totalPages = Math.ceil(items.length / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages));

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end),
    current: currentPage,
    pages: totalPages,
    prev: currentPage > 1 ? currentPage - 1 : null,
    next: currentPage < totalPages ? currentPage + 1 : null
  };
}
