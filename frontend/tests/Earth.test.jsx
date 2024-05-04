import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import APOD from "../src/pages/Earth";

describe("Earth", () => {
  it("renders the HeroContainer with the correct video URL", () => {
    const { container } = render(<APOD />);
    const videoElement = container.querySelector("video");
    const sourceElement = videoElement.querySelector("source");

    expect(sourceElement).toHaveAttribute("src", "/src/videos/Earth.mp4");
  });
});
