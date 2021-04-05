function isEmpty(obj) {
  let result = true ;
  for (let key in obj ) {
      result = false ;
  }
  return result
}
