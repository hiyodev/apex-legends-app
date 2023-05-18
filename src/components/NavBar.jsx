import React from "react";
import styled, { keyframes } from "styled-components";
import ApexLogo from "../images/apex_logo.png";
import AmmoButton from "./AmmoButton";

import {
  light_ammo_icon,
  heavy_ammo_icon,
  energy_ammo_icon,
  sniper_ammo_icon,
  shotgun_ammo_icon,
  mythic_arrow_ammo_icon,
} from "../data/weaponstats";

const ImageOpacityAnimation = keyframes`
 from {opacity: 0}
 to {opacity: 1}
`;

const NavBarStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  max-width: 25rem;
`;

const LogoStyle = styled.img`
  animation: ${ImageOpacityAnimation} 0.7s ease-in-out;
  max-height: 4rem;
  padding-right: 1rem;
  object-fit: contain;
`;

const SearchBarStyle = styled.input`
  animation: ${ImageOpacityAnimation} 0.7s ease-in-out;
  min-width: 15rem;
  max-width: 35rem;
  height: 1.5rem;
`;

function NavBar(props) {
  const { setSearchString, setSortByAmmo, sortByAmmo } = props;
  return (
    <NavBarStyle>
      <LogoStyle src={ApexLogo}></LogoStyle>
      <SearchBarStyle
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchString(e.target.value.toLowerCase())}
      ></SearchBarStyle>
      <AmmoButton
        img={light_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"light"}
      ></AmmoButton>

      <AmmoButton
        img={heavy_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"heavy"}
      ></AmmoButton>

      <AmmoButton
        img={energy_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"energy"}
      ></AmmoButton>

      <AmmoButton
        img={shotgun_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"shotgun"}
      ></AmmoButton>

      <AmmoButton
        img={sniper_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"sniper"}
      ></AmmoButton>

      <AmmoButton
        img={mythic_arrow_ammo_icon}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
        ammoType={"mythic"}
      ></AmmoButton>
    </NavBarStyle>
  );
}

export default NavBar;
