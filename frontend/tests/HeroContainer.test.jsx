import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import HeroContainer from "../src/components/HeroContainer";

describe("HeroContainer", () => {
  it("renders the video element with the correct source", () => {
    const videoUrl = "https://example.com/video.mp4";
    const { getByText } = render(<HeroContainer url={videoUrl} />);
    const videoElement = getByText(
      "Your browser does not support the video tag."
    );

    expect(videoElement).toBeInTheDocument();
    expect(videoElement.querySelector("source")).toHaveAttribute(
      "src",
      videoUrl
    );
  });

  it("renders the children elements", () => {
    const children = <div data-testid='children-element'>Hello, World!</div>;
    const { getByTestId } = render(
      <HeroContainer url='https://example.com/video.mp4'>
        {children}
      </HeroContainer>
    );
    const childrenElement = getByTestId("children-element");

    expect(childrenElement).toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    const { container } = render(
      <HeroContainer url='https://example.com/video.mp4' />
    );
    const containerElement = container.firstChild;

    expect(containerElement).toHaveClass("relative", "h-screen");
    expect(containerElement.querySelector("video")).toHaveClass(
      "absolute",
      "inset-0",
      "w-full",
      "object-cover"
    );
    expect(containerElement.querySelectorAll("div")[0]).toHaveClass(
      "absolute",
      "inset-0",
      "bg-black",
      "opacity-50"
    );
    expect(containerElement.querySelectorAll("div")[1]).toHaveClass(
      "absolute",
      "inset-0"
    );
  });
});
