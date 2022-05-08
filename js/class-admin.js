$(document).ready(function () {
  $.getJSON("js/json/classes.json", function (data) {
    var _classes = "";

    var i = 1;
    $.each(data, function (key, value) {
      _classes +=
        "<tr><td id='id-" +
        value._id +
        "'>" +
        i++ +
        "</td>" +
        "<td id='class-" +
        value._id +
        "'>" +
        value._class +
        "</td>" +
        "<td id='year-" +
        value._id +
        "'>" +
        value.year +
        "</td>" +
        "<td id='students-" +
        value._id +
        "'>" +
        value.students +
        "</td>" +
        "<td id='teacher-" +
        value._id +
        "'>" +
        value.teacher +
        "</td>" +
        "<td id='status-" +
        value._id +
        "'>" +
        value.status +
        "</td>" +
        "<td><a class='edit-class clickable-text-admin' href='#' id=edit-class-" +
        value._id +
        " onclick='editClass(" +
        value._id +
        ")'>Edit</a>";
      if (value.status === "Active") {
        _classes += "<td>" + "<a href='#' class='table-button clickable-text-admin' id=edit-class-status-" + value._id + " onclick='toggleArchive(" + value._id + ")'>Archive</a></td>";
      } else if (value.status === "Archived") {
        _classes += "<td>" + "<a href='#' class='table-button' id=edit-class-status-" + value._id + " onclick='toggleArchive(" + value._id + ")'>Unarchive</a></td>";
      }
      _classes += +"</td></tr>";
    });

    $("#classes").append(_classes);
  });
});

var selected_id;
function toggleArchive(id) {
  selected_id = id;
  if (document.getElementById("status-" + selected_id).innerHTML === "Active") {
    document.getElementById("status-" + selected_id).innerHTML = "Archived";
    document.getElementById("edit-class-status-" + selected_id).innerHTML = "Unarchive";
    document.getElementById("edit-class-status-" + selected_id).classList.add("disabled");
    document.getElementById("edit-class-status-" + selected_id).classList.remove("enabled");
  } else if (document.getElementById("status-" + selected_id).innerHTML === "Archived") {
    document.getElementById("status-" + selected_id).innerHTML = "Active";
    document.getElementById("edit-class-status-" + selected_id).innerHTML = "Archive";
    document.getElementById("edit-class-status-" + selected_id).classList.add("enabled");
    document.getElementById("edit-class-status-" + selected_id).classList.remove("disabled");
  }
}

function editClass(id) {
  selected_id = id;
  addAnimation();
  document.getElementById("class-input").value = document.getElementById("class-" + selected_id).innerHTML;
  document.getElementById("year-input").value = document.getElementById("year-" + selected_id).innerHTML;
  document.getElementById("students-input").value = document.getElementById("students-" + selected_id).innerHTML;
  document.getElementById("teacher-input").value = document.getElementById("teacher-" + selected_id).innerHTML;
  console.log("clicked " + selected_id);
}

function saveChanges() {
  if (selected_id != undefined) {
    removeAnimation();
    document.getElementById("class-" + selected_id).innerHTML = document.getElementById("class-input").value;
    document.getElementById("year-" + selected_id).innerHTML = document.getElementById("year-input").value;
    document.getElementById("students-" + selected_id).innerHTML = document.getElementById("students-input").value;
    document.getElementById("teacher-" + selected_id).innerHTML = document.getElementById("teacher-input").value;

    resetInput();
  }
}

function resetInput() {
  selected_id = undefined;
  document.getElementById("class-input").value = "";
  document.getElementById("year-input").value = "";
  document.getElementById("students-input").value = "";
  document.getElementById("teacher-input").value = "";
}

function removeAnimation() {
  document.getElementById("classes-container").classList.remove("animation");
}

function addAnimation() {
  document.getElementById("classes-container").classList.add("animation");
}
