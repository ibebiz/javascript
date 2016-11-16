var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function check() {
    var email = document.getElementById("txtMail").value;
    if (!filter.test(email)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        email.focus;
        return false;
    }
    else {
        return true;
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
        alert("Nội dung bạn vừa nhập như sau: Họ tên:" + name + "   Phone: " + phone + "  Email: " + mail);
    }
}