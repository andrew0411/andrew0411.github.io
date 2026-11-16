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
