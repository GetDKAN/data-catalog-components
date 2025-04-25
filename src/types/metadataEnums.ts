export enum AccessLevels {
  PUBLIC = "public",
  RESTRICTED = "restricted public",
  NONPUBLIC = "non-public"
}

export enum APFrequencies {
  RP10Y = "R/P10Y",
  RP4Y = "R/P4Y",
  RP1Y = "R/P1Y",
  RP2M = "R/P2M",
  RP35D = "R/P3.5D",
  RP1D = "R/P1D",
  RP2W = "R/P2W",
  RP6M = "R/P6M",
  RP2Y = "R/P2Y",
  RP3Y = "R/P3Y",
  RP033W = "R/P0.33W",
  RP033M = "R/P0.33M",
  RPT1S = "R/PT1S",
  RP1M = "R/P1M",
  RP3M = "R/P3M",
  RP05M = "R/P0.5M",
  RP4M = "R/P4M",
  RP1W = "R/P1W",
  RPT1H = "R/PT1H",
  IRREGULAR = "irregular"
}

export const apFrequencyNames = {
  "R/P10Y": "Decennial",
  "R/P4Y": "Quadrennial",
  "R/P1Y": "Annual",
  "R/P2M": "Bimonthly",
  "R/P3.5D": "Semiweekly",
  "R/P1D": "Daily",
  "R/P2W": "Biweekly",
  "R/P6M": "Semiannual",
  "R/P2Y": "Biennial",
  "R/P3Y": "Triennial",
  "R/P0.33W": "Three times a week",
  "R/P0.33M": "Three times a month",
  "R/PT1S": "Continuously updated",
  "R/P1M": "Monthly",
  "R/P3M": "Quarterly",
  "R/P0.5M": "Semimonthly",
  "R/P4M": "Three times a year",
  "R/P1W": "Weekly",
  "R/PT1H": "Hourly",
  irregular: "Irregular"
}
