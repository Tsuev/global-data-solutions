function uniqueIdgenerate(arr) {
  const id = Math.floor(Math.random() * 10000);
  return arr.find(item => item.id == id) ? uniqueIdgenerate(arr) : id
}

export default uniqueIdgenerate