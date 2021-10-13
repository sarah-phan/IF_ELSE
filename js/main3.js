function counting(){
    // Giá trị input số thứ nhất
    var num1 = document.getElementById("number1").value;
    // Giá trị input số thứ 2
    var num2 = document.getElementById("number2").value;
    // Giá trị input số thứ 3
    var num3 = document.getElementById("number3").value;
    console.log(num1,num2,num3);
    // Biến đếm
    var count = 0;
    // Biến số chẵn (lấy giá trị từ biến đếm)
    var even;
    // Biển số lẻ
    var odd;
    if (num1 % 2 == 0){
        count++;
    }
    if (num2 % 2 == 0){
        count++;
    }
    if (num3 % 2 == 0){
        count++;
    }
    even = count;
    odd = 3 - even;
    document.getElementById("txtCount").innerHTML = "Có " + even + " số chẵn và " + odd + " số lẻ";
}
document.getElementById("btnCount").onclick = counting;