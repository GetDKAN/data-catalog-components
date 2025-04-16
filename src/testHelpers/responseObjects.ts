export const themeList: Array<{
  identifier: string;
  data: string;
}> = [
    {
      "identifier": "1234",
      "data": "DKAN"
    },
    {
      "identifier": "4567",
      "data": "React"
    },
    {
      "identifier": "abcd",
      "data": "Parcel"
    },
    {
      "identifier": "efgh",
      "data": "Jest"
    },
  ];

export const keywordList: Array<{
  identifier: string;
  data: string;
}> = [
    {
      "identifier": "0987",
      "data": "api"
    },
    {
      "identifier": "6543",
      "data": "js"
    },
    {
      "identifier": "qwerty",
      "data": "php"
    },
    {
      "identifier": "asdfg",
      "data": "css"
    },
  ];

export const invalidSchemaId = (schema: String, id: String): { message: string; status: number; timestamp: string } => (
  {
    "message": `Error retrieving metadata: ${schema} ${id} not found.`,
    "status": 404,
    "timestamp": "2025-04-15T13:55:09-04:00"
  }
);

export const baseDataset = [
  {
    "@type": "dcat:Dataset",
    "accessLevel": "public",
    "contactPoint": {
      "fn": "Jane Doe",
      "hasEmail": "mailto:data.admin@example.com"
    },
    "description": "Data on bike lanes in Florida. Florida's bike lanes provide a safe and designated space for riders to pedal along the coastlines, through bustling urban areas, and amidst tranquil suburban neighborhoods. Whether navigating the bustling streets of Miami, cruising alongside the white sandy beaches of the Gulf Coast, or meandering through the picturesque Everglades, cyclists in Florida enjoy a network of bike lanes that cater to both recreational riders and daily commuters. With a combination of dedicated paths, shared roadways, and expansive trails, Florida's bike lanes contribute to a healthier and more sustainable lifestyle, encouraging residents and visitors alike to embrace the joy of two-wheeled travel under the warm Florida sun.",
    "distribution": [
      {
        "@type": "dcat:Distribution",
        "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
        "mediaType": "text/csv",
        "format": "csv",
        "title": "Florida Bike Lanes"
      }
    ],
    "identifier": "12345",
    "issued": "2016-06-22",
    "license": "http://opendatacommons.org/licenses/by/1.0/",
    "modified": "2016-06-22",
    "publisher": {
      "@type": "org:Organization",
      "name": "State Economic Council"
    },
    "spatial": "Florida",
    "theme": [
      "Transportation",
      "City Planning"
    ],
    "title": "Florida Bike Lanes ",
    "keyword": [
      "bike-lanes",
      "streets",
      "infrastructure"
    ]
  },
  {
    "@type": "dcat:Dataset",
    "accessLevel": "public",
    "contactPoint": {
      "fn": "Jane Doe",
      "hasEmail": "mailto:data.admin@example.com"
    },
    "description": "In late 2016, the URA, in conjunction with Reinvestment Fund, completed the 2016 Market Value Analysis (MVA) for the City of Pittsburgh. The Market Value Analysis (MVA) offers an approach for community revitalization; it recommends applying interventions not only to where there is a need for development but also in places where public investment can stimulate private market activity and capitalize on larger public investment activities. The MVA is a unique tool for characterizing markets because it creates an internally referenced index of a municipality’s residential real estate market. It identifies areas that are the highest demand markets as well as areas of greatest distress, and the various markets types between. The MVA offers insight into the variation in market strength and weakness within and between traditional neighborhood boundaries because it uses Census block groups as the unit of analysis. Where market types abut each other on the map becomes instructive about the potential direction of market change, and ultimately, the appropriateness of types of investment or intervention strategies.",
    "distribution": [
      {
        "@type": "dcat:Distribution",
        "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
        "mediaType": "application/zip",
        "format": "zip",
        "title": "MVA Geographic Data 2016"
      },
      {
        "@type": "dcat:Distribution",
        "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
        "mediaType": "application/pdf",
        "format": "pdf",
        "title": "2016 MVA Data Dictionary"
      },
      {
        "@type": "dcat:Distribution",
        "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
        "mediaType": "application/zip",
        "format": "zip",
        "title": "Map files"
      }
    ],
    "identifier": "fb3525f2-d32a-451e-8869-906ed41f7695",
    "issued": "2016-04-21",
    "keyword": [
      "foreclosures",
      "economy",
      "affordable-housing",
      "housing-markets"
    ],
    "license": "http://www.opendefinition.org/licenses/cc-by",
    "modified": "2016-04-21",
    "publisher": {
      "@type": "org:Organization",
      "name": "State Economic Council"
    },
    "spatial": "Pittsburgh, PA",
    "temporal": "2016/P1Y",
    "theme": [
      "Finance and Budgeting"
    ],
    "title": "Market Value Analysis - Urban Redevelopment Authority"
  },
];

export const showRefIdDataset = [
  {
    "@type": "dcat:Dataset",
    "accessLevel": "public",
    "contactPoint": {
      "fn": "Jane Doe",
      "hasEmail": "mailto:data.admin@example.com"
    },
    "description": "Data on bike lanes in Florida. Florida's bike lanes provide a safe and designated space for riders to pedal along the coastlines, through bustling urban areas, and amidst tranquil suburban neighborhoods. Whether navigating the bustling streets of Miami, cruising alongside the white sandy beaches of the Gulf Coast, or meandering through the picturesque Everglades, cyclists in Florida enjoy a network of bike lanes that cater to both recreational riders and daily commuters. With a combination of dedicated paths, shared roadways, and expansive trails, Florida's bike lanes contribute to a healthier and more sustainable lifestyle, encouraging residents and visitors alike to embrace the joy of two-wheeled travel under the warm Florida sun.",
    "distribution": [
      {
        "identifier": "357338d7-4abc-51cd-b3b4-2762edca234d",
        "data": {
          "@type": "dcat:Distribution",
          "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
          "mediaType": "text/csv",
          "format": "csv",
          "title": "Florida Bike Lanes",
          "%Ref:downloadURL": [
            {
              "identifier": "3a187a87dc6cd47c48b6b4c4785224b7__1744697490__source",
              "data": {
                "filePath": "https://h-o.st/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
                "identifier": "3a187a87dc6cd47c48b6b4c4785224b7",
                "mimeType": "text/csv",
                "perspective": "source",
                "version": "1744697490",
                "checksum": null
              }
            }
          ]
        }
      }
    ],
    "identifier": "cedcd327-4e5d-43f9-8eb1-c11850fa7c55",
    "issued": "2016-06-22",
    "license": "http://opendatacommons.org/licenses/by/1.0/",
    "modified": "2016-06-22",
    "publisher": {
      "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
      "data": {
        "@type": "org:Organization",
        "name": "State Economic Council"
      }
    },
    "spatial": "Florida",
    "theme": [
      {
        "identifier": "35648bca-83ec-5580-a193-86d716e1e284",
        "data": "Transportation"
      },
      {
        "identifier": "3c23032d-47c6-58fc-be0a-ef3fbaa54865",
        "data": "City Planning"
      }
    ],
    "title": "Florida Bike Lanes ",
    "keyword": [
      {
        "identifier": "d36530dd-6bea-516e-8b32-7b3bbbcd1bd9",
        "data": "bike-lanes"
      },
      {
        "identifier": "1981b385-a6a9-561c-a83a-15395c19c97d",
        "data": "streets"
      },
      {
        "identifier": "4d280d80-a41a-514f-8ae0-6859bb222055",
        "data": "infrastructure"
      }
    ],
    "%modified": "2025-04-15T06:11:29+0000"
  },
  {
    "@type": "dcat:Dataset",
    "accessLevel": "public",
    "contactPoint": {
      "fn": "Jane Doe",
      "hasEmail": "mailto:data.admin@example.com"
    },
    "description": "In late 2016, the URA, in conjunction with Reinvestment Fund, completed the 2016 Market Value Analysis (MVA) for the City of Pittsburgh. The Market Value Analysis (MVA) offers an approach for community revitalization; it recommends applying interventions not only to where there is a need for development but also in places where public investment can stimulate private market activity and capitalize on larger public investment activities. The MVA is a unique tool for characterizing markets because it creates an internally referenced index of a municipality’s residential real estate market. It identifies areas that are the highest demand markets as well as areas of greatest distress, and the various markets types between. The MVA offers insight into the variation in market strength and weakness within and between traditional neighborhood boundaries because it uses Census block groups as the unit of analysis. Where market types abut each other on the map becomes instructive about the potential direction of market change, and ultimately, the appropriateness of types of investment or intervention strategies.",
    "distribution": [
      {
        "identifier": "ac205c20-d52e-5af7-87bd-7d93ed9f0be1",
        "data": {
          "@type": "dcat:Distribution",
          "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
          "mediaType": "application/zip",
          "format": "zip",
          "title": "MVA Geographic Data 2016",
          "%Ref:downloadURL": [
            {
              "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8__1744697490__source",
              "data": {
                "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
                "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8",
                "mimeType": "application/zip",
                "perspective": "source",
                "version": "1744697490",
                "checksum": null
              }
            }
          ]
        }
      },
      {
        "identifier": "c036e9da-80c9-54fc-beac-dddf72a04bbf",
        "data": {
          "@type": "dcat:Distribution",
          "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
          "mediaType": "application/pdf",
          "format": "pdf",
          "title": "2016 MVA Data Dictionary",
          "%Ref:downloadURL": [
            {
              "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2__1744697490__source",
              "data": {
                "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
                "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2",
                "mimeType": "application/pdf",
                "perspective": "source",
                "version": "1744697490",
                "checksum": null
              }
            }
          ]
        }
      },
      {
        "identifier": "a6475700-0a4a-5501-ae59-80dcdc286d8f",
        "data": {
          "@type": "dcat:Distribution",
          "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
          "mediaType": "application/zip",
          "format": "zip",
          "title": "Map files",
          "%Ref:downloadURL": [
            {
              "identifier": "60d78924087b2516acf1e57ff1fc8b83__1744697490__source",
              "data": {
                "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
                "identifier": "60d78924087b2516acf1e57ff1fc8b83",
                "mimeType": "application/zip",
                "perspective": "source",
                "version": "1744697490",
                "checksum": null
              }
            }
          ]
        }
      }
    ],
    "identifier": "fb3525f2-d32a-451e-8869-906ed41f7695",
    "issued": "2016-04-21",
    "keyword": [
      {
        "identifier": "c6a43d4c-7311-5c70-a7d3-4918cb1cfdd7",
        "data": "foreclosures"
      },
      {
        "identifier": "cf43cf96-f037-516f-974d-4330bcdbc1f9",
        "data": "economy"
      },
      {
        "identifier": "51fb372a-2f48-5e4b-b8af-f984a36fe90f",
        "data": "affordable-housing"
      },
      {
        "identifier": "0de06c9a-e413-5277-af83-57b6c3e46513",
        "data": "housing-markets"
      }
    ],
    "license": "http://www.opendefinition.org/licenses/cc-by",
    "modified": "2016-04-21",
    "publisher": {
      "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
      "data": {
        "@type": "org:Organization",
        "name": "State Economic Council"
      }
    },
    "spatial": "Pittsburgh, PA",
    "temporal": "2016/P1Y",
    "theme": [
      {
        "identifier": "b1f822b6-ae46-584d-9268-52ca95a3f8ec",
        "data": "Finance and Budgeting"
      }
    ],
    "title": "Market Value Analysis - Urban Redevelopment Authority",
    "%modified": "2025-04-15T06:11:29+0000"
  },
];

export const searchResults = {
  "total": "10",
  "results": {
  "dkan_dataset/1f2042ad-c513-4fcf-a933-cae6c6fd35e6": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "accrualPeriodicity": "R/P1Y",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "Statistics on U.S. smoking rates and tobacco taxation rates for all fifty states.\nSource: Centers for Disease Control and Prevention, 2015.\nIn 2019, the Centers for Disease Control and Prevention (CDC) reported that approximately 14% of adults in the U.S. were current cigarette smokers. While this figure represented a significant decline from previous decades, the prevalence of alternative tobacco products, such as e-cigarettes, among youth garnered attention. The use of vaping products increased, contributing to concerns about nicotine addiction and potential health risks, particularly among adolescents.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/1f2042ad-c513-4fcf-a933-cae6c6fd35e6/CDCSmokingRates.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "This dataset highlights critical trends in adult total and per capita consumption of both combustible (cigarettes, little cigars, small cigars, pipe tobacco, roll-your-own tobacco) tobacco products and smokeless (chewing tobacco and snuff) tobacco.",
  "title": "U.S. Adult Smoking Rate",
  "%Ref:downloadURL": [
  {
  "identifier": "e2771c9a17481d9be608b5705fd6c068__1744783635__source",
  "data": {}
  }
  ]
  }
  ],
  "identifier": "1f2042ad-c513-4fcf-a933-cae6c6fd35e6",
  "issued": "2018-02-10",
  "keyword": [
  "demographics",
  "health"
  ],
  "license": "http://opendatacommons.org/licenses/by/1.0/",
  "modified": "2018-02-10",
  "publisher": {
  "@type": "org:Organization",
  "name": "National Health Council"
  },
  "spatial": "POLYGON ((-127.705078125 24.206889622398, -127.705078125 50.625073063414, -63.193359375 50.625073063414, -63.193359375 24.206889622398))",
  "theme": [
  "Health Care"
  ],
  "title": "U.S. Tobacco Usage Statistics",
  "%Ref:theme": [
  {
  "identifier": "ebea68c6-14b5-5a68-ac94-955e69666ad7",
  "data": "Health Care"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "121fb1d6-032c-50a7-9a4c-97cb9a6908a1",
  "data": "demographics"
  },
  {
  "identifier": "2d2fb90b-c0d3-5292-b2fe-68a13e42c76f",
  "data": "health"
  }
  ],
  "%Ref:publisher": {
  "identifier": "806cb23a-6c56-532a-ae96-b27cf7499090",
  "data": {
  "@type": "org:Organization",
  "name": "National Health Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "3af97f97-f7fc-52c3-a8d6-a6678bd6acc7",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/1f2042ad-c513-4fcf-a933-cae6c6fd35e6/CDCSmokingRates.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "This dataset highlights critical trends in adult total and per capita consumption of both combustible (cigarettes, little cigars, small cigars, pipe tobacco, roll-your-own tobacco) tobacco products and smokeless (chewing tobacco and snuff) tobacco.",
  "title": "U.S. Adult Smoking Rate",
  "%Ref:downloadURL": [
  {
  "identifier": "e2771c9a17481d9be608b5705fd6c068__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/1f2042ad-c513-4fcf-a933-cae6c6fd35e6/CDCSmokingRates.csv",
  "identifier": "e2771c9a17481d9be608b5705fd6c068",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/5dc1cfcf-8028-476c-a020-f58ec6dd621c": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "Monthly gold prices (USD) in London from Bundesbank. General: 1 ounce of fine gold = 31.1034768g. Method of calculation: Since 1 April 1968, calculated from the daily morning fixing; From January 1950 to 21 March 1954, calculated using the Bank of England's gold purchasing price (1 ounce of fine = pound 12.40) in connection with the average exchange rate for the pound in New York (up to the end of 1952; source: Federal Reserve Bulletin) and, from January 1953, midpoint exchange rates for the US dollar in London (source: Financial Times (FT)). From 22 March 1954 to December 1959, calculated using the fixing price for gold bars of approx. 12 1/2 kg and 995/1000 fineness and over (so-called standard bars) according to data from Metallgesellschaft AG, Frankfurt am Main, in connection with the average midpoint exchange rates for the US dollar in London (source: FT). From January 1960 to 14 March 1968, average fixing price for standard bars as specified in the Bank of England's Quarterly Bulletin. On 15 March 1968, fixing price suspended. Gold market split into an official (reserved for central banks) and a free market as a result of the Washington Communique of 17 March 1968. Gold trading suspended from 18 to 29 March 1968. Sources for daily prices: April 1968 - March 1974: FT; April 1974 - December 1980: Samuel Montagu &amp; Co. Ltd.; January 1981 - December 2005: FT; January 2006 - present: Reuters. Comment on 1968-03: Average from 1 to 14 March 1968.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/5dc1cfcf-8028-476c-a020-f58ec6dd621c/data.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "Table of Gold Prices",
  "%Ref:downloadURL": [
  {
  "identifier": "0821c20012819a030c6fc33f6b329643__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/5dc1cfcf-8028-476c-a020-f58ec6dd621c/data.csv",
  "identifier": "0821c20012819a030c6fc33f6b329643",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "5dc1cfcf-8028-476c-a020-f58ec6dd621c",
  "issued": "2010-06-06",
  "keyword": [
  "economy",
  "price",
  "time-series"
  ],
  "license": "http://opendefinition.org/licenses/odc-pddl/",
  "modified": "2010-06-06",
  "publisher": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  },
  "spatial": "POLYGON ((-0.56854248046875 51.253320526331, -0.56854248046875 51.725326868065, 0.3076171875 51.725326868065, 0.3076171875 51.253320526331))",
  "temporal": "1950-01-01T05:00:00+00:00/1950-01-01T05:00:00+00:00",
  "theme": [
  "Finance and Budgeting"
  ],
  "title": "Gold Prices in London 1950-2008 (Monthly)",
  "%Ref:theme": [
  {
  "identifier": "b1f822b6-ae46-584d-9268-52ca95a3f8ec",
  "data": "Finance and Budgeting"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "cf43cf96-f037-516f-974d-4330bcdbc1f9",
  "data": "economy"
  },
  {
  "identifier": "476d534b-e212-504d-82c9-5d21df655329",
  "data": "price"
  },
  {
  "identifier": "88232224-58d8-5dec-8cf3-e38426566501",
  "data": "time-series"
  }
  ],
  "%Ref:publisher": {
  "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
  "data": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "1aba8a70-e7c8-57d8-b462-f01cd0e7c584",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/5dc1cfcf-8028-476c-a020-f58ec6dd621c/data.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "Table of Gold Prices",
  "%Ref:downloadURL": [
  {
  "identifier": "0821c20012819a030c6fc33f6b329643__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/5dc1cfcf-8028-476c-a020-f58ec6dd621c/data.csv",
  "identifier": "0821c20012819a030c6fc33f6b329643",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/74c06c81-9fe0-439c-aba9-cd5c980a6df4": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "US National Foreclosure Statistics - By State - January 2012. In January 2012, the United States experienced a lingering aftermath of the housing market collapse that began in 2008, as reflected in the national foreclosure statistics. During this period, foreclosure rates remained elevated, and a considerable number of properties were repossessed by lenders. The statistics painted a sobering picture of the challenges faced by American households, highlighting the continued ripple effects of the subprime mortgage crisis.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/74c06c81-9fe0-439c-aba9-cd5c980a6df4/us_foreclosures_jan_2012_by_state.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "US National Foreclosure Statistics - By State - January 2012",
  "title": "1-2012-Foreclosures-by-State",
  "%Ref:downloadURL": [
  {
  "identifier": "cd8897e4815043c8aa3ac49f8e3e7ffd__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/74c06c81-9fe0-439c-aba9-cd5c980a6df4/us_foreclosures_jan_2012_by_state.csv",
  "identifier": "cd8897e4815043c8aa3ac49f8e3e7ffd",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "74c06c81-9fe0-439c-aba9-cd5c980a6df4",
  "issued": "2012-08-10",
  "keyword": [
  "economy",
  "politics",
  "transparency"
  ],
  "modified": "2012-08-10",
  "publisher": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  },
  "spatial": "POLYGON ((-126.9140625 24.046463999667, -126.9140625 50.625073063414, -65.56640625 50.625073063414, -65.56640625 24.046463999667))",
  "temporal": "2012-01-01T05:00:00+00:00/2012-01-01T05:00:00+00:00",
  "theme": [
  "Finance and Budgeting"
  ],
  "title": "US National Foreclosure Statistics January 2012",
  "%Ref:theme": [
  {
  "identifier": "b1f822b6-ae46-584d-9268-52ca95a3f8ec",
  "data": "Finance and Budgeting"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "cf43cf96-f037-516f-974d-4330bcdbc1f9",
  "data": "economy"
  },
  {
  "identifier": "516f6cda-0793-5746-9437-d962dc90c762",
  "data": "politics"
  },
  {
  "identifier": "5adccd39-ddb8-5efe-b60e-81498acb9e89",
  "data": "transparency"
  }
  ],
  "%Ref:publisher": {
  "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
  "data": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "9cf11e58-7fd2-5d5b-81c1-3141965b490c",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/74c06c81-9fe0-439c-aba9-cd5c980a6df4/us_foreclosures_jan_2012_by_state.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "US National Foreclosure Statistics - By State - January 2012",
  "title": "1-2012-Foreclosures-by-State",
  "%Ref:downloadURL": [
  {
  "identifier": "cd8897e4815043c8aa3ac49f8e3e7ffd__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/74c06c81-9fe0-439c-aba9-cd5c980a6df4/us_foreclosures_jan_2012_by_state.csv",
  "identifier": "cd8897e4815043c8aa3ac49f8e3e7ffd",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/934400f2-a5dc-4abf-bf16-3f17335888d3": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "Wisconsin's polling places serve as the cornerstone of the state's democratic process, providing citizens with the essential means to exercise their right to vote. Dotted across the diverse landscapes of cities, towns, and rural areas, these polling locations are meticulously organized to facilitate fair and accessible elections. On election days, voters converge at designated sites equipped with trained poll workers, electronic voting machines, and paper ballots, ensuring a smooth and secure voting experience. Wisconsin's commitment to democratic values is evident in the accessibility measures implemented, such as early voting options and absentee balloting, providing flexibility to accommodate the diverse schedules of its residents. The state's polling places embody the collective voice of its people, playing a pivotal role in shaping the political landscape and fostering civic engagement.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/934400f2-a5dc-4abf-bf16-3f17335888d3/polling-places.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "List of polling places in Madison, WI.",
  "title": "Madison Polling Places",
  "%Ref:downloadURL": [
  {
  "identifier": "b5c378447521601cd20059ca774c4b6c__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/934400f2-a5dc-4abf-bf16-3f17335888d3/polling-places.csv",
  "identifier": "b5c378447521601cd20059ca774c4b6c",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "934400f2-a5dc-4abf-bf16-3f17335888d3",
  "issued": "2013-02-11",
  "keyword": [
  "election"
  ],
  "license": "http://opendefinition.org/licenses/cc-by/",
  "modified": "2013-02-11",
  "publisher": {
  "@type": "org:Organization",
  "name": "Committee on International Affairs"
  },
  "theme": [
  "City Planning"
  ],
  "spatial": "POLYGON ((-90.415429 46.568478, -90.229213 46.508231, -90.119674 46.338446, -89.09001 46.135799, -88.662808 45.987922, -88.531362 46.020784, -88.10416 45.922199, -87.989145 45.796229, -87.781021 45.675736, -87.791975 45.500474, -87.885083 45.363551, -87.649574 45.341643, -87.742682 45.199243, -87.589328 45.095181, -87.627666 44.974688, -87.819359 44.95278, -87.983668 44.722749, -88.043914 44.563917, -87.928898 44.536533, -87.775544 44.640595, -87.611236 44.837764, -87.403112 44.914442, -87.238804 45.166381, -87.03068 45.22115, -87.047111 45.089704, -87.189511 44.969211, -87.468835 44.552964, -87.545512 44.322932, -87.540035 44.158624, -87.644097 44.103854, -87.737205 43.8793, -87.704344 43.687607, -87.791975 43.561637, -87.912467 43.249452, -87.885083 43.002989, -87.76459 42.783912, -87.802929 42.493634, -88.788778 42.493634, -90.639984 42.510065, -90.711184 42.636034, -91.067185 42.75105, -91.143862 42.909881, -91.176724 43.134436, -91.056231 43.254929, -91.204109 43.353514, -91.215062 43.501391, -91.269832 43.616407, -91.242447 43.775238, -91.43414 43.994316, -91.592971 44.032654, -91.877772 44.202439, -91.927065 44.333886, -92.233773 44.443425, -92.337835 44.552964, -92.545959 44.569394, -92.808852 44.750133, -92.737652 45.117088, -92.75956 45.286874, -92.644544 45.440228, -92.770513 45.566198, -92.885529 45.577151, -92.869098 45.719552, -92.639067 45.933153, -92.354266 46.015307, -92.29402 46.075553, -92.29402 46.667063, -92.091373 46.749217, -92.014696 46.705401, -91.790141 46.694447, -91.09457 46.864232, -90.837154 46.95734, -90.749522 46.88614, -90.886446 46.754694, -90.55783 46.584908))",
  "title": "Wisconsin Polling Places",
  "%Ref:theme": [
  {
  "identifier": "3c23032d-47c6-58fc-be0a-ef3fbaa54865",
  "data": "City Planning"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "91fd5330-9540-5085-bbc1-e7c3373836f1",
  "data": "election"
  }
  ],
  "%Ref:publisher": {
  "identifier": "3621ae3b-030b-541b-999e-38ddbf00df8a",
  "data": {
  "@type": "org:Organization",
  "name": "Committee on International Affairs"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "02e44f2f-06d7-5c1f-92c0-a7f901f6765e",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/934400f2-a5dc-4abf-bf16-3f17335888d3/polling-places.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "List of polling places in Madison, WI.",
  "title": "Madison Polling Places",
  "%Ref:downloadURL": [
  {
  "identifier": "b5c378447521601cd20059ca774c4b6c__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/934400f2-a5dc-4abf-bf16-3f17335888d3/polling-places.csv",
  "identifier": "b5c378447521601cd20059ca774c4b6c",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/95f8eac4-fd1f-4b35-8472-5c87e9425dfa": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "accrualPeriodicity": "R/PT1S",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "Asthma prevalence remains a significant public health concern worldwide, affecting people of all ages and backgrounds. Globally, the World Health Organization estimates that over 339 million individuals grapple with asthma, a chronic respiratory condition characterized by recurrent episodes of wheezing, breathlessness, chest tightness, and coughing. The prevalence of asthma varies across regions and is influenced by factors such as genetics, environmental exposures, and socio-economic conditions. In some developed nations, urbanization and increased exposure to allergens contribute to higher rates of asthma. Moreover, disparities in healthcare access and quality can impact the prevalence and management of asthma, with vulnerable populations often facing greater challenges. Efforts to address asthma prevalence involve public health initiatives, education, and research aimed at understanding the multifaceted factors influencing the condition, ultimately contributing to better prevention and management strategies.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/Asthma-Prevalence-Map-2017.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Asthma prevalence by location",
  "%Ref:downloadURL": [
  {
  "identifier": "6e5a8b0e5f9ae95d1e239844aaab2db4__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/Asthma-Prevalence-Map-2017.csv",
  "identifier": "6e5a8b0e5f9ae95d1e239844aaab2db4",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "95f8eac4-fd1f-4b35-8472-5c87e9425dfa",
  "issued": "2017-08-01",
  "keyword": [
  "asthma"
  ],
  "license": "http://opendefinition.org/licenses/odc-odbl/",
  "modified": "2019-06-06",
  "publisher": {
  "@type": "org:Organization",
  "name": "National Health Council"
  },
  "theme": [
  "Health Care"
  ],
  "temporal": "2017-01-01T05:00:00+00:00/2017-12-31T05:00:00+00:00",
  "title": "Asthma Prevalence",
  "%Ref:theme": [
  {
  "identifier": "ebea68c6-14b5-5a68-ac94-955e69666ad7",
  "data": "Health Care"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "5f0f72cb-fd04-5f13-8a3a-44aaae62b165",
  "data": "asthma"
  }
  ],
  "%Ref:publisher": {
  "identifier": "806cb23a-6c56-532a-ae96-b27cf7499090",
  "data": {
  "@type": "org:Organization",
  "name": "National Health Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "4f58a612-a25b-595b-acfa-62eb7b7b7a14",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/Asthma-Prevalence-Map-2017.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Asthma prevalence by location",
  "%Ref:downloadURL": [
  {
  "identifier": "6e5a8b0e5f9ae95d1e239844aaab2db4__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/Asthma-Prevalence-Map-2017.csv",
  "identifier": "6e5a8b0e5f9ae95d1e239844aaab2db4",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/c9e2d352-e24c-4051-9158-f48127aa5692": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "This data created by the National Democratic Institute (NDI) in partnership with Development Seed, a Washington, D.C.-based online communications consultancy, is designed to make data from the August 20, 2009, Afghanistan presidential election accessible and transparent.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/c9e2d352-e24c-4051-9158-f48127aa5692/district_centerpoints.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "District Names",
  "%Ref:downloadURL": [
  {
  "identifier": "0310f6c2d28bbee5de1211e5b5bb0b1c__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/c9e2d352-e24c-4051-9158-f48127aa5692/district_centerpoints.csv",
  "identifier": "0310f6c2d28bbee5de1211e5b5bb0b1c",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "c9e2d352-e24c-4051-9158-f48127aa5692",
  "issued": "2012-10-30",
  "keyword": [
  "country-afghanistan",
  "election",
  "politics",
  "transparency"
  ],
  "modified": "2012-10-30",
  "license": "http://opendefinition.org/licenses/cc-by/",
  "publisher": {
  "@type": "org:Organization",
  "name": "Committee on International Affairs"
  },
  "theme": [
  "City Planning"
  ],
  "spatial": "POLYGON ((60.8642578125 29.878755346038, 61.787109375 30.977609093349, 61.7431640625 31.391157522825, 60.7763671875 31.653381399664, 60.8642578125 32.361403315275, 60.556640625 33.137551192346, 60.908203125 33.578014746144, 60.5126953125 33.614619292334, 60.5126953125 34.307143856288, 60.8642578125 34.343436068483, 61.3037109375 35.603718740697, 62.666015625 35.353216101238, 64.5556640625 36.421282443649, 64.86328125 37.195330582801, 65.654296875 37.195330582801, 65.654296875 37.474858084971, 67.9833984375 37.055177106661, 68.7744140625 37.265309955619, 69.345703125 37.125286284967, 69.697265625 37.683820326694, 70.3125 37.683820326694, 70.3125 38.065392351332, 71.0595703125 38.582526159353, 71.279296875 37.78808138412, 71.7626953125 37.926867601481, 71.4990234375 37.405073750177, 71.630859375 36.738884124394, 73.3447265625 37.474858084971, 73.7841796875 37.474858084971, 73.7841796875 37.265309955619, 74.7509765625 37.335224359306, 74.9267578125 37.160316546737, 74.1357421875 36.809284702059, 72.9931640625 36.949891786813, 71.54296875 36.315125147481, 71.2353515625 36.066862132579, 71.5869140625 35.460669951495, 71.54296875 34.813803317113, 71.103515625 34.560859367084, 71.1474609375 34.08906131585, 70.3125 33.979808728725, 69.873046875 33.979808728725, 70.2685546875 33.321348526699, 69.345703125 32.916485347314, 69.2578125 32.324275588877, 69.1259765625 31.802892586707, 68.7744140625 31.578535426473, 68.0712890625 31.802892586707, 67.67578125 31.615965936476, 67.8515625 31.353636941501, 67.4560546875 31.278550858947, 67.0166015625 31.278550858947, 66.4892578125 30.939924331023, 66.2255859375 30.334953881989, 66.357421875 29.91685223307, 65.0390625 29.535229562948, 64.248046875 29.611670115197, 64.2041015625 29.420460341013, 63.4130859375 29.458731185355, 62.6220703125 29.420460341013))",
  "title": "Afghanistan Election Districts",
  "%Ref:theme": [
  {
  "identifier": "3c23032d-47c6-58fc-be0a-ef3fbaa54865",
  "data": "City Planning"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "fdbf0bf5-0550-59c1-84f1-82226bcf4a30",
  "data": "country-afghanistan"
  },
  {
  "identifier": "91fd5330-9540-5085-bbc1-e7c3373836f1",
  "data": "election"
  },
  {
  "identifier": "516f6cda-0793-5746-9437-d962dc90c762",
  "data": "politics"
  },
  {
  "identifier": "5adccd39-ddb8-5efe-b60e-81498acb9e89",
  "data": "transparency"
  }
  ],
  "%Ref:publisher": {
  "identifier": "3621ae3b-030b-541b-999e-38ddbf00df8a",
  "data": {
  "@type": "org:Organization",
  "name": "Committee on International Affairs"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "30e87ca1-4541-5102-bbb7-43d0cf530bdc",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/c9e2d352-e24c-4051-9158-f48127aa5692/district_centerpoints.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "District Names",
  "%Ref:downloadURL": [
  {
  "identifier": "0310f6c2d28bbee5de1211e5b5bb0b1c__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/c9e2d352-e24c-4051-9158-f48127aa5692/district_centerpoints.csv",
  "identifier": "0310f6c2d28bbee5de1211e5b5bb0b1c",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/cedcd327-4e5d-43f9-8eb1-c11850fa7c55": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "Data on bike lanes in Florida. Florida's bike lanes provide a safe and designated space for riders to pedal along the coastlines, through bustling urban areas, and amidst tranquil suburban neighborhoods. Whether navigating the bustling streets of Miami, cruising alongside the white sandy beaches of the Gulf Coast, or meandering through the picturesque Everglades, cyclists in Florida enjoy a network of bike lanes that cater to both recreational riders and daily commuters. With a combination of dedicated paths, shared roadways, and expansive trails, Florida's bike lanes contribute to a healthier and more sustainable lifestyle, encouraging residents and visitors alike to embrace the joy of two-wheeled travel under the warm Florida sun.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "Florida Bike Lanes",
  "%Ref:downloadURL": [
  {
  "identifier": "3a187a87dc6cd47c48b6b4c4785224b7__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
  "identifier": "3a187a87dc6cd47c48b6b4c4785224b7",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "cedcd327-4e5d-43f9-8eb1-c11850fa7c55",
  "issued": "2016-06-22",
  "license": "http://opendatacommons.org/licenses/by/1.0/",
  "modified": "2016-06-22",
  "publisher": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  },
  "spatial": "Florida",
  "theme": [
  "Transportation",
  "City Planning"
  ],
  "title": "Florida Bike Lanes ",
  "keyword": [
  "bike-lanes",
  "streets",
  "infrastructure"
  ],
  "%Ref:theme": [
  {
  "identifier": "35648bca-83ec-5580-a193-86d716e1e284",
  "data": "Transportation"
  },
  {
  "identifier": "3c23032d-47c6-58fc-be0a-ef3fbaa54865",
  "data": "City Planning"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "d36530dd-6bea-516e-8b32-7b3bbbcd1bd9",
  "data": "bike-lanes"
  },
  {
  "identifier": "1981b385-a6a9-561c-a83a-15395c19c97d",
  "data": "streets"
  },
  {
  "identifier": "4d280d80-a41a-514f-8ae0-6859bb222055",
  "data": "infrastructure"
  }
  ],
  "%Ref:publisher": {
  "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
  "data": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "391bc951-8155-579b-ab47-073d6bd1ad47",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "title": "Florida Bike Lanes",
  "%Ref:downloadURL": [
  {
  "identifier": "3a187a87dc6cd47c48b6b4c4785224b7__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/cedcd327-4e5d-43f9-8eb1-c11850fa7c55/Bike_Lane.csv",
  "identifier": "3a187a87dc6cd47c48b6b4c4785224b7",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/d460252e-d42c-474a-9ea9-5287b1d595f6": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "In 2014, crime in U.S. cities continued to be a complex and multifaceted issue, shaped by a variety of social, economic, and demographic factors. While overall crime rates had been on a gradual decline for several years, specific cities experienced fluctuations in crime statistics. Major metropolitan areas often grappled with challenges related to violent crimes. Law enforcement agencies, community organizations, and policymakers are working to collect and analyze data to inform policies addressing the root causes of crime. Source: FBI Uniform Crime Report, 2014",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/d460252e-d42c-474a-9ea9-5287b1d595f6/ViolentCrimeRates.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Includes information on the frequency of violent crimes in general, murder and non-negligent manslaughter, aggravated assault, rape and robbery. All crime rates are per 100,000 people.",
  "title": "Violent Crime Data for the Ten Most Populous Cities in the U.S.",
  "%Ref:downloadURL": [
  {
  "identifier": "046ab6a6761c2a8c34efdbc828291e54__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/d460252e-d42c-474a-9ea9-5287b1d595f6/ViolentCrimeRates.csv",
  "identifier": "046ab6a6761c2a8c34efdbc828291e54",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "d460252e-d42c-474a-9ea9-5287b1d595f6",
  "issued": "2014-12-30",
  "keyword": [
  "crime",
  "city"
  ],
  "license": "http://opendatacommons.org/licenses/by/1.0/",
  "modified": "2014-12-30",
  "publisher": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  },
  "spatial": "POLYGON ((-129.7265625 24.046463999667, -129.7265625 51.835777520452, -65.390625 51.835777520452, -65.390625 24.046463999667))",
  "temporal": "2014-01-01T05:00:00+00:00/2014-01-01T05:00:00+00:00",
  "theme": [
  "Public Safety"
  ],
  "title": "Crime Data for the Ten Most Populous Cities in the U.S.",
  "%Ref:theme": [
  {
  "identifier": "bbe16aad-386b-55cc-9cfb-03414fd07c5a",
  "data": "Public Safety"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "6d319f97-6915-5b7e-a312-8ee2932020c9",
  "data": "crime"
  },
  {
  "identifier": "b8a8dab8-6da6-5ba2-a2e3-77c26cdbc456",
  "data": "city"
  }
  ],
  "%Ref:publisher": {
  "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
  "data": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "3940d51a-a659-561f-abec-c9f9bbc96296",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/d460252e-d42c-474a-9ea9-5287b1d595f6/ViolentCrimeRates.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Includes information on the frequency of violent crimes in general, murder and non-negligent manslaughter, aggravated assault, rape and robbery. All crime rates are per 100,000 people.",
  "title": "Violent Crime Data for the Ten Most Populous Cities in the U.S.",
  "%Ref:downloadURL": [
  {
  "identifier": "046ab6a6761c2a8c34efdbc828291e54__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/d460252e-d42c-474a-9ea9-5287b1d595f6/ViolentCrimeRates.csv",
  "identifier": "046ab6a6761c2a8c34efdbc828291e54",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/e1f2ebcd-ee23-454f-87b5-df0306658418": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "accrualPeriodicity": "R/P1Y",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "The varicella vaccine stands as a crucial tool in preventing the highly contagious viral infection known as chickenpox, caused by the varicella-zoster virus. This vaccine has been an integral part of routine childhood immunization schedules in many countries, demonstrating its effectiveness in reducing the incidence and severity of chickenpox. Administered typically in two doses, the varicella vaccine not only provides direct protection against chickenpox but also contributes to the prevention of more severe complications and the potential reactivation of the virus as shingles later in life. By stimulating the immune system to recognize and combat the varicella-zoster virus, the vaccine plays a pivotal role in public health efforts to control the spread of this contagious disease, promoting a healthier and safer community.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1991_2007.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Varicella Mortality by Age Group, 1991-2007",
  "%Ref:downloadURL": [
  {
  "identifier": "f93f3fe527798ece765176f39407540a__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1991_2007.csv",
  "identifier": "f93f3fe527798ece765176f39407540a",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  },
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1974_1990.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Varicella Mortality by Age Group, 1974-1990",
  "%Ref:downloadURL": [
  {
  "identifier": "247460e99b513a256488a3c882c4c611__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1974_1990.csv",
  "identifier": "247460e99b513a256488a3c882c4c611",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "e1f2ebcd-ee23-454f-87b5-df0306658418",
  "issued": "2008-01-06",
  "keyword": [
  "health"
  ],
  "modified": "2008-01-06",
  "license": "http://opendatacommons.org/licenses/by/1.0/",
  "publisher": {
  "@type": "org:Organization",
  "name": "National Health Council"
  },
  "spatial": "POLYGON ((-128.056640625 24.206889622398, -128.056640625 50.176898122001, -64.775390625 50.176898122001, -64.775390625 24.206889622398))",
  "temporal": "1974-01-01/2007-01-01",
  "theme": [
  "Health Care"
  ],
  "title": "Varicella (Chickenpox) Incidence and Mortality, Before and After the Vaccine",
  "%Ref:theme": [
  {
  "identifier": "ebea68c6-14b5-5a68-ac94-955e69666ad7",
  "data": "Health Care"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "2d2fb90b-c0d3-5292-b2fe-68a13e42c76f",
  "data": "health"
  }
  ],
  "%Ref:publisher": {
  "identifier": "806cb23a-6c56-532a-ae96-b27cf7499090",
  "data": {
  "@type": "org:Organization",
  "name": "National Health Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "4b42ba6c-fcf0-50d0-9285-cb6c122a4f61",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1991_2007.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Varicella Mortality by Age Group, 1991-2007",
  "%Ref:downloadURL": [
  {
  "identifier": "f93f3fe527798ece765176f39407540a__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1991_2007.csv",
  "identifier": "f93f3fe527798ece765176f39407540a",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  },
  {
  "identifier": "f0a2b5e1-cb57-5c23-ab42-aae79ad14c70",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1974_1990.csv",
  "mediaType": "text/csv",
  "format": "csv",
  "description": "Mock data for demonstration purposes.",
  "title": "Varicella Mortality by Age Group, 1974-1990",
  "%Ref:downloadURL": [
  {
  "identifier": "247460e99b513a256488a3c882c4c611__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/e1f2ebcd-ee23-454f-87b5-df0306658418/demo_varicelladeaths_1974_1990.csv",
  "identifier": "247460e99b513a256488a3c882c4c611",
  "mimeType": "text/csv",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  },
  "dkan_dataset/fb3525f2-d32a-451e-8869-906ed41f7695": {
  "@type": "dcat:Dataset",
  "accessLevel": "public",
  "contactPoint": {
  "fn": "Jane Doe",
  "hasEmail": "mailto:data.admin@example.com"
  },
  "description": "In late 2016, the URA, in conjunction with Reinvestment Fund, completed the 2016 Market Value Analysis (MVA) for the City of Pittsburgh. The Market Value Analysis (MVA) offers an approach for community revitalization; it recommends applying interventions not only to where there is a need for development but also in places where public investment can stimulate private market activity and capitalize on larger public investment activities. The MVA is a unique tool for characterizing markets because it creates an internally referenced index of a municipality’s residential real estate market. It identifies areas that are the highest demand markets as well as areas of greatest distress, and the various markets types between. The MVA offers insight into the variation in market strength and weakness within and between traditional neighborhood boundaries because it uses Census block groups as the unit of analysis. Where market types abut each other on the map becomes instructive about the potential direction of market change, and ultimately, the appropriateness of types of investment or intervention strategies.",
  "distribution": [
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
  "mediaType": "application/zip",
  "format": "zip",
  "title": "MVA Geographic Data 2016",
  "%Ref:downloadURL": [
  {
  "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
  "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8",
  "mimeType": "application/zip",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  },
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
  "mediaType": "application/pdf",
  "format": "pdf",
  "title": "2016 MVA Data Dictionary",
  "%Ref:downloadURL": [
  {
  "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
  "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2",
  "mimeType": "application/pdf",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  },
  {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
  "mediaType": "application/zip",
  "format": "zip",
  "title": "Map files",
  "%Ref:downloadURL": [
  {
  "identifier": "60d78924087b2516acf1e57ff1fc8b83__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
  "identifier": "60d78924087b2516acf1e57ff1fc8b83",
  "mimeType": "application/zip",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  ],
  "identifier": "fb3525f2-d32a-451e-8869-906ed41f7695",
  "issued": "2016-04-21",
  "keyword": [
  "foreclosures",
  "economy",
  "affordable-housing",
  "housing-markets"
  ],
  "license": "http://www.opendefinition.org/licenses/cc-by",
  "modified": "2016-04-21",
  "publisher": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  },
  "spatial": "Pittsburgh, PA",
  "temporal": "2016/P1Y",
  "theme": [
  "Finance and Budgeting"
  ],
  "title": "Market Value Analysis - Urban Redevelopment Authority",
  "%Ref:theme": [
  {
  "identifier": "b1f822b6-ae46-584d-9268-52ca95a3f8ec",
  "data": "Finance and Budgeting"
  }
  ],
  "%Ref:keyword": [
  {
  "identifier": "c6a43d4c-7311-5c70-a7d3-4918cb1cfdd7",
  "data": "foreclosures"
  },
  {
  "identifier": "cf43cf96-f037-516f-974d-4330bcdbc1f9",
  "data": "economy"
  },
  {
  "identifier": "51fb372a-2f48-5e4b-b8af-f984a36fe90f",
  "data": "affordable-housing"
  },
  {
  "identifier": "0de06c9a-e413-5277-af83-57b6c3e46513",
  "data": "housing-markets"
  }
  ],
  "%Ref:publisher": {
  "identifier": "c43b40ae-b279-58ed-91c8-065966b36fe8",
  "data": {
  "@type": "org:Organization",
  "name": "State Economic Council"
  }
  },
  "%Ref:distribution": [
  {
  "identifier": "eb33eb66-696d-504b-b077-8b26af34cc96",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
  "mediaType": "application/zip",
  "format": "zip",
  "title": "MVA Geographic Data 2016",
  "%Ref:downloadURL": [
  {
  "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/pittsmva2016data.zip",
  "identifier": "ad62ad1179fa1b0e44c8b9226c2266a8",
  "mimeType": "application/zip",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  },
  {
  "identifier": "cf0a1f6a-75a4-5629-84a2-c8086524a10a",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
  "mediaType": "application/pdf",
  "format": "pdf",
  "title": "2016 MVA Data Dictionary",
  "%Ref:downloadURL": [
  {
  "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/2016mvadatadictionary.pdf",
  "identifier": "9f076e2af8927b72db5cf0e05e8cd5f2",
  "mimeType": "application/pdf",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  },
  {
  "identifier": "d2a4b75b-2dde-5b9f-b429-a62add1d7136",
  "data": {
  "@type": "dcat:Distribution",
  "downloadURL": "https://demo.getdkan.org/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
  "mediaType": "application/zip",
  "format": "zip",
  "title": "Map files",
  "%Ref:downloadURL": [
  {
  "identifier": "60d78924087b2516acf1e57ff1fc8b83__1744783635__source",
  "data": {
  "filePath": "https://h-o.st/sites/default/files/distribution/fb3525f2-d32a-451e-8869-906ed41f7695/IMD-MAPS.zip",
  "identifier": "60d78924087b2516acf1e57ff1fc8b83",
  "mimeType": "application/zip",
  "perspective": "source",
  "version": "1744783635",
  "checksum": null
  }
  }
  ]
  }
  }
  ],
  "%modified": "2025-04-16T06:07:14+0000"
  }
  },
  "facets": []
  }
