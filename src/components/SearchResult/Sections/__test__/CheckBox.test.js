import CheckBox from "../CheckBox";
import { render, screen, fireEvent } from "@testing-library/react";
import { entryAttr } from "../../../../assets/filter";
import { BrowserRouter } from "react-router-dom";

const setCheck = jest.fn();
const check = {
  status: [],
  productType: [],
};

describe("Checkbox", () => {
  test("should render foam checbox", () => {
    render(
      <BrowserRouter>
        <CheckBox
         
          check={check}
          setCheck={setCheck}
          entryAttr={entryAttr}
        />
      </BrowserRouter>
    );

    const checkboxElement = screen.getByText(/foam/i);
    expect(checkboxElement).toBeInTheDocument();
  });
  test("should render inactive checbox", () => {
    render(
      <BrowserRouter>
        <CheckBox
          
          check={check}
          setCheck={setCheck}
          entryAttr={entryAttr}
        />
      </BrowserRouter>
    );

    const checkboxElement = screen.getByText(/inactive/i);
    expect(checkboxElement).toBeInTheDocument();
  });
});


