function calculateOfTotal(limit, numTotalRows, offset) {
  if (limit >= numTotalRows) {
    // There are less rows than the max limit.
    return numTotalRows;
  } else if (limit + offset >= numTotalRows) {
    // We are on the last page.
    return numTotalRows;
  } else if (offset === 0) {
    // We are on page 1.
    return limit;
  } else {
    // We are a page of offset but show results up to limit.
    return offset + limit;
  }
}

export function datatablePageResults(totalRows, limit, offset, toLocale) {
  const page = offset / limit;
  let startTotal = 0;
  const numTotal = parseInt(totalRows);
  let ofTotal = calculateOfTotal(limit, numTotal, offset);

  if (numTotal > 0) {
    startTotal = page * limit + 1;
  }

  if (toLocale) {
    return {
      startTotal: startTotal.toLocaleString(),
      ofTotal: ofTotal.toLocaleString(),
      numTotalRows: numTotal.toLocaleString(),
    };
  } else {
    return {
      startTotal: startTotal,
      ofTotal: ofTotal,
      numTotalRows: numTotal,
    };
  }
}
