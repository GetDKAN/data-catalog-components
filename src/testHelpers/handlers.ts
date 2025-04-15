import { http, HttpResponse } from 'msw'

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

export const invalidThemeId: {message: string; status: number; timestamp: string} = {
  "message": "Error retrieving metadata: theme qwerty not found.",
  "status": 404,
  "timestamp": "2025-04-15T13:55:09-04:00"
}

export const handlers = [
  http.get('/api/1/metastore/schemas/theme/items', () => {
    return HttpResponse.json(themeList)
  }),
  http.get('/api/1/metastore/schemas/theme/items/1234', () => {
    return HttpResponse.json(themeList[0])
  }),
  http.get('/api/1/metastore/schemas/theme/items/qwerty', () => {
    return HttpResponse.json({
      errorMessage: invalidThemeId,
    },
    { status: 404 },)
  }),
  http.get('/api/1/metastore/schemas/keyword/items', () => {
    return HttpResponse.json(keywordList)
  }),
  http.get('/api/1/metastore/schemas/keyword/items/0987', () => {
    return HttpResponse.json(keywordList[0])
  }),
]