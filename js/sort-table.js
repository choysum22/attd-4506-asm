var toggle = 1;
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("students-attendance");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      // Check if the two rows should switch place:
      if (toggle == 1) {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (toggle == 2) {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  if (toggle == 1) {
    toggle = 2;
  } else if (toggle == 2) {
    toggle = 1;
  }
}

function sortByString(id, index) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(id);
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[index];
      y = rows[i + 1].getElementsByTagName("td")[index];
      // Check if the two rows should switch place:
      if (toggle == 1) {
        if (x.innerHTML.localeCompare(y.innerHTML) == -1) {
          shouldSwitch = true;
          break;
        }
      } else if (toggle == 2) {
        if (x.innerHTML.localeCompare(y.innerHTML) == 1) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  if (toggle == 1) {
    toggle = 2;
  } else if (toggle == 2) {
    toggle = 1;
  }
}

function sortByNumber(id, index) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(id);
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[index];
      y = rows[i + 1].getElementsByTagName("td")[index];
      // Check if the two rows should switch place:
      if (toggle == 1) {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (toggle == 2) {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  if (toggle == 1) {
    toggle = 2;
  } else if (toggle == 2) {
    toggle = 1;
  }
}
