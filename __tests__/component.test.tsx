import { render, screen } from "@testing-library/react";

describe("component test", () => {
  it("render", () => {
    render(<div>hello world</div>);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });
});
