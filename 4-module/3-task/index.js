function highlight(table) {
  const rows = table.tBodies[0].rows;

  for (const row of rows) {
    const cells = row.cells;

    const ageCell = cells[1];
    const genderCell = cells[2];
    const statusCell = cells[3];

    const available = statusCell.getAttribute('data-available');
    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', '');
    }

    const gender = genderCell.textContent.trim();
    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    const age = Number(ageCell.textContent.trim());
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
