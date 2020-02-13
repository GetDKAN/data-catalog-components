"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDatasetUrl;

function useDatasetUrl(dist) {
  var data = dist;

  if (Object.prototype.hasOwnProperty.call(data, 'downloadURL')) {
    return data.downloadURL;
  }

  if (Object.prototype.hasOwnProperty.call(data, 'accessURL')) {
    return data.accessURL;
  }

  return null;
}