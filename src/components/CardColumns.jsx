import React, { Fragment } from "react";
import styled from "styled-components";

import { CategoryColorTheme } from "../utils/styleHelper.js";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowHeaderStyle = styled.div`
  flex: 1;
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
  font-size: 1.1rem;
`;

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function CardColumns(props) {
  const { colData, category } = props;

  const columnTitles = colData?.map(({ title, alignment, values }, index) => {
    return (
      <ColumnWrapper key={index}>
        <RowHeaderStyle category={category} alignment={alignment}>
          {title}
        </RowHeaderStyle>
        {values?.map(({ text }, index) => {
          return <ColumnContentStyle key={index}>{text}</ColumnContentStyle>;
        })}
      </ColumnWrapper>
    );
  });

  return <ContentContainer>{columnTitles}</ContentContainer>;
}

export default CardColumns;
