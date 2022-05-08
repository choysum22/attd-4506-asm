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
  $.getJSON("js/json/personalleave-teacher.json", function (data) {
    var table = generateTable(data);

    document.getElementById("students-attendance-header").innerHTML =
      '<th scope="col">#</th>' +
      '<th scope="col">Start Date</th>' +
      '<th scope="col">End Date</th>' +
      '<th scope="col">Class</th>' +
      '<th scope="col">ID</th>' +
      '<th scope="col">Name</th>' +
      '<th scope="col">Contact</th>' +
      '<th scope="col">Teacher</th>' +
      '<th scope="col">Reason of Personal Leave</th>' +
      '<th scope="col">Status</th>' +
      '<th scope="col">Document</th>';
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
      "<td class='start-date' id='start-date-" +
      id +
      "'>" +
      value.start_date +
      "</td>" +
      "<td class='end-date' id='end-date-" +
      id +
      "'>" +
      value.end_date +
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
      "<td id='phone-" +
      id +
      "'>" +
      value.phone +
      "</td>" +
      "<td id='teacher-" +
      id +
      "'>" +
      value.teacher +
      "</td>" +
      "<td id='reason-" +
      id +
      "'>" +
      value.reason +
      "</td>" +
      "<td class='upload' id='upload-" +
      id +
      "'>";
    if (id == 8) {
      table += "Waiting for Upload" + "</td>";
    } else {
      table += "Approved on " + value.time + "</td>";
    }
    table += "<td><a href='resources/personal_leave_letter.pdf' download>" + '<i class="bi bi-file-earmark-arrow-down m-0"></i><span class="clickable-text">Download</span>' + "</a></td>" + "</tr>";

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
