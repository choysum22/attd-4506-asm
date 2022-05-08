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
      '<th scope="col">#</th>' + '<th scope="col">Date</th>' + '<th scope="col">Month</th>' + '<th scope="col">Class</th>' + '<th scope="col">Attendance</th>' + '<th scope="col">Status</th>';
    document.getElementById("students-attendance").innerHTML = table;
  });
}

function generateTable(data) {
  var id = 1;
  var table = "";
  $.each(data, function (key, value) {
    switch (value.attendance) {
      case "Sick Leave":
        table +=
          "<tr class='sickleave-upload .waiting-upload'>" +
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
          "</td>" +
          "<td class='upload' id='upload-" +
          id +
          "'>";
        if (id == 5) {
          table +=
            "<input type='file' class='form-control form-control-sm upload-file' id='upload-" +
            id +
            "' name='Upload'>" +
            "<button class='btn upload-sickleave-btn' id='upload-btn-" +
            id +
            "' onclick='onupload()'>Upload</button>" +
            "</td></tr>";
        } else if (id == 4) {
          table +=
            "<input type='file' class='form-control form-control-sm upload-file' id='upload-" +
            id +
            "' name='Upload'>" +
            "<button class='btn upload-sickleave-btn' id='upload-btn-" +
            id +
            "' onclick='onupload()'>Upload</button>" +
            "</td></tr>";
        } else if (id == 3) {
          table += "Uploaded</td></tr>";
        } else {
          table += "Approved</td></tr>";
        }

        id++;
        break;
    }
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

function onupload() {
  var td = document.getElementById("upload-5");
  td.innerHTML = "Uploaded";
}

$("#upload").click(function () {
  console.log("clicked");
});
