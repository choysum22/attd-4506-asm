$(document).ready(function () {
  $.getJSON("js/json/student.json", function (data) {
    var student = "";

    $.each(data, function (key, value) {
      student += "<tr><td>" + value._id + "</td>" + "<td>" + value.name + "</td>" + "<td>" + value.gender + "</td></tr>";
    });

    $("#students").append(student);
  });

  console.log(student);
});
