# Progress

## 2026-11-16

- 블로그 개편 계획: legacy 삭제 → CV·About 최신화 → 디자인 변경
- Phase 1: `C:\Users\USER\PycharmProjects\andrew0411.github.io-legacy` 삭제 승인 (원격 `andrew0411/minimal-mistakes`에 전부 push 확인). 삭제는 대표님 직접 실행, 미완료 상태로 확인됨
- Phase 2: `src/data/profile.ts` 단일 데이터로 About·Publication·CV 재구성, HTML CV + 인쇄용 스타일로 `public/cv.pdf` 생성 (`npm run cv:pdf`). 박사과정 CV 형식으로 축약, qual(2026-09)·INFORMS 2026 invited talk·DOE FIRE 추가
- 검증 정책 L1–L3 신설 (AGENTS.md)
- Phase 2 검증(L2): `npm run cv:pdf` 빌드 통과, PDF 3쪽 육안 확인, About·Publication·CV를 1280px·375px, light·dark에서 확인. 375px 가로 넘침은 기존 Navbar 원인(Phase 3에서 처리)
- CV PDF 사본: `R:\phd-hub\10_career\cv\2026-11-16_CV.pdf`
- 커밋: `ffb0694` (norm-induced distances 글), `fcc61f1` (Phase 2). push 안 함
- Phase 1 완료: legacy 폴더 삭제 (push 안 된 커밋 0개 재확인 후)
- 다음: Phase 3 디자인 변경 (L3)

## 2026-11-16 (Phase 3)

- 시안 3종(Signal / Lab notebook / Quiet academic) 중 C "Quiet academic" 선택, 사진은 컬러 유지
- 공통: Newsreader + Pretendard, 흰 바탕·진홍 링크(`#9B0000`), 720px 단일 컬럼, 다크 모드 유지(head 초기화로 깜빡임 제거)
- 홈 `/` = About 내용(`AboutContent.astro`), `/about`은 같은 내용 + canonical `/`
- 블로그: 카드 그리드·페이지네이션 → 연도별 목록(`PostList`, `CategoryNav`). 정적 빌드에서 2페이지 이후가 열리지 않던 문제 해소
- 버그 수정: 태그 페이지가 `/blog/category/<tag>`에 생성되고 링크는 `/blog/tag/<tag>`를 가리켜 404 → `src/pages/blog/tag/[tag].astro`로 이동
- 검증(L3): build 27쪽·Pagefind 27쪽, 내부 링크 463개 중 깨짐 0, 8개 페이지 × 1280/375px × light/dark에서 가로 넘침 0, CV PDF 3쪽(인쇄 시 헤더·푸터 숨김 확인)
- 미사용 파일 남음: `PostCard.astro`, `Paginator.astro`, `Welcome.astro`, `layouts/Layout.astro` (삭제 승인 대기)
