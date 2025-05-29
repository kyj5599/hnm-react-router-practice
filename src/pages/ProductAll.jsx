import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={6} className="mb-4 px-2">
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ProductAll;

// ✅ 페이지 전체 여백 최소화
const Wrapper = styled.div`
  padding: 20px;
`;
