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
export default class UsersTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  render() {
    const table = document.createElement('table');

    table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');

    this.rows.forEach(user => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.salary}</td>
        <td><button>X</button></td>
      `;

      tr.querySelector('button').addEventListener('click', () => {
        tr.remove();
      });

      tbody.append(tr);
    });

    return table;
  }
}

