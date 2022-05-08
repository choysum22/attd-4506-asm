var student_array;
var gender;
$(document).ready(function () {
  $.getJSON("js/json/student.json", function (data) {
    var student = "";

    $.each(data, function (key, value) {
      if (value.gender === "Female(F)") {
        gender = 1;
      } else {
        gender = 2;
      }
      student_array = [value._id, value.name, value.email, value.phone, gender, value.password];
      student +=
        "<tr><td id='id-" +
        value._id +
        "'>" +
        value._id +
        "</td>" +
        "<td id='name-" +
        value._id +
        "'>" +
        value.name +
        "</td>" +
        "<td id='email-" +
        value._id +
        "'>" +
        value.email +
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
        "<td id='password-" +
        value._id +
        "'>" +
        value.password +
        "</td>" +
        "<td>" +
        "<a href='#' id=edit-student-" +
        value._id +
        " onclick='editStudent(" +
        value._id +
        ")'>Edit</a>" +
        "</td></tr>";
    });

    $("#students").append(student);
  });

  console.log(student);
});

var selected_id;
var selected_gender;
function editStudent(id) {
  selected_id = id;
  selected_gender = document.getElementById("gender-" + selected_id).innerHTML;
  document.getElementById("class-container").classList.add("animation2");
  document.getElementById("name-input").value = document.getElementById("name-" + selected_id).innerHTML;
  if (selected_gender === "Male(M)") {
    document.getElementById("gender-select").innerHTML = "<option value='1' selected>Male(M)</option><option value='2'>Female(F)</option>";
  } else if (selected_gender === "Female(F)") {
    document.getElementById("gender-select").innerHTML = "<option value='1'>Male(M)</option><option value='2' selected>Female(F)</option>";
  }

  document.getElementById("email-input").value = document.getElementById("email-" + selected_id).innerHTML;
  document.getElementById("phone-input").value = document.getElementById("phone-" + selected_id).innerHTML;
  document.getElementById("password-input").value = document.getElementById("password-" + selected_id).innerHTML;
  console.log("clicked " + selected_id);
}

function saveChanges() {
  if (selected_id != undefined) {
    document.getElementById("class-container").classList.remove("animation2");
    document.getElementById("name-" + selected_id).innerHTML = document.getElementById("name-input").value;
    var selected = document.getElementById("gender-select").value;
    if (selected == 1) {
      document.getElementById("gender-" + selected_id).innerHTML = "Male(M)";
    } else if (selected == 2) {
      document.getElementById("gender-" + selected_id).innerHTML = "Female(F)";
    }
    document.getElementById("email-" + selected_id).innerHTML = document.getElementById("email-input").value;
    document.getElementById("phone-" + selected_id).innerHTML = document.getElementById("phone-input").value;
    document.getElementById("password-" + selected_id).innerHTML = document.getElementById("password-input").value;

    resetInput();
  }
}

function resetInput() {
  selected_id = undefined;
  document.getElementById("name-input").value = "";
  document.getElementById("gender-select").value = "1";
  document.getElementById("email-input").value = "";
  document.getElementById("phone-input").value = "";
  document.getElementById("password-input").value = "";
}

function removeAnimation() {
  document.getElementById("class-container").classList.remove("animation2");
}

function addAnimation() {
  document.getElementById("class-container").classList.add("animation2");
}

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
