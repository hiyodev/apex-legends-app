// Data Import
import { weaponStats } from "./data/weaponstats";

import CardList from "./components/CardList";
import styled from "styled-components";

const AppStyle = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <AppStyle>
      <CardList weaponStats={weaponStats} />
    </AppStyle>
  );
}

export default App;
