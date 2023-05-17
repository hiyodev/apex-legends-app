// Data Import
import { weaponStats } from "./data/weaponstats";

import CardList from "./components/CardList";
import styled from "styled-components";

const AppStyle = styled.div`
  padding: 4rem 1rem 0 1rem;
  background-color: #282c34;
  display: flex;
  text-align: center;
  justify-content: center;
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
