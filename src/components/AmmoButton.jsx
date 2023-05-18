import React from "react";

import styled, { keyframes } from "styled-components";

const ImageOpacityAnimation = keyframes`
 from {opacity: 0}
 to {opacity: 1}
`;

const AmmoImgStyle = styled.img`
  animation: ${ImageOpacityAnimation} 0.7s ease-in-out;
  animation-iteration-count: 1;
  flex-basis: 50%;
  object-fit: contain;
  max-height: 4rem;
  max-width: 4rem;
  opacity: var(--opacityValue);
  --opacityValue: ${(props) => {
    return props.selected ? "0.8" : "0.15";
  }};

  &:hover {
    opacity: calc(var(--opacityValue) + 0.2);
  }
`;

function AmmoButton(props) {
  const { setSortByAmmo, sortByAmmo, ammoType, img } = props;

  return (
    <AmmoImgStyle
      onAnimationStart={console.log("HELLO", ammoType)}
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
