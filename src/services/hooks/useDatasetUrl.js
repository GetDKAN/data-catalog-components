export default function useDatasetUrl(dist) {
  const data = dist;


  if (Object.prototype.hasOwnProperty.call(data, 'downloadURL')) {
    return data.downloadURL;
  }
  if (Object.prototype.hasOwnProperty.call(data, 'accessURL')) {
    return data.accessURL;
  }

  return null;
}
