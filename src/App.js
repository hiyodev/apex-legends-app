import "./App.css";

// Image imports
import alternator_smg from "./images/smg/alternator.webp";
import car_smg from "./images/smg/car.webp";
import prowler_smg from "./images/smg/prowler.webp";
import r99_smg from "./images/smg/r99.webp";
import volt_smg from "./images/smg/volt.webp";

import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card img={r99_smg}></Card>
        <Card img={alternator_smg}></Card>
        <Card img={volt_smg}></Card>
        <Card img={car_smg}></Card>
        <Card img={prowler_smg}></Card>
      </header>
    </div>
  );
}

export default App;
