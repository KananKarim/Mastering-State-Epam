import { render } from "@testing-library/react";
import Subtitle from "../components/Subtitle";

describe("Subtitle", () => {
  it("renders the subtitle text with the correct color", () => {
    const { getByText } = render(
      <Subtitle subtitle="Test subtitle" color="red" />
    );
    const subtitleElement = getByText("Test subtitle");
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveStyle("color: rgb(255, 0, 0)");
  });
});
