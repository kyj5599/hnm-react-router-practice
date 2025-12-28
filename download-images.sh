#!/bin/bash

# 이미지 다운로드 스크립트
# public 폴더에 이미지 파일들을 다운로드합니다.

cd public

# 이미지 파일 목록
images=(
  "pattern-jacket.jpeg"
  "ankle-jeans.jpeg"
  "wide-jeans.jpeg"
  "cottom-dress.jpeg"
  "shirt-dress.jpeg"
  "flare-dress.jpeg"
  "single-jacket.jpeg"
  "oversize-hoodie.jpeg"
  "track-jacket.jpeg"
  "design-hoodie.jpeg"
  "regular-wide-jeans.jpeg"
  "high-jeans.jpeg"
  "mash-dress.jpeg"
  "sweat-shirt.jpeg"
)

base_url="https://noona-hnm.netlify.app"

for image in "${images[@]}"; do
  echo "Downloading $image..."
  curl -L -k --fail --silent --show-error -o "$image" "$base_url/$image"
  if [ $? -eq 0 ]; then
    # 파일이 실제 이미지인지 확인
    file_type=$(file -b --mime-type "$image" 2>/dev/null)
    if [[ $file_type == image/* ]]; then
      echo "✓ Successfully downloaded $image ($file_type)"
    else
      echo "✗ $image is not an image file (got $file_type), removing..."
      rm -f "$image"
    fi
  else
    echo "✗ Failed to download $image"
  fi
done

echo "Done!"
