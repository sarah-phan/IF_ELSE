function numberIncreasing(){
    // Số input thứ nhất 
    var num1 = document.getElementById("num1").value;
    // Số input thứ hai 
    var num2 = document.getElementById("num2").value;
    // Số input thứ ba 
    var num3 = document.getElementById("num3").value;
    console.log(num1, num2, num3);

    // Giá trị để lấy số nhỏ nhất
    var a;
    // Giá trị để lấy số nhỏ hơn thứ 2
    var b;
    // Giá trị để lấy số nhỏ hơn thứ 3
    var c; 

    if ((num1 < num2) && (num1 < num3)){
        a = num1;
        if(num2 < num3){
            b = num2;
            c = num3;
        }
        else{
            b = num3;
            c = num2;
        }
    }
    else if ((num2 < num1) && (num2 < num3)){
        a = num2;
        if (num1 < num3){
            b = num1;
            c = num3;
        }
        else{
            b = num3;
            c = num1;
        }
    }else if ((num3 < num1) && (num3 < num2)){
        a = num3;
        if(num1 < num2){
            b = num1;
            c = num2;
        }
        else{
            b = num2;
            c = num1;
        }
    }      
    document.getElementById("txtIncreasing").innerHTML = "3 số theo thứ tự tăng dần: " + a + " < " + b + " < " + c;
}
document.getElementById("btnIncreasing").onclick = numberIncreasing;
