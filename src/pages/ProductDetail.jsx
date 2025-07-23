import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kyj5599/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
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
          <img src={product?.img} alt={product?.title} />
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
