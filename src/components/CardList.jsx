import React from "react";
import Card from "./Card";

function CardList(props) {
  const { weaponStats } = props;

  const weaponList = weaponStats.map((weapon) => {
    return (
      <Card
        key={weapon.id}
        title={weapon.title}
        img={weapon.img}
        description={weapon.description}
      ></Card>
    );
  });

  return <>{weaponList}</>;
}

export default CardList;
