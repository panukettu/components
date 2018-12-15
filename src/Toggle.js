import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";
import ReactDOM from "react-dom";

const ToggleContext = React.createContext();

function ToggleConsumer(props) {
  return (
    <ToggleContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(
            `Toggle compound components cannot be rendered outside the Toggle component`
          );
        }
        return props.children(context);
      }}
    </ToggleContext.Consumer>
  );
}

class Toggle extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  };

  static On = ({ children }) => (
    <ToggleConsumer>{({ on }) => (on ? children : null)}</ToggleConsumer>
  );

  static Off = ({ children }) => (
    <ToggleConsumer>{({ on }) => (on ? null : children)}</ToggleConsumer>
  );

  static Button = ({ children }) => {
    return (
      <ToggleConsumer>
        {context => {
          const withProps = React.Children.map(children, child => {
            return React.cloneElement(child, {
              toggle: context.toggle,
              on: context.on
            });
          });
          return withProps;
        }}
      </ToggleConsumer>
    );
  };

  render() {
    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, toggle: this.toggle }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default Toggle;
