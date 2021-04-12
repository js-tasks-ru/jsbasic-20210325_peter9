function makeFriendsList(friends) {
  let example = document.createElement( 'ul' ) ;
  for (let elem of friends) {
    let result = `${elem['firstName']} ${elem['lastName']}`
    example.insertAdjacentHTML( `beforeEnd` ,`<li>${result}</li>`) ;
    }
  return example ;
  }

  
  
