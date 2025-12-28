import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const getProductDetail = async () => {
    try {
      // 환경 변수에서 API URL 가져오기
      // const API_URL = import.meta.env.VITE_API_URL ||
      //   (import.meta.env.DEV
      //     ? "http://localhost:4000"
      //     : "https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice");
      // const API_URL =
      //   "https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice";
      let url = `https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice/products/${id}`;
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      let data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error("에러:", err);
      alert(
        "상품 정보를 불러올 수 없습니다. json-server가 실행 중인지 확인해주세요."
      );
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <Container>
      <Row className="product-detail">
        <Col className="product-img">
          <img
            src={product?.img}
            alt={product?.title}
            onError={(e) => {
              // 이미지 로드 실패 시 placeholder 사용
              e.target.src = `https://via.placeholder.com/600x720/cccccc/666666?text=${encodeURIComponent(
                product?.title || "Product"
              )}`;
            }}
          />
        </Col>
        <Col>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {product?.title}
          </div>
          <div style={{ fontSize: "20px", marginBottom: "10px" }}>
            ₩ {product?.price}
          </div>

          {product?.choice && (
            <div style={{ color: "gray", marginBottom: "10px" }}>
              conscious choice
            </div>
          )}

          <Form.Group controlId="sizeSelect" style={{ marginBottom: "20px" }}>
            <Form.Label>사이즈 선택</Form.Label>
            <Form.Select value={selectedSize} onChange={handleSizeChange}>
              <option value="">사이즈 선택</option>
              {product?.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="dark" style={{ width: "100%" }}>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
