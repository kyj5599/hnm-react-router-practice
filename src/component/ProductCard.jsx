import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Card onClick={showDetail} className="product-card">
      <ImageWrapper>
        <Image src={item?.img} alt={item?.title} />
      </ImageWrapper>
      <Info>
        <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
        <div className="title">{item?.title}</div>
        <div className="price">₩{item?.price}</div>
        <div className="new">{item?.new ? "신제품" : ""}</div>
      </Info>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-color: #ccc;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1.2;
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Info = styled.div`
  padding: 16px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .choice {
    font-size: 0.75rem;
    color: #666;
  }

  .title {
    font-weight: bold;
  }

  .price {
    font-size: 1rem;
    font-weight: 500;
  }

  .new {
    color: red;
    font-size: 0.85rem;
  }
`;
