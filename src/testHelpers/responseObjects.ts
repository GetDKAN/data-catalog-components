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
