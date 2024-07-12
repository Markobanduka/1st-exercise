import "./App.css";

const name = "Marko";
const colorText = "tomato";
const exactTime = new Date().getHours();
const dayOrNight = exactTime > 20 || exactTime < 7 ? "black" : "white";

function App() {
  return (
    <div style={{ background: dayOrNight }}>
      <p>Cao ja se zovem {name}</p>
      <p style={{ color: colorText }}>Ovo je react</p>
    </div>
  );
}

export default App;
