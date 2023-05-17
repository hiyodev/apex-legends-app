import React, { useState } from "react";
import Card from "./Card";

import NavBar from "./NavBar";

import styled from "styled-components";

const AppStyle = styled.div`
  padding: 4rem 1rem 0 1rem;
  background-color: #282c34;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
`;

function CardList(props) {
  const [searchString, setSearchString] = useState("");
  const [sortByAmmo, setSortByAmmo] = useState({
    light: true,
    heavy: true,
    energy: true,
    sniper: true,
  });
  const { weaponStats } = props;

  const weaponList = weaponStats
    .filter((weapon) => {
      const { light, heavy, energy, sniper } = sortByAmmo;

      if (light && weapon.category === "light") return weapon;
      if (heavy && weapon.category === "heavy") return weapon;
      if (energy && weapon.category === "energy") return weapon;
      if (sniper && weapon.category === "sniper") return weapon;
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
    <AppStyle>
      <NavBar
        setSearchString={setSearchString}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
      ></NavBar>
      {weaponList}
    </AppStyle>
  );
}

export default CardList;
