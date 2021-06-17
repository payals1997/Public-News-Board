import { render, screen } from "@testing-library/react";
import HambergerApp from "./HambergerApp";

test("renders learn react link", () => {
  render(<HambergerApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
