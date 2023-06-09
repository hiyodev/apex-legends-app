import React from "react";

import styled, { keyframes } from "styled-components";
import { CategoryColorTheme } from "../utils/styleHelper.js";

import CardRows from "./CardRows.jsx";
import CardColumns from "./CardColumns.jsx";

const ImageOpacityAnimation = keyframes`
 from {opacity: 0}
 to {opacity: 1}
`;

const CardStyle = styled.div`
  animation: ${ImageOpacityAnimation} 0.7s ease-in;
  margin: 1rem;
  padding: 0.5em;
  border: 1px solid white;
  width: 25rem;
  height: auto;
  background: ${(props) => {
    return CategoryColorTheme(props.category).cardColor;
  }};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

const TitleStyle = styled.div`
  font-size: 2rem;
  padding: 0.75rem;
  font-weight: bold;
  background: ${(props) => {
    return CategoryColorTheme(props.category).cardTitleColor;
  }};
`;

const ImageStyle = styled.img`
  padding-top: 0.5em;
  width: 90%;
  object-fit: contain;
`;

const DescriptionStyle = styled.div`
  font-size: 1rem;
  font-style: italic;
`;

const SubHeaderStyle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5em;
  letter-spacing: 0.05rem;
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

function Card({ weapon }) {
  const {
    title,
    img,
    description,
    category,
    attachments,
    damages,
    technical,
    profile,
  } = weapon;

  return (
    <CardStyle category={category}>
      <TitleStyle category={category}>{title}</TitleStyle>
      <ImageStyle src={img} alt="logo" />
      <DescriptionStyle>{description}</DescriptionStyle>

      <SubHeaderStyle>— Profile —</SubHeaderStyle>
      <CardRows category={category} rowData={profile}></CardRows>

      {/* Not all weapons have attachments, IE: Kraber */}
      {attachments && (
        <>
          <SubHeaderStyle>— Attachment Slots —</SubHeaderStyle>
          <CardRows category={category} rowData={attachments}></CardRows>
        </>
      )}

      <SubHeaderStyle>— Damage —</SubHeaderStyle>
      <CardColumns category={category} colData={damages}></CardColumns>

      <SubHeaderStyle>— Technical —</SubHeaderStyle>
      <CardRows category={category} rowData={technical}></CardRows>
    </CardStyle>
  );
}

export default Card;
