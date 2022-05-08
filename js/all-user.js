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
        "<td id='class-" +
        value._id +
        "'>" +
        value.Class +
        "</td>" +
        "</td>" +
        "<td id='phone-" +
        value._id +
        "'>" +
        value.phone +
        "</td>" +
        "<td id='email-" +
        value._id +
        "'>" +
        value.email +
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
        "<td id='type-" +
        value._id +
        "'>" +
        value.type +
        "</td>" +
        "<td id='status-" +
        value._id +
        "'>" +
        value.status +
        "</td>";
      if (value.status === "Enabled") {
        user += "<td>" + "<a href='#' class='table-button clickable-text-admin' id=edit-user-" + value._id + " onclick='toggleAccount(" + value._id + ")'>Disable</a>" + "</td></tr>";
      } else if (value.status === "Disabled") {
        user += "<td>" + "<a href='#' class='table-button clickable-text-admin' id=edit-user-" + value._id + " onclick='toggleAccount(" + value._id + ")'>Enable</a>" + "</td></tr>";
      }
    });

    $("#users").append(user);
  });

  console.log(user);
});

var selected_id;
function toggleAccount(id) {
  selected_id = id;
  if (document.getElementById("status-" + selected_id).innerHTML === "Enabled") {
    document.getElementById("status-" + selected_id).innerHTML = "Disabled";
    document.getElementById("edit-user-" + selected_id).innerHTML = "Enable";
    document.getElementById("edit-user-" + selected_id).classList.add("disabled");
    document.getElementById("edit-user-" + selected_id).classList.remove("enabled");
  } else if (document.getElementById("status-" + selected_id).innerHTML === "Disabled") {
    document.getElementById("status-" + selected_id).innerHTML = "Enabled";
    document.getElementById("edit-user-" + selected_id).innerHTML = "Disable";
    document.getElementById("edit-user-" + selected_id).classList.add("enabled");
    document.getElementById("edit-user-" + selected_id).classList.remove("disabled");
  }
}
