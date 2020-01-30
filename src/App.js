import React from "react";
import Score from "./components/Score";
import ScaleChooserForm from "./components/ScaleChooserForm";

import "./App.css";

export default () => (
  <div className="content">
    <h1>Music scales</h1>
    <ScaleChooserForm />
    <Score />
  </div>
);
