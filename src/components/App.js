import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from "react";

function App() {
  
  const [isDark, setIsDark] = useState(false)
  
  function handleToggle() {
    setIsDark((isDark) => !isDark);
  }
  
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={(handleToggle)}>{isDark ? "LIGHT MODE" : "DARK MODE"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
