function camelize(str) {
  let str1 = str.split('-') ;
  let strArr = str1.map(function(MassProp, index) {
    if (index === 0) return MassProp;
    return MassProp.charAt(0).toUpperCase() + MassProp.slice(1) ;
  });
  return strArr.join('') ;
  }


