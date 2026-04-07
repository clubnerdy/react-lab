# 서회정의 개인 페이지

나를 소개하고 작업물을 담은 공간입니다.  
React + TypeScript로 구현되었습니다.

<br>

## 🛠 Tech Stack

| 분류      | 기술                                |
| --------- | ----------------------------------- |
| Language  | TypeScript                          |
| Framework | React                               |
| Styling   | CSS3 (CSS Variables, Flexbox, Grid) |
| AI Tool   | Claude Code (CLI)                   |
| Build     | Vite                                |

<br>

## ✨ Features

- 반응형 레이아웃
- 섹션별 스크롤 내비게이션 (IntersectionObserver 기반)
- About / Projects / Contact 섹션
- 경력 카드 + 탭 필터링
- 재사용 가능한 컴포넌트 설계 (Button, Card 등)

<br>

## 📁 Project Structure

```
src/
├── assets/
│   ├── content
│   ├── icon
│   ├── images
│   └── index.js
├── components/
│   ├── card
│   └── ...
├── data
├── hooks
├── sections/
│   ├── ...
├── styles/
│   ├── components/
│   │   ├── (card)
│   │   └── ...
│   ├── sections/
│   │   └── ...
│   ├── App.css
│   └── index.css
├── App.jsx
└── main.jsx
```

<br>

## 🚀 Getting Started

```bash
# 레포지토리 클론
git clone [repo-url]

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

<br>

## 🤖 Claude Code와 함께

이 프로젝트는 **[Claude Code](https://claude.ai/code)** (CLI)를 활용하여 개발되었습니다.

- 반응형 레이아웃 작업 (브레이크포인트 설계 및 미디어 쿼리 구현)

```bash
# Claude Code 실행
claude
```
