import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataTablePageResults from ".";

const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

describe("<DataTablePageResults />", () => {
  test("renders correctly", async () => {
    const { container } = render(
      <DataTablePageResults totalRows={100} limit={25} offset={0} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("renders correct when 0 results", () => {
    render(<DataTablePageResults totalRows={0} limit={25} offset={0} />);
    expect(screen.getByText(/0 - 0 of 0 rows/)).toBeInTheDocument();
  });
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
