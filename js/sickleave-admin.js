$(document).ready(function () {
  $.getJSON("js/json/user.json", function (data) {
    var user = "";

    $.each(data, function (key, value) {
      if (value.gender === "Female(F)") {
        gender = 1;
      } else {
        gender = 2;
      }
      user +=
        "<tr id='mark-sickleave-row-" +
        value._id +
        "'><td id='id-" +
        value._id +
        "'>" +
        value._id +
        "</td>" +
        "<td id='name-" +
        value._id +
        "'>" +
        value.name +
        "</td>" +
        "<td id='class-" +
        value._id +
        "'>" +
        value.Class +
        "</td>" +
        "<td id='phone-" +
        value._id +
        "'>" +
        value.phone +
        "</td>" +
        "<td id='gender-" +
        value._id +
        "'>" +
        value.gender +
        "</td>" +
        "<td id='reason-" +
        value._id +
        "'> N/A" +
        "</td>" +
        "<td>" +
        "<a href='#' class='table-button clickable-text-admin' id='mark-sickleave-" +
        value._id +
        "' data-bs-toggle='modal' data-bs-target='#markSickModalCenter' onclick='setId(" +
        value._id +
        ")'>Mark as Sick Leave</a>" +
        "</td></tr>";
    });

    var header = "<th>ID</th>" + "<th>Name</th>" + "<th>Class</th>" + "<th>Contact</th>" + "<th>Gender</th>" + "<th>Reason</th>" + "<th>Action</th>";

    document.getElementById("students-attendance-header").innerHTML = header;
    $("#students-attendance").append(user);
  });

  console.log(user);
});

var selected_id;

function setId(id) {
  selected_id = id;
}

function saveSickLeave() {
  if (document.getElementById("sickleave-cb").checked) {
    document.getElementById("reason-" + selected_id).innerHTML = document.getElementById("reason-input").value;
    document.getElementById("mark-sickleave-" + selected_id).innerHTML = "Edit";
    document.getElementById("mark-sickleave-" + selected_id).classList.add("disabled");
    document.getElementById("mark-sickleave-" + selected_id).classList.remove("enabled");
  }
  if (document.getElementById("sickleave-cb").checked == false) {
    document.getElementById("reason-" + selected_id).innerHTML = "N/A";
    document.getElementById("mark-sickleave-" + selected_id).innerHTML = "Mark as Sick Leave";
    document.getElementById("mark-sickleave-" + selected_id).classList.add("enabled");
    document.getElementById("mark-sickleave-" + selected_id).classList.remove("disabled");
  }
  // document.getElementById("save-btn-modal").disabled = true;
  // document.getElementById("reason-input").value = "";
  // document.getElementById("sickleave-cb").checked = false;
}

function toggleInput() {
  if (document.getElementById("sickleave-cb").checked) {
    document.getElementById("reason-input").disabled = false;
  } else {
    document.getElementById("reason-input").disabled = true;
    document.getElementById("reason-input").value = "";
  }
}

function inputOnChange() {
  if (!document.getElementById("reason-input").value == "") {
    document.getElementById("save-btn-modal").disabled = false;
  } else {
    document.getElementById("save-btn-modal").disabled = true;
  }
}

function save() {
  alert("Saved Attendance Changes.");
}
