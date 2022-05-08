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
  $.getJSON("js/json/student_sickleave.json", function (data) {
    var table = generateTable(data);

    document.getElementById("students-attendance-header").innerHTML =
      '<th scope="col">#</th>' +
      '<th scope="col">Date</th>' +
      '<th scope="col">Month</th>' +
      '<th scope="col">Class</th>' +
      '<th scope="col">ID</th>' +
      '<th scope="col">Name</th>' +
      '<th scope="col">Reason of Sick Leave</th>' +
      '<th scope="col">Status</th>';
    document.getElementById("students-attendance").innerHTML = table;
  });
}

function generateTable(data) {
  var id = 1;
  var table = "";
  $.each(data, function (key, value) {
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
      "<td id='stu-id-" +
      id +
      "'>" +
      value._id +
      "</td>" +
      "<td id='student-" +
      id +
      "'>" +
      value.name +
      "</td>" +
      "<td id='name-" +
      id +
      "'>" +
      value.reason +
      "</td>" +
      "<td class='upload' id='upload-" +
      id +
      "'>";
    if (id == 8) {
      table += "Waiting for Upload" + "</td></tr>";
    } else if (id == 7) {
      table += "<button class='btn approve-btn' data-bs-toggle='modal' data-bs-target='#reviewModalCenter'>Approve</button></td></tr>";
    } else {
      table += "Approved</td></tr>";
    }

    id++;
  });
  return table;
}

function onupload() {
  var td = document.getElementById("upload-5");
  td.innerHTML = "Uploaded";
}

$("#upload").click(function () {
  console.log("clicked");
});

function saveReview() {
  if (document.getElementById("approve-cb").checked) {
    alert("Sick Leave Certificate Approved");
    document.getElementById("approve-cb").checked = false;
    document.getElementById("upload-7").innerHTML = "Approved";
  }
}
