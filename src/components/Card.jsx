import React from "react";

import styled, { keyframes } from "styled-components";

const cardFocusAnimation = keyframes`
0% { transform:scale(1); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
100% {transform:scale(1.1); box-shadow: 0px 20px 40px rgba(0, 0, 175, 0.4);}
`;

const CardStyle = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid white;
  width: 25rem;
  background: #121418;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  // Expand card on hover
  &:hover {
    animation-name: ${cardFocusAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const ImageStyle = styled.img`
  padding-top: 0.5rem;
  width: 100%;
  object-fit: contain;
`;

const TitleStyle = styled.div`
  font-size: 2rem;
  padding: 0.1rem;
  font-weight: bold;
  background-color: #353535;
`;

const DescriptionStyle = styled.div`
  font-size: 1rem;
  font-style: italic;
`;

// Default Card layout
/*
---------
| TITLE |
|  IMG  |
|  ...  |
|  ...  |
---------
*/

function Card(props) {
  const { title, img, description } = props;
  return (
    <CardStyle>
      <TitleStyle>{title}</TitleStyle>
      <ImageStyle src={img} alt="logo" />
      <DescriptionStyle>{description}</DescriptionStyle>
    </CardStyle>
  );
}

export default Card;
