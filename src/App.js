import "./App.css";

// Data Import
import { weaponStats } from "./data/weaponstats";

import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardList weaponStats={weaponStats} />
      </header>
    </div>
  );
}

export default App;
