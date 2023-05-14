import React from "react";
import styled from "styled-components";

import { CategoryColorTheme } from "../utils/styleHelper.js";

const RowWrapper = styled.div`
  display: flex;
  padding: 0.1rem;
`;

const RowHeaderStyle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: right;
  background: ${(props) => {
    return CategoryColorTheme(props.category).rowHeaderColor;
  }};
  color: white;
  border-radius: 0.25rem;
  padding-right: 0.25rem;
`;

const RowContentStyle = styled.div`
  flex: 1;
  text-align: left;
  font-size: 1rem;
  padding-left: 0.25rem;
  min-height: 1.7rem;
`;

const RowContentWithImageStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1rem;
  padding-left: 0.25rem;
`;

const IconStyle = styled.img`
  max-height: 1.75rem;
`;

function CardRow({ rowTitle, rowData, rowImg, category }) {
  return (
    <>
      <RowWrapper>
        <RowHeaderStyle category={category}>{rowTitle}</RowHeaderStyle>
        {rowImg && rowData && (
          <RowContentWithImageStyle>
            <IconStyle src={rowImg} alt="icon" />
            {rowData}
          </RowContentWithImageStyle>
        )}
        {rowImg && !rowData && (
          <RowContentStyle>
            <IconStyle src={rowImg} alt="icon" />
          </RowContentStyle>
        )}
        {!rowImg && rowData && <RowContentStyle>{rowData}</RowContentStyle>}
      </RowWrapper>
    </>
  );
}

export default CardRow;
