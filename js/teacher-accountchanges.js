function savepwbutton() {
  var x = document.getElementById("edit-pw");
  var y = document.getElementById("editpw-btn");
  var z = document.getElementById("editemail-btn");
  x.style.display = "none";
  y.style.display = "inline-block";
  z.style.display = "inline-block";
  var pw = document.getElementById("table-pw");
  pw.innerHTML = document.getElementById("pw").value;
  document.getElementById("pw").value = "";
  document.getElementById("confirm-pw").value = "";
}

function changepw() {
  var x = document.getElementById("edit-pw");
  var y = document.getElementById("editpw-btn");
  var z = document.getElementById("editemail-btn");
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}

function saveemailbutton() {
  var x = document.getElementById("edit-email");
  var y = document.getElementById("editemail-btn");
  var z = document.getElementById("editpw-btn");
  x.style.display = "none";
  y.style.display = "inline-block";
  z.style.display = "inline-block";
  var email = document.getElementById("table-email");
  email.innerHTML = document.getElementById("email").value;
  document.getElementById("email").value = "";
}

function changeemail() {
  var x = document.getElementById("edit-email");
  var y = document.getElementById("editemail-btn");
  var z = document.getElementById("editpw-btn");
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}
