$(document).ready(function () {
  var email;
  var href;
  $("#save-btn-new-account").click(function () {
    email = document.getElementById("email").value;
    if (email === "student@gmail.com") {
      href = "Main-student.html";
      console.log(href);
    } else if (email === "teacher@gmail.com") {
      href = "Main-teacher.html";
      console.log(href);
    }

    if (href != undefined) {
      location.href = href;
    }
    console.log(href);
  });
});
