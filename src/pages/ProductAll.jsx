import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
// import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Container, Alert } from "react-bootstrap";

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let keyword = query.get("q") || "";
      setError(""); // 에러 초기화

      //
      // 환경 변수에서 API URL 가져오기
      // const API_URL =
      //   import.meta.env.VITE_API_URL ||
      //   (import.meta.env.DEV
      //     ? "http://localhost:4000"
      //     : "https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice");
      const API_URL =
        "https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice";
      let url = `${API_URL}/products?q=${keyword}`;

      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      let data = await response.json();

      // 검색어가 있으면 클라이언트 사이드에서 필터링
      if (keyword !== "") {
        data = data.filter((item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.error("에러:", err);
      if (err.message === "Failed to fetch" || err.name === "TypeError") {
        setError(
          "서버에 연결할 수 없습니다. json-server가 실행 중인지 확인해주세요. (npm run server)"
        );
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;

const Wrapper = styled.div`
  padding: 20px;
`;
