import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText("test");
	expect(linkElement).toBeInTheDocument();
});

test("test the link", () => {
	const x = 1;
	expect(x == 1);
});
