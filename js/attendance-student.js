$(document).ready(function () {
  renderSchool();
});

var year = "0";
var month_int = "0";
var month = "0";

function showAttendance(type) {
  document.getElementById("search-input").value = "";
  console.log(type);
  switch (type) {
    case 1:
      renderSchool();
      break;
    case 2:
      renderClass();
      break;
    case 3:
      renderStudent();
      break;
  }
}

var id;

function renderSchool() {
  var id = 1;
  $.getJSON("js/json/student_personal_attendance.json", function (data) {
    var table = generateTable(data);

    document.getElementById("students-attendance-header").innerHTML =
      '<th scope="col">#</th>' + '<th scope="col">Date</th>' + '<th scope="col">Month</th>' + '<th scope="col">Class</th>' + '<th scope="col">Attendance</th>';
    document.getElementById("students-attendance").innerHTML = table;
  });
}

function generateTable(data) {
  var id = 1;
  var table = "";
  $.each(data, function (key, value) {
    switch (value.attendance) {
      case "Present":
        table += "<tr class='present-attendance'>";
        break;
      case "Late":
        table += "<tr class='late-attendance'>";
        break;
      case "Sick Leave":
        table += "<tr class='sickleave-attendance'>";
        break;
      case "Early Leave":
        table += "<tr class='earlyleave-attendance'>";
        break;
      case "Absent":
        table += "<tr class='absent-attendance'>";
        break;
      case "Personal Leave":
        table += "<tr class='personalleave-attendance'>";
        break;
    }
    table +=
      "<td id='id-" +
      id +
      "'>" +
      id +
      "</td>" +
      "<td class='date' id='date-" +
      id +
      "'>" +
      value.date +
      "</td>" +
      "<td class='month' id='month-" +
      id +
      "'>" +
      value.month +
      "</td>" +
      "<td id='class-" +
      id +
      "'>" +
      value._class +
      "</td>" +
      "<td id='attendance-" +
      id +
      "'>" +
      value.attendance +
      "</td></tr>";

    id++;
  });
  return table;
}

// set year
function setYear() {
  year = document.getElementById("year-filter").value;
  console.log(year);
}

// set Month
function setMonth() {
  month_int = document.getElementById("month-filter").value;
  switch (month_int) {
    case "0":
      month = "0";
      break;
    case "1":
      month = "January";
      break;
    case "2":
      month = "February";
      break;
    case "3":
      month = "March";
      break;
    case "4":
      month = "April";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "June";
      break;
    case "7":
      month = "July";
      break;
    case "8":
      month = "August";
      break;
    case "9":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }
  console.log(month);
}

// filter table by month and year
function filterTable() {
  var table = "";
  var id = 1;
  $.getJSON("js/json/student_personal_attendance.json", function (data) {
    if (year == "0" && month == "0") {
      table = generateTable(data);
    } else if (year != "0" && month == "0") {
      $.each(data, function (key, value) {
        if (value.year == year) {
          switch (value.attendance) {
            case "Present":
              table += "<tr class='present-attendance'>";
              break;
            case "Late":
              table += "<tr class='late-attendance'>";
              break;
            case "Sick Leave":
              table += "<tr class='sickleave-attendance'>";
              break;
            case "Early Leave":
              table += "<tr class='earlyleave-attendance'>";
              break;
            case "Absent":
              table += "<tr class='absent-attendance'>";
              break;
            case "Personal Leave":
              table += "<tr class='personalleave-attendance'>";
              break;
          }
          table +=
            "<td id='id-" +
            id +
            "'>" +
            id +
            "</td>" +
            "<td class='date' id='date-" +
            id +
            "'>" +
            value.date +
            "</td>" +
            "<td class='month' id='month-" +
            id +
            "'>" +
            value.month +
            "</td>" +
            "<td id='class-" +
            id +
            "'>" +
            value._class +
            "</td>" +
            "<td id='attendance-" +
            id +
            "'>" +
            value.attendance +
            "</td></tr>";

          id++;
        }
      });
    } else if (year == "0" && month != "0") {
      $.each(data, function (key, value) {
        if (value.month == month) {
          switch (value.attendance) {
            case "Present":
              table += "<tr class='present-attendance'>";
              break;
            case "Late":
              table += "<tr class='late-attendance'>";
              break;
            case "Sick Leave":
              table += "<tr class='sickleave-attendance'>";
              break;
            case "Early Leave":
              table += "<tr class='earlyleave-attendance'>";
              break;
            case "Absent":
              table += "<tr class='absent-attendance'>";
              break;
            case "Personal Leave":
              table += "<tr class='personalleave-attendance'>";
              break;
          }
          table +=
            "<td id='id-" +
            id +
            "'>" +
            id +
            "</td>" +
            "<td class='date' id='date-" +
            id +
            "'>" +
            value.date +
            "</td>" +
            "<td class='month' id='month-" +
            id +
            "'>" +
            value.month +
            "</td>" +
            "<td id='class-" +
            id +
            "'>" +
            value._class +
            "</td>" +
            "<td id='attendance-" +
            id +
            "'>" +
            value.attendance +
            "</td></tr>";

          id++;
        }
      });
    } else {
      $.each(data, function (key, value) {
        if (value.year == year && value.month == month) {
          switch (value.attendance) {
            case "Present":
              table += "<tr class='present-attendance'>";
              break;
            case "Late":
              table += "<tr class='late-attendance'>";
              break;
            case "Sick Leave":
              table += "<tr class='sickleave-attendance'>";
              break;
            case "Early Leave":
              table += "<tr class='earlyleave-attendance'>";
              break;
            case "Absent":
              table += "<tr class='absent-attendance'>";
              break;
            case "Personal Leave":
              table += "<tr class='personalleave-attendance'>";
              break;
          }
          table +=
            "<td id='id-" +
            id +
            "'>" +
            id +
            "</td>" +
            "<td class='date' id='date-" +
            id +
            "'>" +
            value.date +
            "</td>" +
            "<td class='month' id='month-" +
            id +
            "'>" +
            value.month +
            "</td>" +
            "<td id='class-" +
            id +
            "'>" +
            value._class +
            "</td>" +
            "<td id='attendance-" +
            id +
            "'>" +
            value.attendance +
            "</td></tr>";

          id++;
        }
      });
    }

    document.getElementById("students-attendance-header").innerHTML =
      '<th scope="col">#</th>' + '<th scope="col">Date</th>' + '<th scope="col">Month</th>' + '<th scope="col">Class</th>' + '<th scope="col">Attendance</th>';
    document.getElementById("students-attendance").innerHTML = table;
  });
}

function filteredGenerate(data) {
  var id = 1;
  var table = "";

  return table;
}

function resetTable() {
  year = "0";
  month = "0";
  document.getElementById("year-filter").selectedIndex = 0;
  document.getElementById("month-filter").selectedIndex = 0;
  filterTable();
}
