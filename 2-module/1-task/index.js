function sumSalary(salaries) {
  let h = 0 ;
  for (let k in salaries ) {
    if (isFinite(salaries[k])) {
      let z = +salaries[k] ;
        h = h + z ;
    }
    }
    return h ;
}
