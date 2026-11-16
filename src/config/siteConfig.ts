export const siteConfig = {
  title: 'Jaehwan Lee',                          // 사이트 제목
  description: 'Jaehwan Lee, Ph.D. student in Industrial and Systems Engineering at UW–Madison. Research, publications, CV, and notes.',
  url: 'https://andrew0411.github.io',           // 사이트 배포 URL (astro.config.mjs의 site와 동일하게)
  author: 'Jaehwan Lee',                     // 사이트나 글의 기본 작성자명
  nav: [                                   // 상단 내비게이션 메뉴 항목
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Publications', href: '/publication' },
    { label: 'CV', href: '/cv' },
    { label: 'Search', href: '/search' }
  ]
};
