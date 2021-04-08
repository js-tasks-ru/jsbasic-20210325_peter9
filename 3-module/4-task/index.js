function showSalary(user, age) {
  
  let userFilt = user.filter(function (userObj) {
    return userObj['age'] <= age ;
  }) ;

  let userNameFiltred = userFilt.map(function(userObj) {
    return `${userObj['name']} , ${userObj['balance']}`;
   }) ;

   let result = userNameFiltred.join('\n') ;
   return result ;

}
