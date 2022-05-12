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

  test("renders correct results with commas", () => {
    render(<DataTablePageResults totalRows={1500250} limit={25} offset={0} />);
    expect(screen.getByText(/1 - 25 of 1,500,250 rows/)).toBeInTheDocument();
  });
});
