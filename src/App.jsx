import "./App.css";
import Products from "./Components/Products";
import Lecture2 from "./exercises/Lecture2";

const name = "Marko";
const colorText = "tomato";
const exactTime = new Date().getHours();
const dayOrNight = exactTime > 23 || exactTime < 7 ? "black" : "white";

function App() {
  return (
    <div style={{ background: dayOrNight }}>
      <p>Cao ja se zovem {name}</p>
      <p style={{ color: colorText }}>Ovo je react</p>
      {/* <Lecture2 /> */}
      <Products tax="20" />
    </div>
  );
}

export default App;
