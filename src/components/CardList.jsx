import React, { useState } from "react";
import Card from "./Card";

import NavBar from "./NavBar";

import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList(props) {
  const [searchString, setSearchString] = useState("");
  const [sortByAmmo, setSortByAmmo] = useState({
    light: true,
    heavy: true,
    energy: true,
    sniper: true,
    shotgun: true,
    mythic: true,
  });
  const { weaponStats } = props;

  const weaponList = weaponStats
    .filter((weapon) => {
      const { light, heavy, energy, sniper, shotgun, mythic } = sortByAmmo;

      if (light && weapon.category === "light") return weapon;
      if (heavy && weapon.category === "heavy") return weapon;
      if (energy && weapon.category === "energy") return weapon;
      if (sniper && weapon.category === "sniper") return weapon;
      if (shotgun && weapon.category === "shotgun") return weapon;
      if (mythic && weapon.category === "mythic") return weapon;
      return null;
    })
    .map((weapon) => {
      if (
        searchString &&
        JSON.stringify(weapon).toLowerCase().includes(searchString)
      ) {
        return <Card key={weapon.id} weapon={weapon}></Card>;
      } else if (!searchString) {
        return <Card key={weapon.id} weapon={weapon}></Card>;
      }
      return null;
    });

  return (
    <>
      <NavBar
        setSearchString={setSearchString}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
      ></NavBar>
      <CardWrapper>{weaponList}</CardWrapper>
    </>
  );
}

export default CardList;
