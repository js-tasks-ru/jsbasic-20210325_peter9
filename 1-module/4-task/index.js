function checkSpam(str) {
  let bigStr = str.toUpperCase() ;
  if (bigStr.includes('1XBET')||bigStr.includes('XXX')) {
    return true ;
  } else {
    return false ;
  }
  }
