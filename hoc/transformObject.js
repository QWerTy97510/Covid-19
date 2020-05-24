function transform(obj, n) {
  const arrObj = [];
  for (let key in obj) {
    arrObj.push(key);
  }
  const returnedArrayKeys = arrObj.slice(arrObj.length - n, arrObj.length);
  return returnedArrayKeys;
}

export default transform;
