function ucFirst(str) {
  if ( str === "" || str === null ) {
    str =" " ;
    return str ;
  } else {
  let bigFirst = (str[0].toUpperCase()) ;
  let str1 = bigFirst + str.slice(1)  ;
  return str1 ;
}
}

