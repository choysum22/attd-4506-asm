$(document).ready(function () {
  renderClass();
});

var selected_type = 2;

function showAttendance(type) {
  document.getElementById("search-input").value = "";
  console.log(type);
  selected_type = type;
  switch (type) {
    case 2:
      renderClass();
      break;
    case 3:
      renderStudent();
      break;
  }
}

function renderClass() {
  $.getJSON("js/json/class_attendance.json", function (data) {
    var table = "";
    var color = "";
    $.each(data, function (key, value) {
      color = colorAttendance(value.attendance_rate);
      table +=
        "<tr class='" +
        color +
        "'><td id='id-" +
        value._id +
        "'>" +
        value._id +
        "</td>" +
        "<td id='class-" +
        value._id +
        "'>" +
        value._class +
        "</td>" +
        "<td id='teacher-" +
        value._id +
        "'>" +
        value.teacher +
        "</td>" +
        "<td style='text-align: right' id='total_student-" +
        value._id +
        "'>" +
        value.students +
        "</td>" +
        "<td style='text-align: right' id='late-" +
        value._id +
        "'>" +
        value.late +
        "</td>" +
        "<td style='text-align: right' id='earlyleave-" +
        value._id +
        "'>" +
        value.earlyleave +
        "</td>" +
        "<td style='text-align: right' id='sickleave-" +
        value._id +
        "'>" +
        value.sickleave +
        "</td>" +
        "<td style='text-align: right' id='personalleave-" +
        value._id +
        "'>" +
        value.personalleave +
        "</td>" +
        "<td style='text-align: right' id='absent-" +
        value._id +
        "'>" +
        value.absent +
        "</td>" +
        "<td style='text-align: right' id='attendance-" +
        value._id +
        "'>" +
        value.attendance_rate +
        "%</td></tr>";
    });

    document.getElementById("users-header").innerHTML =
      '<th scope="col">ID</th>' +
      '<th scope="col">Class</th>' +
      '<th scope="col">Teacher</th>' +
      '<th scope="col" style="text-align: right">No. of students</th>' +
      '<th scope="col" style="text-align: right">Late</th>' +
      '<th scope="col" style="text-align: right">Early Leave</th>' +
      '<th scope="col" style="text-align: right">Sick Leave</th>' +
      '<th scope="col" style="text-align: right">Personal Leave</th>' +
      '<th scope="col" style="text-align: right">Absent</th>' +
      '<th scope="col" style="text-align: right">Attendance Rate</th>';
    document.getElementById("users").innerHTML = table;
  });
}

function renderStudent() {
  $.getJSON("js/json/student_attendance_4A.json", function (data) {
    var table = "";
    var color = "";
    $.each(data, function (key, value) {
      color = colorAttendance(value.attendance_rate);
      table +=
        "<tr class='" +
        color +
        "'><td id='id-" +
        value._id +
        "'>" +
        value._id +
        "</td>" +
        "<td id='class-" +
        value._id +
        "'>" +
        value._class +
        "</td>" +
        "<td id='name-" +
        value._id +
        "'>" +
        value.name +
        "</td>" +
        "<td style='text-align: right' id='late-" +
        value._id +
        "'>" +
        value.late +
        "</td>" +
        "<td style='text-align: right' id='earlyleave-" +
        value._id +
        "'>" +
        value.earlyleave +
        "</td>" +
        "<td style='text-align: right' id='sickleave-" +
        value._id +
        "'>" +
        value.sickleave +
        "</td>" +
        "<td style='text-align: right' id='personalleave-" +
        value._id +
        "'>" +
        value.personalleave +
        "</td>" +
        "<td style='text-align: right' id='absent-" +
        value._id +
        "'>" +
        value.absent +
        "</td>" +
        "<td style='text-align: right' id='attendance-" +
        value._id +
        "'>" +
        value.attendance_rate +
        "</td></tr>";
    });

    document.getElementById("users-header").innerHTML =
      '<th scope="col">ID</th>' +
      '<th scope="col">Class</th>' +
      '<th scope="col">Name</th>' +
      '<th scope="col" style="text-align: right">Late</th>' +
      '<th scope="col" style="text-align: right">Early Leave</th>' +
      '<th scope="col" style="text-align: right">Sick Leave</th>' +
      '<th scope="col" style="text-align: right">Personal Leave</th>' +
      '<th scope="col" style="text-align: right">Absent</th>' +
      '<th scope="col" style="text-align: right">Attendance Rate</th>';
    document.getElementById("users").innerHTML = table;
  });
}

// from green to red according to attendance
function colorAttendance(rate) {
  if (rate >= 90) {
    return "green-bg";
  } else if (rate >= 80 && rate < 90) {
    return "blue-bg";
  } else if (rate >= 75 && rate < 80) {
    return "yellow-bg";
  } else if (rate >= 60 && rate < 75) {
    return "red-bg";
  } else {
    return "";
  }
}

//export table as excel
function exportTableToExcel(tableID, filename = "") {
  switch (selected_type) {
    case 1:
      filename += "_school_" + date();
      break;
    case 2:
      filename += "_class_" + date();
      break;
    case 3:
      filename += "_student_" + date();
      break;
  }
  /* Get the HTML data using Element by Id */
  var table = document.getElementById(tableID);

  /* Declaring array variable */
  var rows = [];
  var cells = [];

  //iterate through rows of table
  for (var i = 0, row; (row = table.rows[i]); i++) {
    //rows would be accessed using the "row" variable assigned in the for loop
    //Get each cell value/column from the row
    cells = [];

    for (var j = 0, col; (col = row.cells[j]); j++) {
      //cells would be accessed using the "col" variable assigned in the for loop
      //add each cell's data to the cells array
      if (selected_type == 1 || selected_type == 2) {
        if (j == 0) {
          console.log("skipped");
        } else {
          cells.push(col.innerText);
        }
      } else {
        cells.push(col.innerText);
      }
    }

    /* add a new records in the array */
    rows.push(cells);
  }
  csvContent = "data:text/csv;charset=utf-8,";
  /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + ".csv");
  document.body.appendChild(link);
  /* download the data file named "Stock_Price_Report.csv" */
  link.click();
}

// get date as file name
function date() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var date = year + "" + month + "" + day;
  return date;
}
