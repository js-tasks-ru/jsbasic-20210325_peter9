function getMinMax(str) {
	str1 = inputData.split(',') ;
        str2 = str1.join(' ') ;
        str3 = str2.split(' ') ;
let arrNum = [] ;

for (let value of str3) {
  if ( +value <= Infinity && +value!='') {
  arrNum.push(value) ;
}
}

let minObj = Math.min.apply(null ,arrNum) ;
let maxObj = Math.max.apply(null ,arrNum) ;

let result = {
  min : minObj ,
  max : maxObj ,
}

return result ;
}