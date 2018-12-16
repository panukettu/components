import React from "react";
import { render, fireEvent } from "react-testing-library";

import Toggle from "./ToggleUsage";

describe("toggle", () => {
  const toggleInput = "toggle-input";
  const toggleOn = "toggle is on";
  const toggleOff = "toggle is off";

  const onToggleFunction = jest.fn();

  it("renders", () => {
    render(<Toggle />);
  });

  it("is off by default", () => {
    const { getByText } = render(<Toggle />);
    getByText(toggleOff);
  });

  it("works without an onToggle function", () => {
    const { getByTestId, getByText } = render(<Toggle />);
    const input = getByTestId(toggleInput);
    fireEvent.click(input);
    getByText(toggleOn);
  });

  it("toggles and calls teh onToggle-function when clicked", () => {
    const { getByTestId, getByText } = render(
      <Toggle onToggle={onToggleFunction} />
    );
    const input = getByTestId(toggleInput);
    fireEvent.click(input);
    getByText(toggleOn);
    expect(onToggleFunction).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  it("toggles back off and calls function twice when clicked twice", () => {
    const { getByTestId, getByText } = render(
      <Toggle onToggle={onToggleFunction} />
    );
    const input = getByTestId(toggleInput);

    fireEvent.click(input);
    getByText(toggleOn);

    fireEvent.click(input);
    getByText(toggleOff);

    expect(onToggleFunction).toHaveBeenCalledTimes(2);
    jest.clearAllMocks();
  });
});
