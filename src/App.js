import React, { useState } from "react";
import Score from "./components/Score";
import ScaleChooserForm from "./components/ScaleChooserForm";

import "./App.css";

const App = () => {
  
  const initialScale = {
    key: "C",
    tonality: "major",
    clef: "treble"
  }

  const [userScale, setUserScale] = useState(initialScale);

  return (
    <div className="content">
      <h1>Music scales</h1>
      <ScaleChooserForm userScale={userScale} setUserScale={setUserScale} />
      <Score />
    </div>
  )
};

export default App;