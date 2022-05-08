var fake_id = 101;
document.getElementById("id-input").value = fake_id;
function addAccount() {
  var id = document.getElementById("id-input").value;
  var name = document.getElementById("name-input").value;
  var _class = document.getElementById("class-input").value;
  var phone = document.getElementById("phone-input").value;
  var email = document.getElementById("email-input").value;
  var gender = document.getElementById("gender-select").value;
  var type = document.getElementById("type-select").value;
  var password = document.getElementById("password-input").value;
  var div = document.getElementById("users").innerHTML;
  fake_id++;
  div +=
    '<tr><td id="id-' +
    fake_id +
    '">' +
    id +
    '</td><td id="name-' +
    id +
    '">' +
    name +
    '</td><td id="class-' +
    id +
    '">' +
    _class +
    '</td><td id="phone-' +
    id +
    '">' +
    phone +
    '</td><td id="email-' +
    id +
    '">' +
    email +
    '</td><td id="gender-' +
    id +
    '">' +
    gender +
    '</td><td id="password-' +
    id +
    '">' +
    password +
    '</td><td id="type-100">' +
    type +
    '</td><td id="status-' +
    id +
    '">Enabled</td><td><a href="#" class="table-button" id="edit-user-' +
    id +
    '" onclick="toggleAccount(' +
    id +
    ')">Disable</a></td></tr>';
  document.getElementById("id-input").value = fake_id;
  document.getElementById("users").innerHTML = div;
}
