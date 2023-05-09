import "./App.css";
import ranked_logo from "./images/masters_icon.webp";
import damage_logo from "./images/damage_icon.png";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          img={ranked_logo}
          title="Ranked Progression"
          body="Calculate how much ladder points do you need to progress to the next tier rank."
        ></Card>
        <Card
          img={damage_logo}
          title="DPS Calculator"
          body="Calculate the damage per second a weapon in game does against different legends."
        ></Card>
      </header>
    </div>
  );
}

export default App;
