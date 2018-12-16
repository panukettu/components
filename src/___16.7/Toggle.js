import React, { useState, useMemo, useCallback } from "react";
import { useEffectAfterMount, useToggleContext } from "./Hooks";

const ToggleContext = React.createContext();

function Toggle(props) {
  const [on, setOn] = useState(() => props.defaultValue || false);
  const toggle = useCallback(() => setOn(on => !on), []);

  useEffectAfterMount(
    () => {
      props.onToggle(on);
    },
    [on]
  );

  const value = useMemo(() => ({ on, toggle }), [on]);
  return (
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
}

Toggle.On = ({ children }) => {
  const { on } = useToggleContext();
  return on ? children : null;
};

Toggle.Off = ({ children }) => {
  const { on } = useToggleContext();
  return on ? null : children;
};

Toggle.Button = ({ children }) => {
  const context = useToggleContext();
  const withProps = React.Children.map(children, child => {
    return React.cloneElement(child, {
      toggle: context.toggle,
      on: context.on
    });
  });
  return withProps;
};

export default Toggle;
