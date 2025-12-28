# 이미지 파일 추가 가이드

## 필요한 이미지 파일 목록

다음 이미지 파일들을 `public` 폴더에 추가해야 합니다:

1. `pattern-jacket.jpeg` - 벨티드 트윌 코트
2. `ankle-jeans.jpeg` - 슬림핏 맘 하이웨이스트 앵클 진
3. `wide-jeans.jpeg` - 와이드 하이웨이스트 진
4. `cottom-dress.jpeg` - 퍼프 슬리브 드레스
5. `shirt-dress.jpeg` - 프릴 디테일 드레스
6. `flare-dress.jpeg` - 시퀸 플레어 드레스
7. `single-jacket.jpeg` - 더블 브레스티드 재킷
8. `oversize-hoodie.jpeg` - 오버사이즈 집업 후디
9. `track-jacket.jpeg` - 아플리케 트랙 재킷
10. `design-hoodie.jpeg` - 프린트 후디
11. `regular-wide-jeans.jpeg` - 와이드 트윌 팬츠
12. `high-jeans.jpeg` - 플레어 로라이즈 진
13. `mash-dress.jpeg` - 셔링 메쉬 드레스
14. `sweat-shirt.jpeg` - 스웨트셔츠

## 이미지 추가 방법

### 방법 1: 직접 파일 복사
1. 이미지 파일을 준비합니다 (JPEG 형식)
2. 파일명을 위 목록과 정확히 일치시킵니다
3. `public` 폴더에 복사합니다

### 방법 2: 브라우저에서 다운로드
1. 원본 이미지가 있는 웹사이트를 엽니다
2. 각 이미지를 우클릭하여 "이미지 저장" 또는 "다운로드"를 선택합니다
3. 파일명을 위 목록과 일치시키고 `public` 폴더에 저장합니다

### 방법 3: 터미널에서 복사
```bash
# 예시: 이미지 파일이 다른 위치에 있는 경우
cp /path/to/your/images/*.jpeg public/
```

## 확인 방법

이미지 파일을 추가한 후:
1. `public` 폴더에 파일이 있는지 확인:
   ```bash
   ls -la public/*.jpeg
   ```
2. json-server를 재시작합니다
3. 브라우저를 새로고침합니다

## 참고

- 파일명은 대소문자를 구분합니다
- 파일 확장자는 `.jpeg` 또는 `.jpg` 모두 가능합니다 (하지만 `db.json`의 경로와 일치해야 함)
- 이미지 크기는 자동으로 조정되므로 원본 크기 상관없이 사용 가능합니다

