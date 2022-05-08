function addClass() {
  var _class = document.getElementById("class-input").value;
  var year = document.getElementById("year-input").value;
  var student = document.getElementById("students-input").value;
  var description = document.getElementById("description-input").value;
  var div = document.getElementById("subject-row").innerHTML;
  var newdiv =
    div +
    '<div class="col-xl-3 subject-card-col">' +
    '<div class="card subject-card">' +
    '<div class="card-body class-card">' +
    '<h5 class="card-title" id="class-' +
    _class +
    '">Class ' +
    _class +
    "</h5>" +
    '<p class="card-text" id="year-' +
    _class +
    '">' +
    year +
    "</p>" +
    '<p class="card-text text-justify" id="student-' +
    _class +
    '">' +
    student +
    " Students</p>" +
    '<div class="description-container overflow-auto"><p class="card-texttext-justify text-muted description" id="description-' +
    _class +
    '">' +
    description +
    "</p></div>" +
    '<a href="#" class="btn edit-class-info-btn" id="view-btn-' +
    _class +
    '">View</a>' +
    '<a href="#" class="btn edit-class-info-btn" id="edit-btn-' +
    _class +
    '" onclick="selectClass(' +
    "'" +
    _class +
    "'" +
    ')" data-bs-toggle="modal" data-bs-target="#editClassModalCenter">Edit</a>' +
    "</div>" +
    "</div>" +
    "</div>";
  document.getElementById("subject-row").innerHTML = newdiv;
  document.getElementById("class-input").value = "";
  document.getElementById("year-input").value = "";
  document.getElementById("students-input").value = "";
  document.getElementById("description-input").value = "";
  console.log(newdiv);
}
