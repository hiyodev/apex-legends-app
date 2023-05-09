import React from "react";
import styled, { keyframes } from "styled-components";

const cardFocusAnimation = keyframes`
0% { transform:scale(1) }
100% {transform:scale(1.1)  }
`;

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CardStyle = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid black;
  text-align: center;
  background-color: #b9b9b9;
  padding: 5rem;

  &:hover {
    animation-name: ${cardFocusAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

function DemoCode(props) {
  return (
    <div>
      <ContainerStyle>
        <CardStyle>Hello World</CardStyle>
      </ContainerStyle>
    </div>
  );
}

export default DemoCode;
