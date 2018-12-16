import React from "react";
import { render, fireEvent } from "react-testing-library";

import Tabs from "./TabsUsage";

describe("tabs", () => {
  it("render", () => {
    const { debug } = render(<Tabs />);
    //   debug();
  });

  it("changes tab when clicked", () => {
    const { getByText } = render(<Tabs />);
    const Tab = getByText("Food");
    fireEvent.click(Tab);
    getByText("Eat this burger");
  });
});
