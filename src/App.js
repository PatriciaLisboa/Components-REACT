import { useState } from "react";
import "./styles.css";

const libraries = [
  { id: "dark souls", name: "Dark Souls" },
  { id: "bloodborne", name: "Bloodborne" },
  { id: "skyrim", name: "Skyrim" },
  { id: "godofwar", name: "God of War" },
  { id: "horizonzerodawn", name: "Horizon Zero Dawn" },
  { id: "diablo", name: "Diablo" },
  { id: "dyinglight", name: "Dying Light" },
  { id: "shadowofmordor", name: "Middle-earth: Shadow of Mordor" }
];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const item = libraries[selectedIndex];

  return (
    <div className="App">
      <label for="game">Game</label>
      <input
        key={item.id}
        type="text"
        title="Game"
        name="game"
        placeholder="Select a library"
        defaultValue={item.name}
      />

      <ul>
        {libraries.map((item, i) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedIndex(i)}
              data-selected={selectedIndex === i || undefined}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
