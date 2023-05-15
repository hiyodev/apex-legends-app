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

const AttachmentIconStyle = styled.img`
  border: 2px solid black;
  background-color: #ba997b;
  border-radius: 5px;
  max-height: 2.5rem;
  margin: 1px;
`;

const DamageHeaderStyle = styled(RowHeaderStyle)`
  margin: 1px;
  padding: 2px;
  text-transform: uppercase;
  text-align: center;
`;

const DamageContentStyle = styled(DamageHeaderStyle)`
  color: black;
  text-transform: lowercase;
  font-weight: normal;
`;

function CardRow({ rowTitle, rowData, rowDatas, rowImg, rowImgs, category }) {
  let attachmentImgs = [];

  if (rowImgs !== undefined && rowImgs.length != 0) {
    attachmentImgs = rowImgs.map(({ key, img }) => {
      return <AttachmentIconStyle key={key} src={img}></AttachmentIconStyle>;
    });
  }

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
      {rowImgs && attachmentImgs}
      {rowDatas && (
        <>
          <RowWrapper>
            {rowDatas.map(({ key, value }) => {
              return (
                <DamageHeaderStyle category={category} key={key}>
                  {key}
                </DamageHeaderStyle>
              );
            })}
          </RowWrapper>
          <RowWrapper>
            {rowDatas.map(({ key, value }) => {
              return <DamageContentStyle key={key}>{value}</DamageContentStyle>;
            })}
          </RowWrapper>
        </>
      )}
    </>
  );
}

export default CardRow;
