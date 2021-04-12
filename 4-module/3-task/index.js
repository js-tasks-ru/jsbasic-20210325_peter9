function highlight(table) {
 for (i = 1 ; i< table.rows.length; i++) {
      if (table.rows[i].cells[3].dataset.available == 'true') {
        table.rows[i].classList.toggle('available') ;
      } else if (table.rows[i].cells[3].dataset.available == 'false' ) {
        table.rows[i].classList.toggle('unavailable') ;
      } else {
        table.rows[i].hidden = true ;
      }
  }

for (i = 0 ; i< table.rows.length; i++) {
    if (table.rows[i].cells[1].innerHTML <= 18) {
      table.rows[i].style['text-decoration'] = 'line-through' ;
    }
  }

for (i = 0 ; i< table.rows.length; i++) {
    if (table.rows[i].cells[2].innerHTML == 'm') {
      table.rows[i].classList.toggle('male') ;
    } else if (table.rows[i].cells[2].innerHTML == 'f')
    table.rows[i].classList.toggle('female')  ;
    }
    
  return table ;
}


