export function CategoryColorTheme(category) {
  switch (category) {
    case "light":
      return {
        cardColor: "#F9CCA4",
        cardTitleColor: "#f49a4a",
        rowHeaderColor: "#815126",
      };
    case "energy":
      return {
        cardColor: "#e2ee9c",
        cardTitleColor: "#cee255",
        rowHeaderColor: "#636f1d",
      };
    case "heavy":
      return {
        cardColor: "#b5e5d3",
        cardTitleColor: "#6bcea8",
        rowHeaderColor: "#366654",
      };
    case "shotgun":
      return {
        cardColor: "#ff957f",
        cardTitleColor: "#fe2c00",
        rowHeaderColor: "#801600",
      };
    case "sniper":
      return {
        cardColor: "#c1c3ff",
        cardTitleColor: "#7e82ff",
        rowHeaderColor: "#3e36a5",
      };
    case "mythic":
      return {
        cardColor: "#f9b2c8",
        cardTitleColor: "#ee0047",
        rowHeaderColor: "#8b001a",
      };
    default:
      return {
        cardColor: "transparent",
        cardTitleColor: "transparent",
        rowHeaderColor: "transparent",
      };
  }
}
