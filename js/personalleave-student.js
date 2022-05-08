function save() {
  alert("Personal Leave Application Submitted!");
  var type = document.getElementById("leave-type").value;
  var start_date = document.getElementById("leave-start-date").value;
  var end_date = document.getElementById("leave-end-date").value;
  var reason = document.getElementById("leave-reason").value;
  var contact = document.getElementById("leave-contact").value;
  var email = document.getElementById("leave-email").value;
  var upload = '<a href="personal_leave_letter.pdf" download><i class="bi bi-file-earmark-arrow-down m-0"></i> Download</a>';
  var status = "Pending";
  var table_row =
    "<tr>" +
    "<td>" +
    type +
    "</td>" +
    "<td>" +
    start_date +
    "</td>" +
    "<td>" +
    end_date +
    "</td>" +
    "<td>" +
    reason +
    "</td>" +
    "<td>" +
    contact +
    "</td>" +
    "<td>" +
    email +
    "</td>" +
    "<td>" +
    upload +
    "</td>" +
    "<td>" +
    status +
    "</td>" +
    "</tr>";

  $("#personalleave-tbody").append(table_row);
  reset();
}

function reset() {
  document.getElementById("leave-start-date").value = "";
  document.getElementById("leave-end-date").value = "";
  document.getElementById("leave-reason").value = "";
  document.getElementById("leave-contact").value = "";
  document.getElementById("leave-email").value = "";
  document.getElementById("leave-upload").value = "";
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
