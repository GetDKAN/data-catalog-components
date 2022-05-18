import calcDatatablePageResults from "./index";

describe("datatablePageResults", () => {
  test("return 0", () => {
    const results = calcDatatablePageResults(0, 0, 0, false);
    expect(results.startTotal).toEqual(0);
    expect(results.ofTotal).toEqual(0);
    expect(results.numTotalRows).toEqual(0);
  });

  test("limit higher than total rows", () => {
    const results = calcDatatablePageResults(5, 20, 0, false);
    expect(results.startTotal).toEqual(1);
    expect(results.ofTotal).toEqual(5);
    expect(results.numTotalRows).toEqual(5);
  });

  test("last page", () => {
    const results = calcDatatablePageResults(205, 20, 200, false);
    expect(results.startTotal).toEqual(201);
    expect(results.ofTotal).toEqual(205);
    expect(results.numTotalRows).toEqual(205);
  });

  test("page 1", () => {
    const results = calcDatatablePageResults(205, 20, 0, false);
    expect(results.startTotal).toEqual(1);
    expect(results.ofTotal).toEqual(20);
    expect(results.numTotalRows).toEqual(205);
  });

  test("random page", () => {
    const results = calcDatatablePageResults(205, 20, 40, false);
    expect(results.startTotal).toEqual(41);
    expect(results.ofTotal).toEqual(60);
    expect(results.numTotalRows).toEqual(205);
  });

  test("returns with comma", () => {
    const results = calcDatatablePageResults(2000, 20, 1000, true);
    expect(results.startTotal).toEqual("1,001");
    expect(results.ofTotal).toEqual("1,020");
    expect(results.numTotalRows).toEqual("2,000");
  });
});
