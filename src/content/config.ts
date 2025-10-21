import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',  // 콘텐츠 컬렉션 타입 (정적 콘텐츠)
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['paper-review', 'personal', 'research', 'AI']),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    thumbnail: z.string().optional(),   // public/ 경로에 있는 이미지 파일 경로
    readingTime: z.number().optional(), // 글 예상 읽는 시간(분)
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog: blogCollection
};
