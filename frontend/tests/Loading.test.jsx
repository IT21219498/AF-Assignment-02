import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Loading from "../src/components/Loading";

describe("Loading", () => {
  it("renders the loading spinner", () => {
    const { getByText } = render(<Loading />);
    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });
});
