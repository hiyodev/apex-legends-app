import React, { Fragment } from "react";
import styled from "styled-components";

import { CategoryColorTheme } from "../utils/styleHelper.js";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowHeaderStyle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  text-align: ${(props) => {
    return props.alignment || "right";
  }};
  background: ${(props) => {
    return CategoryColorTheme(props.category).rowHeaderColor;
  }};
  color: white;
  border-radius: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 0.25rem;
  margin: 0.1rem;
`;

const ColumnContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

const ColumnSubContentStyle = styled.div`
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 0.25rem;
`;

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ColumnIconStyle = styled.img`
  max-width: 1.75rem;
  padding: 0.2rem 0.1rem 0rem 0;
`;

function CardColumns(props) {
  const { colData, category } = props;

  const columnTitles = colData?.map(({ title, alignment, values }, index) => {
    return (
      <ColumnWrapper key={index}>
        <RowHeaderStyle category={category} alignment={alignment}>
          {title}
        </RowHeaderStyle>
        {values?.map(({ text, subtext, img }, index) => {
          return (
            <Fragment key={index}>
              <ColumnContentStyle>
                {img && <ColumnIconStyle src={img}></ColumnIconStyle>}
                {text}
              </ColumnContentStyle>
              {subtext && (
                <ColumnSubContentStyle>{subtext}</ColumnSubContentStyle>
              )}
            </Fragment>
          );
        })}
      </ColumnWrapper>
    );
  });

  return <ContentContainer>{columnTitles}</ContentContainer>;
}

export default CardColumns;
