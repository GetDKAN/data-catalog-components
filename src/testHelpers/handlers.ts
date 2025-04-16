import { http, HttpResponse } from 'msw'
import {
  themeList,
  keywordList,
  invalidSchemaId,
  baseDataset,
  showRefIdDataset,
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
    } else {
      return HttpResponse.json(baseDataset[0])
    }
    
  }),
]