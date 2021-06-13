import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColorService as mockFetchColor } from "../services/fetchColorService";

jest.mock("../services/fetchColorService");

test("Renders without errors", () => {
  mockFetchColor.mockResolvedValueOnce({
    data: [],
  });
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  mockFetchColor.mockResolvedValueOnce({
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
    ],
  });
  render(<BubblePage />);
  await waitFor(() => {
    const colorList = screen.queryAllByTestId("color");
    expect(colorList).toHaveLength(1);
  });
});