var cls = "";
function selectClass(c) {
  cls = c;
  console.log("cls = " + cls + ", c = " + c);

  var _class_unsplit = document.getElementById("class-" + cls).innerHTML;
  var year = document.getElementById("year-" + cls).innerHTML;
  var student_unsplit = document.getElementById("student-" + cls).innerHTML;
  var description = document.getElementById("description-" + cls).innerHTML;

  var _class = _class_unsplit.split(" ")[1];
  var student = student_unsplit.split(" ")[0];

  console.log(_class);
  console.log(year);
  console.log(student);
  console.log(description);

  document.getElementById("edit-class-input").value = _class;
  document.getElementById("edit-year-input").value = year;
  document.getElementById("edit-students-input").value = student;
  document.getElementById("edit-description-input").value = description;
}
function editClass() {
  var _class = document.getElementById("edit-class-input").value;
  var year = document.getElementById("edit-year-input").value;
  var student = document.getElementById("edit-students-input").value;
  var description = document.getElementById("edit-description-input").value;

  document.getElementById("class-" + cls).innerHTML = "Class " + _class;
  document.getElementById("year-" + cls).innerHTML = year;
  document.getElementById("student-" + cls).innerHTML = student + " Students";
  document.getElementById("description-" + cls).innerHTML = description;

  document.getElementById("class-" + cls).id.innerHTML = document.getElementById("class-" + cls).id = "class-" + _class;
  document.getElementById("year-" + cls).id = "year-" + _class;
  document.getElementById("student-" + cls).id = "student-" + _class;
  document.getElementById("description-" + cls).id = "description-" + _class;
  document.getElementById("view-btn-" + cls).id = "view-btn-" + _class;
  document.getElementById("edit-btn-" + cls).id = "edit-btn-" + _class;
  document.getElementById("edit-btn-" + _class).setAttribute("onclick", "selectClass('" + _class + "')");
}
