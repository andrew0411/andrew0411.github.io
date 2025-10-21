export const siteConfig = {
  title: "Jaehwan Lee's Blog",                   // 사이트 제목 (로고 겸용)
  description: 'AI, Research, and Personal Notes',  // 사이트 설명 (메타디스크립션 등)
  url: 'https://andrew0411.github.io',           // 사이트 배포 URL (astro.config.mjs의 site와 동일하게)
  author: 'Jaehwan Lee',                     // 사이트나 글의 기본 작성자명
  nav: [                                   // 상단 내비게이션 메뉴 항목
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Publication', href: '/publication' },
    { label: 'CV', href: '/cv' },
    { label: 'Search', href: '/search' }
  ]
};
