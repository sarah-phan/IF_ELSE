function triangle(){
    // Giá trị input cạnh thứ nhất
    var length1 = document.getElementById("length1").value;
    // Giá trị input cạnh thứ 2
    var length2 = document.getElementById("length2").value;
    // Giá trị input cạnh thứ 3
    var length3 = document.getElementById("length3").value;

    if ((length1 == length2) && (length2 == length3) && (length1 == length3)){
        document.getElementById("txtTriangle").innerHTML = "Tam giác đều";
    }
    else if ((length1 == length2) || (length2 == length3) || (length1 == length3)){
        document.getElementById("txtTriangle").innerHTML = "Tam giác cân";
    }
    else if (Math.pow(length3,2) == (Math.pow(length1,2) + Math.pow(length2,2))){
        document.getElementById("txtTriangle").innerHTML = "Tam giác vuông";
    }
    else
        document.getElementById("txtTriangle").innerHTML = "Tam giác khác";
}
document.getElementById("btnTriangle").onclick = triangle;