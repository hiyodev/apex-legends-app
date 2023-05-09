import React from "react";

import styled, { keyframes } from "styled-components";

const cardFocusAnimation = keyframes`
0% { transform:scale(1); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
100% {transform:scale(1.1); box-shadow: 0px 20px 40px rgba(0, 0, 175, 0.4);}
`;

const CardStyle = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 2px solid white;
  width: 25rem;
  border-radius: 1rem;
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
  width: 100%;
  height: 10rem;
  object-fit: contain;
`;

function Card(props) {
  const { title, body, img } = props;
  return (
    <CardStyle>
      <ImageStyle src={img} alt="logo" />
      <h3>{title}</h3>
      <p>{body}</p>
    </CardStyle>
  );
}

export default Card;
