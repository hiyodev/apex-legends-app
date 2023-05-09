import React from "react";

import styled from "styled-components";

const CardStyle = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 2px solid white;
  width: 25rem;
  border-radius: 1rem;
  background: #121418;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

function Card(props) {
  const { title, body, img } = props;
  return (
    <CardStyle>
      <img src={img} className="App-logo" alt="logo" />
      <h3>{title}</h3>
      <p>{body}</p>
    </CardStyle>
  );
}

export default Card;
