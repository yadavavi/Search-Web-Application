import { render, screen } from "@testing-library/react";
 import Home from "../Home";
 import { BrowserRouter } from "react-router-dom";

 const check = {
    status: [],
    productType: [],
  };

 describe("Header", () => {
   test("should render browse by product type", () => {
     render(
       <BrowserRouter>
         <Home entryAttr={check} />
       </BrowserRouter>
     );

    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
   });
 });
