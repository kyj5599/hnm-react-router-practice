#!/bin/bash

# 대체 이미지 다운로드 스크립트
# public 폴더에 이미지 파일들을 다운로드합니다.
# Unsplash의 패션 이미지를 사용합니다.

cd public

# 이미지 파일 목록
images=(
  "pattern-jacket.jpeg:1551028719-00167b16eac5"
  "ankle-jeans.jpeg:1542272604-787c3835535d"
  "wide-jeans.jpeg:1541099649105-f69ad21f3246"
  "cottom-dress.jpeg:1595777457583-95e059d581b8"
  "shirt-dress.jpeg:1594633312681-425c7b97ccd1"
  "flare-dress.jpeg:1515372039744-b8f02a3ae446"
  "single-jacket.jpeg:1551028719-00167b16eac5"
  "oversize-hoodie.jpeg:1556821840-3a63f95609a7"
  "track-jacket.jpeg:1551028719-00167b16eac5"
  "design-hoodie.jpeg:1556821840-3a63f95609a7"
  "regular-wide-jeans.jpeg:1541099649105-f69ad21f3246"
  "high-jeans.jpeg:1542272604-787c3835535d"
  "mash-dress.jpeg:1595777457583-95e059d581b8"
  "sweat-shirt.jpeg:1521572163474-6864f9cf17ab"
)

for image_entry in "${images[@]}"; do
  image_name="${image_entry%%:*}"
  unsplash_id="${image_entry##*:}"
  
  echo "Downloading $image_name..."
  
  # Unsplash에서 이미지 다운로드 (400x480 크기)
  curl -L --fail --silent --show-error \
    -o "$image_name" \
    "https://images.unsplash.com/photo-${unsplash_id}?w=400&h=480&fit=crop&auto=format&q=80" 2>/dev/null
  
  if [ $? -eq 0 ]; then
    # 파일이 실제 이미지인지 확인
    file_type=$(file -b --mime-type "$image_name" 2>/dev/null)
    if [[ $file_type == image/* ]]; then
      echo "✓ Successfully downloaded $image_name ($file_type)"
    else
      echo "✗ $image_name is not an image file (got $file_type), removing..."
      rm -f "$image_name"
    fi
  else
    echo "✗ Failed to download $image_name"
  fi
done

echo "Done! Check the public folder for downloaded images."
