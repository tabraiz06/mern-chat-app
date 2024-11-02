import { useState } from "react";

import "./App.css";
import Left from "./components/left/Left1/Left";
import Right from "./components/right/Right";
import Left2 from "./components/left/left2/Left2";

function App() {
  return (
    <div className="h-screen flex w-full overflow-hidden scroll-none">
      <Left2 />
      <Left />
      <Right />
    </div>
  );
}

export default App;
