function truncate(str, maxlength) {
  if (str.lenght > maxlength ) {
    str1 = str.slice(0 , maxlength - 1) + "…" ;
    return str1
  }else {
    return str ;
  }
}
