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
      // let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${keyword}`;
      // let url = `http://localhost:4000/products?q=${keyword}`;
      let url = `https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice/products?q=${keyword}`;
      // let url = `http://localhost:4000/products`;

      let response = await fetch(url);
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
      }
      setProducts(data);
    } catch (err) {
      setError(err.message);
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
