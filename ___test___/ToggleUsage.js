import React from "react";
import { Toggle } from "../src/index";

const Switch = ({ on, toggle }) => (
  <input
    data-testid="toggle-input"
    type="checkbox"
    onClick={toggle}
    defaultChecked={on}
  />
);

function Usage(props) {
  return (
    <div className="App">
      <Toggle onToggle={props.onToggle}>
        <Toggle.Button data-testid="toggle-button">
          <Switch />
        </Toggle.Button>
        <Toggle.On data-testid="toggle-on">toggle is on</Toggle.On>
        <Toggle.Off data-testid="toggle-off">toggle is off</Toggle.Off>
      </Toggle>
    </div>
  );
}

export default Usage;
