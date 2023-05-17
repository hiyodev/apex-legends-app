import React, { useState } from "react";
import Card from "./Card";

import NavBar from "./NavBar";

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
    });

  return (
    <>
      <NavBar
        setSearchString={setSearchString}
        setSortByAmmo={setSortByAmmo}
        sortByAmmo={sortByAmmo}
      ></NavBar>
      {weaponList}
    </>
  );
}

export default CardList;
