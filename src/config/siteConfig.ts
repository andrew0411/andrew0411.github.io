export const siteConfig = {
  title: 'Jaehwan Lee',                          // 사이트 제목
  description: 'Jaehwan Lee, Ph.D. student in Industrial and Systems Engineering at UW–Madison. Research, publications, CV, and notes.',
  url: 'https://andrew0411.github.io',           // 사이트 배포 URL (astro.config.mjs의 site와 동일하게)
  author: 'Jaehwan Lee',                     // 사이트나 글의 기본 작성자명
  // false: 블로그 글을 빌드하지 않음 (글 페이지·태그·분류·RSS·홈 Recent writing·Blog 메뉴 모두 숨김).
  // 글 파일(src/content/blog)은 그대로 두며, true로 바꾸면 다시 공개된다.
  blogEnabled: false,
  nav: [                                   // 상단 내비게이션 메뉴 항목
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/blog', blog: true },
    { label: 'Publications', href: '/publication' },
    { label: 'CV', href: '/cv' },
    { label: 'Search', href: '/search' }
  ]
};
