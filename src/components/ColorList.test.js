import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
  const colorList = screen.getByText(/colors/i);
  expect(colorList).toBeDefined();
  expect(colorList).not.toBe(null);
  screen.debug();
});

let colorsTest = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={colorsTest} />);
  const colorList = screen.getByText(/colors/i);
  expect(colorList).toBeDefined();
  expect(colorList).not.toBe(null);
  screen.debug();
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList colors={colorsTest} editing={true} />);
  let colorEdit = screen.queryAllByTestId("editMenu");
  expect(colorEdit).not.toBe(null);
  expect(colorEdit).toHaveLength(1);
  rerender(<ColorList colors={colorsTest} editing={false} />);
  colorEdit = screen.queryAllByTestId("editMenu");
  expect(colorEdit).toHaveLength(0);
  screen.debug();
});
