/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 export default class UserTable {
  constructor(rows) {
    this.data = rows ;
    this.tbody = '' ;
    this.render() ;
  }


  clickBtn(event) {
    if (!event.target.closest('.btn')) return;
    event.target.closest('tr').remove();
  }


   render () {
    //  const tHead = document.createElement('thead') ;

    if (!this.elem) {
        this.elem = document.createElement('table');
        // this.elem.tHead = document.createElement('thead');
        // this.elem.tBody = document.createElement('tbody') ;
        this.elem.addEventListener('click', event => {
					this.clickBtn(event);
				});
    }

    let thead = `<thead><tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Зарплата</th>
    <th>Город</th>
    <th></th>
    </tr>
    </thead>
  `
  this.elem.insertAdjacentHTML( `beforeEnd` , thead) ;
     
  
  for ( const prop of this.data) {
      this.tbody += `
       <tr>
         <td>${prop.name}</td>
         <td>${prop.age}</td>
         <td>${prop.salary}</td>
         <td>${prop.city}</td>
         <td><button class = btn>X</button></td>
       </tr>
      `
  }

  this.tbody =`<tbody> ${this.tbody} </tbody>` 
  
  // this.elem.tHead.insertAdjacentHTML( `beforeEnd` , thead) ;
  this.elem.insertAdjacentHTML('beforeEnd' , this.tbody) ;
  return this.elem;
}
}