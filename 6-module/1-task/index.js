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
    this.newRow = '' ;
  }


  clickBtn(event) {
    if (!event.target.closest('.btn')) return;
    event.target.closest('tr').remove();
  }


   get elem () {
    if (!this.element) {
        this.element = document.createElement('table');
        this.element.tHead = document.createElement('thead');
        this.element.tBody = document.createElement('tbody') ;
        this.element.addEventListener('click', event => {
					this.clickBtn(event);
				});
    }

    let tHead = `<tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Зарплата</th>
    <th>Город</th>
    <th></th>
    </tr>
  `
    
     for ( const prop of this.data) {
    this.newRow += `
       <tr>
         <td>${prop.name}</td>
         <td>${prop.age}</td>
         <td>${prop.salary}</td>
         <td>${prop.city}</td>
         <td><button class = btn>X</button></td>
       </tr>
      `
  }
  
  this.element.tHead.insertAdjacentHTML( `beforeEnd` , tHead) ;
  this.element.insertAdjacentHTML( `beforeEnd` , this.newRow) ;
  return this.element;
}
}
