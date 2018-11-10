var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "* Vui lòng nhập tên";
    } else if (txtUsername.value.length > 50) {
        msgUsername.innerHTML = "* Tên tối đa 50 kí tự";
    } else {
        msgUsername.innerHTML = "* Tên hợp lệ";
    }

    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var valueTxtEmail = txtEmail.value
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email của bạn";
    } else {
        if (valueTxtEmail.search('@') == -1) {
            msgEmail.innerHTML = "* Email không hợp lệ. Vui lòng điền email theo dạng abc@gmail.com";
        } else {
            msgEmail.innerHTML = "* Email hợp lệ";
        }
    }
}
var btnsubmit = document.forms["favourite-form"]["btn-submit"];
btnsubmit.onclick = function () {
    var listfavourite = document.querySelectorAll("input[type='checkbox]:checked");
    var favouriteGame = "";
    for (var i = 0; i < listfavourite.length; i++) {
        favouriteGame += listfavourite[i].value + ",";
    }
    alert(favouriteGame.substring(0, favouriteGame.length - 2));
}