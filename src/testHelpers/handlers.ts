import { http, HttpResponse } from 'msw'
import {
  themeList,
  keywordList,
  invalidSchemaId,
  baseDataset,
  showRefIdDataset,
  searchResults,
  generateDatastoreResults
} from './responseObjects'


export const handlers = [
  http.get('/api/1/metastore/schemas/theme/items/', () => {
    return HttpResponse.json(themeList)
  }),
  http.get('/api/1/metastore/schemas/theme/items/:id', ({ params }) => {
    const { id } = params;
    if(typeof id === "string" && id !== "1234") {
      return HttpResponse.json({ errorMessage: invalidSchemaId("theme", id), }, { status: 404 });
    }
    return HttpResponse.json(themeList[0])
  }),
  http.get('/api/1/metastore/schemas/keyword/items/', () => {
    return HttpResponse.json(keywordList)
  }),
  http.get('/api/1/metastore/schemas/keyword/items/:id', ({ params }) => {
    const { id } = params;
    if(typeof id === "string" && id !== "0987") {
      return HttpResponse.json({ errorMessage: invalidSchemaId("keyword", id), }, { status: 404 });
    }
    return HttpResponse.json(keywordList[0])
  }),
  http.get('/api/1/metastore/schemas/dataset/items/', ({ request }) => {
    const url = new URL(request.url);
    const showRef: boolean = url.searchParams.has("show-reference-ids");
    if(showRef) {
      return HttpResponse.json(showRefIdDataset)
    } else {
      return HttpResponse.json(baseDataset)
    }
    
  }),
  http.get('/api/1/metastore/schemas/dataset/items/:id', ({ request, params }) => {
    const url = new URL(request.url);
    const { id } = params;
    const showRef: boolean = url.searchParams.has("show-reference-ids");
    if(typeof id === "string" && id !== "12345") {
      return HttpResponse.json({ errorMessage: invalidSchemaId("dataset", id), }, { status: 404 });
    }
    if(showRef) {
      return HttpResponse.json(showRefIdDataset[0])
    } else {generateDatastoreResults
      return HttpResponse.json(baseDataset[0])
    }
  }),
  http.get('/api/1/search', ({ request, params }) => {
    const url = new URL(request.url);
    return HttpResponse.json(searchResults)
  }),
  http.get('/api/1/datastore/query/:id', ({ request, params }) => {
    const url = new URL(request.url);
    const limit: number = Number(url.searchParams.get("limit")) ? Number(url.searchParams.get("limit")) : 5;
    const { id } = params;
    return HttpResponse.json(generateDatastoreResults(limit, 50, id))
    
  }),
  http.get('/api/1/datastore/query/:id/:index', ({ request, params }) => {
    const url = new URL(request.url);
    const { id, index} = params;
    return HttpResponse.json(generateDatastoreResults(5, 10, id))
  })
]