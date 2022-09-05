import logo from "./logo.svg";
import "./App.css";
import SwitchContainer from "./ToggleComponent";
import BlockContainer from "./BlockContainer";
import React, { useState } from "react";

function App() {
  const [toggleData, updateToggleData] = useState({});
  return (
    <div className="App">
      <h1>Amphora Assignment</h1>
      <SwitchContainer
        toggleState={toggleData}
        onToggle={(item, e) => {
          // e.preventDefault();
          // e.persist();
          updateToggleData((prevState) => {
            console.log("Check the Item :", item.key, e.target.checked);
            return {
              ...prevState,
              [item.key]: e.target.checked,
            };
          });
        }}
      />
      <BlockContainer toggleData={toggleData} />
    </div>
  );
}

export default App;
