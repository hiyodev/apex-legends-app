import React, { Fragment } from "react";
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
  padding-bottom: 0.25rem;
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
  font-size: 1rem;
  padding-left: 0.25rem;
`;

const ColumnContentWithImageStyle = styled(RowContentWithImageStyle)`
  flex-direction: column;
  align-items: baseline;
  text-align: left;
`;

const GunIconStyle = styled.img`
  max-height: 1.75rem;
`;

const SmallIconStyle = styled.img`
  max-width: 1.75rem;
`;

const AttachmentIconStyle = styled.img`
  max-height: 3rem;
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

function CardRow({
  rowTitle,
  rowData,
  rowDataExtended,
  rowAttachments,
  rowImg,
  rowImgs,
  category,
}) {
  let attachmentImgs = [];
  let extendedRows = [];

  if (rowImgs !== undefined && rowImgs.length !== 0) {
    attachmentImgs = rowImgs.map(({ key, img }) => {
      return <AttachmentIconStyle key={key} src={img}></AttachmentIconStyle>;
    });
  }

  if (rowDataExtended !== undefined && rowDataExtended.length !== 0) {
    extendedRows = rowDataExtended.map(({ img, value }) => {
      return (
        <RowContentWithImageStyle key={value}>
          {img && <SmallIconStyle src={img} alt="icon" />}
          <ColumnContentWithImageStyle>
            <>{value}</>
          </ColumnContentWithImageStyle>
        </RowContentWithImageStyle>
      );
    });
  }

  return (
    <>
      <RowWrapper>
        {rowTitle && (
          <RowHeaderStyle category={category}>{rowTitle}</RowHeaderStyle>
        )}
        {rowImg && rowData && (
          <RowContentWithImageStyle>
            <SmallIconStyle src={rowImg} alt="icon" />
            {rowData}
          </RowContentWithImageStyle>
        )}
        {rowImg && !rowData && (
          <RowContentWithImageStyle>
            <GunIconStyle src={rowImg} alt="icon" />
          </RowContentWithImageStyle>
        )}
        {!rowImg && rowData && <RowContentStyle>{rowData}</RowContentStyle>}
        {rowDataExtended && (
          <ColumnContentWithImageStyle>
            {extendedRows}
          </ColumnContentWithImageStyle>
        )}
      </RowWrapper>
      {rowImgs && attachmentImgs}
      {rowAttachments && (
        <>
          <RowWrapper>
            {rowAttachments.map(({ key }) => {
              return (
                <DamageHeaderStyle category={category} key={key}>
                  {key}
                </DamageHeaderStyle>
              );
            })}
          </RowWrapper>
          <RowWrapper>
            {rowAttachments.map(({ key, value }) => {
              return <DamageContentStyle key={key}>{value}</DamageContentStyle>;
            })}
          </RowWrapper>
        </>
      )}
    </>
  );
}

export default CardRow;
