var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function check() {
    var email = document.getElementById("txtMail").value;
    if (!filter.test(email)) {
        email.focus;
        return false;
    }
    else {
        return true;
    }
}
function kthoplename() {
    var name = document.getElementById("txtName").value;
    if (name == null || name == "") {
        document.getElementById("tb1").innerHTML = "Chưa nhập tên bạn ơi !!!";
    }
    else
    {
        document.getElementById("tb1").innerHTML = "";
    }
}
function kthoplephone() {
    var phone = document.getElementById("txtPhone").value;
    if (phone == null || phone == "") {
        document.getElementById("tb2").innerHTML = ("Chưa nhập số phone bạn ơi !!!");
    }
    else
    {
        document.getElementById("tb2").innerHTML = "";
    }
}
function kthoplemail() {
    var mail = document.getElementById("txtMail").value;
    var kt = check();
    if (mail == null || mail == "") {
        document.getElementById("tb3").innerHTML = ("Chưa nhập email bạn ơi !!!");
    }
    else if (kt != true) {
        document.getElementById("tb3").innerHTML = ("Email chưa hợp lệ bạn ơi. \nExample@gmail.com");
    }
    else
    {
        document.getElementById("tb3").innerHTML = "";
    }
}
function sub() {
    var name = document.getElementById("txtName").value;
    var phone = document.getElementById("txtPhone").value;
    var mail = document.getElementById("txtMail").value;
    var kt = check();

    if (name == null || name == "") {
        document.getElementById("tb1").innerHTML = "Chưa nhập tên bạn ơi !!!";
    }
    else if (phone == null || phone == "") {
        document.getElementById("tb2").innerHTML = ("Chưa nhập số phone bạn ơi !!!");
    }
    else if (mail == null || mail == "") {
        document.getElementById("tb3").innerHTML = ("Chưa nhập email bạn ơi !!!");
    }
    else if (kt != true) {
        document.getElementById("tb3").innerHTML = ("Email chưa hợp lệ bạn ơi. \nExample@gmail.com");
    }
    else {
        alert("Nội dung bạn vừa nhập như sau: \nHọ tên:" + name + "\nPhone: " + phone + "  \nEmail: " + mail);
    }
}