import React, { Fragment } from "react";
import styled from "styled-components";

import { CategoryColorTheme } from "../utils/styleHelper.js";

const RowWrapper = styled.div`
  display: flex;
  padding: 0.1rem;
`;

// The solid fill boxes with text inside
const RowHeaderStyle = styled.div`
  flex: 0.85;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: right;
  background: ${(props) => {
    return CategoryColorTheme(props.category).rowHeaderColor;
  }};
  color: white;
  border-radius: 0.25rem;
  padding: 0 0.25rem 0.25rem 0;
`;

// Content Styles
const RowContentStyle = styled.div`
  flex: 1.15;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  justify-content: ${(props) => {
    return props.alignment || "normal";
  }};
`;

const MultiRowContentStyle = styled.div`
  flex: 1.15;
  display: ${(props) => {
    return props.alignment === "center" ? "flex" : "inline";
  }};
  font-size: 1.1rem;
  justify-content: ${(props) => {
    return props.alignment || "normal";
  }};
  text-align: left;
`;

const RowIconStyle = styled.img`
  padding: 0 0rem 0.25rem 0.25rem;
  max-width: 1.75rem;
`;

const GunIconStyle = styled.img`
  padding: 0 0rem 0 0.25rem;
  max-height: 1.75rem;
`;

const AttachmentIconStyle = styled.img`
  max-height: 3rem;
  margin: 1px;
  text-align: center;
`;

const RowTextStyle = styled.div`
  padding: 0 0.25rem 0.25rem 0.25rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function CardRows({ category, rowData }) {
  const newRowData = rowData?.map(
    ({ title, text, img, multirow, alignment }, index) => {
      // Handles multiple data ( 2-3 manufacturers with icons under "Manufacturer" ) in a single row
      if (multirow) {
        return (
          <RowWrapper key={index}>
            {title && (
              <RowHeaderStyle category={category}>{title}</RowHeaderStyle>
            )}
            <MultiRowContentStyle alignment={alignment}>
              {multirow.map(({ text, alt, img }) => {
                return (
                  <ContentWrapper key={text ? text : alt}>
                    {img && text && <RowIconStyle src={img} alt={text} />}
                    {alt && <AttachmentIconStyle src={img} alt={alt} />}
                    {text && <RowTextStyle>{text}</RowTextStyle>}
                  </ContentWrapper>
                );
              })}
            </MultiRowContentStyle>
          </RowWrapper>
        );
      }
      // Handles single data ( 1 weapon icon under "Icon" ) in a single row
      else {
        return (
          <RowWrapper key={index}>
            {title && (
              <RowHeaderStyle category={category}>{title}</RowHeaderStyle>
            )}
            <RowContentStyle>
              {img && title !== "Icon" && <RowIconStyle src={img} alt="icon" />}
              {img && title === "Icon" && <GunIconStyle src={img} alt="icon" />}
              {text && <RowTextStyle>{text}</RowTextStyle>}
            </RowContentStyle>
          </RowWrapper>
        );
      }
    }
  );

  return <>{newRowData}</>;
}

export default CardRows;
