import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataTablePageResults from ".";

describe("<DataTablePageResults />", () => {
  test("renders correct initial results", () => {
    render(<DataTablePageResults totalRows={100} limit={25} offset={0} />);
    expect(screen.getByText(/1 - 25 of 100 rows/)).toBeInTheDocument();
  });

  test("renders correct results on subsequent pages", () => {
    render(<DataTablePageResults totalRows={100} limit={10} offset={10} />);
    expect(screen.getByText(/11 - 20 of 100 rows/)).toBeInTheDocument();
  });

  it("Correctly displays appended viewing to results list", () => {
    expect(viewingWrapper.find("p").text()).toBe("Viewing 41 - 50 of 100 rows");
  });
});
