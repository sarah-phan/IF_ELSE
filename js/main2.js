function hello(){
    // Biến để lấy giá trị từ select form 
    var option = document.getElementById("selectMember").value;
    // D là giá trị tương ứng với câu "Chọn thành viên"
    if (option == "D"){
        document.getElementById("txtHello").innerHTML = "Xin chào Người lạ ơi!";
    }
    // F là giá trị tương ứng với Bố
    else if (option == "F"){
        document.getElementById("txtHello").innerHTML = "Xin chào Bố!";
    }
    // M là giá trị tương ứng với Mẹ
    else if (option == "M"){
        document.getElementById("txtHello").innerHTML = "Xin chào Mẹ!";
    }
    // B là giá trị tương ứng với Anh Trai
    else if (option == "B"){
        document.getElementById("txtHello").innerHTML = "Xin chào Anh Trai!";
    }
    // S là giá trị tương ứng với Em Gái
    else{
        document.getElementById("txtHello").innerHTML = "Xin chào Em Gái!";
    }
}
document.getElementById("btnHello").onclick = hello;