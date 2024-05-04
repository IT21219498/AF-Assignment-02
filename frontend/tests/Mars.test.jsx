import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Mars from "../src/pages/Mars";

describe("Mars", () => {
  it("renders the HeroContainer with the correct video URL", () => {
    const { container } = render(<Mars />);
    const videoElement = container.querySelector("video");
    const sourceElement = videoElement.querySelector("source");

    expect(sourceElement).toHaveAttribute("src", "/src/videos/Mars.mp4");
  });
});
