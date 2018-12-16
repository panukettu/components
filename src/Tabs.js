import React from "react";
const TabContext = React.createContext();

function TabConsumer(props) {
  return (
    <TabContext.Consumer {...props}>
      {context => props.children(context)}
    </TabContext.Consumer>
  );
}

export default class Tabs extends React.Component {
  state = {
    activeIndex: 0
  };

  static TabList = props => {
    return (
      <TabConsumer>
        {context => {
          const children = React.Children.map(
            props.children,
            (child, index) => {
              return React.cloneElement(child, {
                isActive: index === context.activeIndex,
                setActive: context.setActive,
                childIndex: index
              });
            }
          );
          return <div className="tabs__list">{children}</div>;
        }}
      </TabConsumer>
    );
  };

  static Tab = ({ isActive, childIndex, setActive, children }) => {
    return (
      <div
        className={`tabs__heading${isActive ? "--active" : ""}`}
        onClick={() => setActive(childIndex)}
      >
        {children}
      </div>
    );
  };

  static Panels = ({ children }) => {
    return (
      <TabConsumer>{context => children[context.activeIndex]}</TabConsumer>
    );
  };

  static Panel = ({ children }) => {
    return <div className="tabs__panel">{children}</div>;
  };

  setActive = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    const contextValue = { activeIndex, setActive: this.setActive };
    return (
      <TabContext.Provider value={contextValue}>
        {this.props.children}
      </TabContext.Provider>
    );
  }
}
