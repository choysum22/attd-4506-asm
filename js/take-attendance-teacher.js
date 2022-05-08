$(document).ready(function () {
  renderStudent();
});

var json_length = 0;
var checkbox_group = "";

function renderStudent() {
  $.getJSON("js/json/student_attendance_4A.json", function (data) {
    var table_left = "";
    var table_right = "";
    var color = "";
    var count = 1;

    //get json length
    json_length = data.length;
    console.log(json_length);

    $.each(data, function (key, value) {
      if (count <= parseInt(json_length / 2)) {
        if (value._id == 14) {
          table_left +=
            "<tr>" +
            "<td id='present-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox present group-" +
            value._id +
            "' id='present-" +
            value._id +
            "'/></td>" +
            "<td id='late-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox group-" +
            value._id +
            "' id='late-" +
            value._id +
            "'/></td>" +
            "<td id='absent-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox group-" +
            value._id +
            "' id='absent-" +
            value._id +
            "'/></td>" +
            "<td id='sickleave-cb-" +
            value._id +
            "'><input type='checkbox' checked='checked' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox sickleave group-" +
            value._id +
            "' id='sickleave-" +
            value._id +
            "' disabled /></td>";
        } else {
          table_left +=
            "<tr>" +
            "<td id='present-cb-" +
            value._id +
            "'><input type='checkbox' checked='checked' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox present group-" +
            value._id +
            "' id='present-" +
            value._id +
            "'/></td>" +
            "<td id='late-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox group-" +
            value._id +
            "' id='late-" +
            value._id +
            "'/></td>" +
            "<td id='absent-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox group-" +
            value._id +
            "' id='absent-" +
            value._id +
            "'/></td>" +
            "<td id='sickleave-cb-" +
            value._id +
            "'><input type='checkbox' onchange='setCheckboxRow(" +
            value._id +
            ")' class='checkbox sickleave group-" +
            value._id +
            "' id='sickleave-" +
            value._id +
            "' disabled /></td>";
        }

        table_left +=
          "<td id='earlyleave-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='earlyleave-" +
          value._id +
          "'/></td>" +
          "<td id='personalleave-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='personalleave-" +
          value._id +
          "'/></td>" +
          "<td id='id-" +
          value._id +
          "'>" +
          value._id +
          "</td>" +
          "<td id='class-" +
          value._id +
          "'>" +
          value._class +
          "</td>" +
          "<td id='name-" +
          value._id +
          "'>" +
          value.name +
          "</td></tr>";
      } else if (count > parseInt(json_length / 2)) {
        table_right +=
          "<tr>" +
          "<td id='present-cb-" +
          value._id +
          "'><input type='checkbox' checked='checked' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox present group-" +
          value._id +
          "' id='present-" +
          value._id +
          "'/></td>" +
          "<td id='late-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='late-" +
          value._id +
          "'/></td>" +
          "<td id='absent-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='absent-" +
          value._id +
          "'/></td>" +
          "<td id='sickleave-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox sickleave group-" +
          value._id +
          "' id='sickleave-" +
          value._id +
          "' disabled /></td>" +
          "<td id='earlyleave-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='earlyleave-" +
          value._id +
          "'/></td>" +
          "<td id='personalleave-cb-" +
          value._id +
          "'><input type='checkbox' onchange='setCheckboxRow(" +
          value._id +
          ")' class='checkbox group-" +
          value._id +
          "' id='personalleave-" +
          value._id +
          "'/></td>" +
          "<td id='id-" +
          value._id +
          "'>" +
          value._id +
          "</td>" +
          "<td id='class-" +
          value._id +
          "'>" +
          value._class +
          "</td>" +
          "<td id='name-" +
          value._id +
          "'>" +
          value.name +
          "</td></tr>";
      }
      count++;
    });
    var header =
      '<th scope="col">P</th>' +
      '<th scope="col">L</th>' +
      '<th scope="col">Abs</th>' +
      '<th scope="col">Sl</th>' +
      '<th scope="col">El</th>' +
      '<th scope="col">Pl</th>' +
      '<th scope="col">ID</th>' +
      '<th scope="col">Class</th>' +
      '<th scope="col">Name</th>';
    document.getElementById("users-header-left").innerHTML = header;

    document.getElementById("users-header-right").innerHTML = header;

    document.getElementById("users-left").innerHTML = table_left;
    document.getElementById("users-right").innerHTML = table_right;
  });
}

// from green to red according to attendance
function colorAttendance(rate) {
  if (rate >= 90) {
    return "green-bg";
  } else if (rate >= 80 && rate < 90) {
    return "blue-bg";
  } else if (rate >= 75 && rate < 80) {
    return "yellow-bg";
  } else if (rate >= 60 && rate < 75) {
    return "red-bg";
  } else {
    return "";
  }
}

// get date as file name
function date() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var date = year + "" + month + "" + day;
  return date;
}

// reset all button to default
function resetAttendance() {
  var all = document.getElementsByClassName("checkbox");
  for (var i = 0; i < all.length; i++) {
    if (i == 1) {
    } else {
      all[i].checked = false;
    }
  }
  //check all present button
  var all_present = document.getElementsByClassName("present");
  var sickleave = document.getElementsByClassName("sickleave");
  for (var i = 0; i < all_present.length; i++) {
    if (i == 13) {
      sickleave[i].checked = true;
    } else {
      all_present[i].checked = true;
    }
  }
}

//set checkbox group to checkbox_group
function setCheckboxRow(group) {
  checkbox_group = ".group-" + group;
  console.log(checkbox_group);
}

//save
function save() {
  //alert saved message
  alert("Saved!");
}

// select one check box at a time
$(document).on("change", ".group-1", function () {
  $(".group-1").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-2", function () {
  $(".group-2").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-3", function () {
  $(".group-3").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-4", function () {
  $(".group-4").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-5", function () {
  $(".group-5").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-6", function () {
  $(".group-6").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-7", function () {
  $(".group-7").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-8", function () {
  $(".group-8").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-9", function () {
  $(".group-9").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-10", function () {
  $(".group-10").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-11", function () {
  $(".group-11").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-12", function () {
  $(".group-12").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-13", function () {
  $(".group-13").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-14", function () {
  $(".group-14").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-15", function () {
  $(".group-15").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-16", function () {
  $(".group-16").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-17", function () {
  $(".group-17").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-18", function () {
  $(".group-18").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-19", function () {
  $(".group-19").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-20", function () {
  $(".group-20").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-21", function () {
  $(".group-21").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-22", function () {
  $(".group-22").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-23", function () {
  $(".group-23").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-24", function () {
  $(".group-24").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-25", function () {
  $(".group-25").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-26", function () {
  $(".group-26").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-27", function () {
  $(".group-27").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-28", function () {
  $(".group-28").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-29", function () {
  $(".group-29").not(this).prop("checked", false);
  console.log("onchange");
});

$(document).on("change", ".group-30", function () {
  $(".group-30").not(this).prop("checked", false);
  console.log("onchange");
});
