import React from "react";

import styled from "styled-components";

const AmmoImgStyle = styled.img`
  flex-basis: 50%;
  object-fit: contain;
  max-height: 4rem;
  max-width: 4rem;
  opacity: ${(props) => {
    return props.selected ? "1" : "0.25";
  }};
`;

function AmmoButton(props) {
  const { setSortByAmmo, sortByAmmo, ammoType, img } = props;

  return (
    <AmmoImgStyle
      selected={sortByAmmo[ammoType]}
      src={img}
      onClick={() =>
        setSortByAmmo((currAmmo) => ({
          ...currAmmo,
          [ammoType]: !currAmmo[ammoType],
        }))
      }
    ></AmmoImgStyle>
  );
}

export default AmmoButton;
