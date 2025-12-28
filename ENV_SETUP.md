# 환경 변수 설정 가이드

## .env 파일 생성

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# 개발 환경
VITE_API_URL=http://localhost:4000
```

## .env.production 파일 생성 (선택사항)

프로덕션 환경용 설정이 필요하면 `.env.production` 파일을 생성하세요:

```env
# 프로덕션 환경
VITE_API_URL=https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice
```

## 사용 방법

코드에서 환경 변수는 다음과 같이 사용됩니다:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV 
    ? "http://localhost:4000"
    : "https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice");
```

## 주의사항

- Vite에서는 환경 변수명이 `VITE_`로 시작해야 클라이언트에서 접근 가능합니다
- `.env` 파일은 `.gitignore`에 추가되어 Git에 커밋되지 않습니다
- 환경 변수를 변경한 후에는 개발 서버를 재시작해야 합니다

