import { useState } from "react";

import "./App.css";
import Left from "./components/left/Left1/Left";
import Right from "./components/right/Right";
import Left2 from "./components/left/left2/Left2";
import Register from "./components/credentials/Register";

function App() {
  return (
    <div className="h-screen flex w-full overflow-hidden scroll-none">
      {/* <Left2 />
      <Left />
      <Right /> */}
      <Register/>
    </div>
  );
}

export default App;
