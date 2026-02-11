# 포트폴리오 웹사이트 배포 가이드

이 프로젝트는 **Vite + React** 정적 사이트입니다. 아래 방법 중 하나를 선택해 배포할 수 있습니다.

---

## 1. 배포 전 준비 (로컬에서 확인)

```bash
# 의존성 설치 (아직 안 했다면)
npm install

# 프로덕션 빌드
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다. 로컬에서 미리보기:

```bash
npm run preview
```

---

## 2. 추천 배포 방법

### A. Vercel (가장 간단, 추천)

1. [vercel.com](https://vercel.com) 가입 후 로그인
2. **Add New** → **Project** 선택
3. GitHub/GitLab/Bitbucket에서 이 저장소 연결 (또는 `dist` 폴더 업로드)
4. 설정:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Deploy** 클릭

- 무료 도메인(`*.vercel.app`) 제공
- 커밋 푸시 시 자동 재배포
- SPA(React Router) 자동 지원

---

### B. Netlify

1. [netlify.com](https://netlify.com) 가입 후 로그인
2. **Add new site** → **Import an existing project** (Git 연결) 또는 **Deploy manually** (`dist` 드래그 앤 드롭)
3. Git 사용 시:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. 배포

- 무료 도메인(`*.netlify.app`)
- SPA: **Site settings** → **Build & deploy** → **Post processing** → **Redirects**에 아래 추가:
  - **Rule**: `/*    /index.html   200`

---

### C. GitHub Pages

1. 이 프로젝트를 GitHub 저장소에 푸시
2. **vite.config.ts**에서 `base` 설정 (저장소 이름에 맞게 수정):

   ```ts
   export default defineConfig(({ mode }) => ({
     base: "/fluid-journey-folio/", // 실제 저장소 이름으로 변경
     // ... 나머지 설정
   }));
   ```

3. 저장소 **Settings** → **Pages** → **Source**: **GitHub Actions** 선택
4. 프로젝트 루트에 `.github/workflows/deploy.yml` 파일 생성 (아래 참고)
5. 푸시하면 자동으로 `https://<username>.github.io/<repo-name>/` 에 배포

**`.github/workflows/deploy.yml` 예시:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

### D. Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 저장소 연결 후:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. **Save and Deploy**

- 무료 도메인, CDN 제공
- SPA: **Settings** → **Functions and Assets** → **Single-page application** 체크 또는 `_redirects` 파일에 `/* /index.html 200` 추가

---

## 3. 요약

| 서비스       | 난이도  | 무료 도메인 | 자동 배포     |
| ------------ | ------- | ----------- | ------------- |
| Vercel       | ⭐ 쉬움 | ✅          | ✅ (Git 연동) |
| Netlify      | ⭐ 쉬움 | ✅          | ✅ (Git 연동) |
| GitHub Pages | ⭐⭐    | ✅          | ✅ (Actions)  |
| Cloudflare   | ⭐ 쉬움 | ✅          | ✅ (Git 연동) |

**처음 배포하시면 Vercel 또는 Netlify**를 추천합니다. Git만 연결하면 빌드/배포가 자동으로 됩니다.

배포 후 문제가 있으면 브라우저 콘솔과 배포 플랫폼의 빌드 로그를 확인해보세요.
