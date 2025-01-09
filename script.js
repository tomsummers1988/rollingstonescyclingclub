// script.js
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you'd typically send the username and password to a server-side script for authentication.
    // For a simple example, you could just log the values to the console:
    console.log('Username:', username);
    console.log('Password:', password);
});

function sortTable(columnIndex) {
    const table = document.getElementById("resultsTable");
    const rows = Array.from(table.rows).slice(1); // Get all rows except the header
    const isTimeColumn = columnIndex === 5; // Check if it's the Time column

    rows.sort((row1, row2) => {
      const cell1 = row1.cells[columnIndex].textContent.trim();
      const cell2 = row2.cells[columnIndex].textContent.trim();

      // Handle Time column sorting
      if (isTimeColumn) {
        const time1 = cell1.split(":").reduce((acc, time) => 60 * acc + +time, 0);
        const time2 = cell2.split(":").reduce((acc, time) => 60 * acc + +time, 0);
        return time1 - time2;
      }

      // Handle numerical sorting
      return parseFloat(cell1) - parseFloat(cell2);
    });

    // Reinsert sorted rows back into the table
    const tbody = table.tBodies[0];
    rows.forEach(row => tbody.appendChild(row));
  }