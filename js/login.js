$(document).ready(function () {
  var userid;
  var href;
  $("#username").keyup(function (e) {
    userid = document.getElementById("username").value;
    pw = document.getElementById("password").value;
    console.log(userid);
  });
  $("#login-btn").click(function () {
    if (userid === "s01234" || pw === "password") {
      href = "Main-student.html";
      console.log(href);
    } else if (userid === "kfc420" || pw === "ihatethisschool") {
      href = "Main-teacher.html";
      console.log(href);
    } else if (userid === "root" || pw === "xJDSx*5gpN^f&YH") {
      href = "Main-admin.html";
      console.log(href);
    } else if (userid === "s23456" || pw === "s23456") {
      href = "New-account.html";
      console.log(href);
    } else {
      alert("Invalid username or password");
      location.reload();
    }

    if (href != undefined) {
      location.href = href;
    }
    console.log(href);
  });
});
