import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const mockedOnsearchHandle = jest.fn();
describe("Search", () => {
  test("should render input element", () => {
    render(
      <BrowserRouter>
        <Header onSearchHandle={mockedOnsearchHandle} />
      </BrowserRouter>
    );

    const inputElement = screen.getAllByPlaceholderText(/input search text/i);
    expect(inputElement.length).toEqual(1);
  });
  test("should render search button", () => {
    const { container } = render(
      <BrowserRouter>
        <Header onSearchHandle={mockedOnsearchHandle} />
      </BrowserRouter>
    );

    const button = container.querySelector(".ant-input-search-button");

    expect(button).toBeInTheDocument();
  });
});
