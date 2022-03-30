function getEle(id) {
    return document.getElementById(id);
}
var arr = [];
getEle("btn1").onclick = function(){
    
    var number = getEle("txtSo").value * 1;
    arr.push(number);
    getEle("textHelp").innerHTML = arr;
}

getEle("btn2").onclick = function(){
    var tong = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            tong += arr[i];
        }
    }
    getEle("kq").innerHTML = "Tổng các số dương trong mảng: " + tong;
}

getEle("btn3").onclick = function(){
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            temp++;
        }
    }
    getEle("kq").innerHTML = "Có " + temp + " số dương trong mảng";
}

getEle("btn4").onclick = function(){
    var min = 0;
    var arrTemp = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            arrTemp.push(arr[i]);
        }
        
    }
    min = arrTemp[0];
    for (var i = 1; i < arrTemp.length; i++) {
        if(min > arrTemp[i]){
            min = arrTemp[i];
        }
        
    }
    getEle("kq").innerHTML = "Số dương nhỏ nhất trong mảng: " + min;
}

getEle("btn5").onclick = function(){
    var soChan = 0;
    for (var i = arr.length-1; i >= 0; i--) {
        if(arr[i] % 2 === 0){
            soChan = arr[i];
            break;
        }
        
    }
    getEle("kq").innerHTML = "Số chẵn cuối cùng trong mảng: " + soChan;
}

getEle("btn6").onclick = function(){
    var viTri1 = prompt("Vị trí đổi:");
    var viTri2 = prompt("Đổi với:");
    if(viTri1 >= arr.length || viTri1 < 0){
        alert("Vị trí muốn đổi sai !");
        return;
    }
    if(viTri2 >= arr.length || viTri2 < 0){
        alert("Vị trí muốn đổi sai !");
        return;
    }
    var temp = arr[viTri2];
    arr[viTri2] = arr[viTri1];
    arr[viTri1] = temp;
    getEle("kq").innerHTML = "Mảng sau khi hoán đổi 2 vị trí: " + arr;

}

getEle("btn7").onclick = function(){
    var arrTemp = arr;
    for (var i = 0; i < arrTemp.length-1; i++) {
        for (var j = i+1; j < arrTemp.length; j++) {
            if(arrTemp[i] > arrTemp[j]){
                var temp = arrTemp[i];
                arrTemp[i] = arrTemp[j];
                arrTemp[j] = temp;
            }

        }
    }
    getEle("kq").innerHTML = "Mảng sau khi sắp xếp theo thứ tự tăng dần: " + arrTemp;
}

getEle("btn8").onclick = function(){
    
    
    var kq = 0;
    for (var i = 0; i < arr.length; i++) {
        if(isprime(arr[i]) === 1){
            kq = arr[i];
            break;
        }
    }
    getEle("kq").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " +  kq;
    console.log("abc");
}
function isprime(n){
    let flag = 1;

    if (n <2) return flag = 0;
    
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}

getEle("btn9").onclick = function(){
    var kq = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % Math.floor(arr[i]) === 0){
            kq++;
        }
        
    }
    getEle("kq").innerHTML = `Số nguyên trong mảng có ${kq} số`;
}

getEle("btn10").onclick = function(){
    var soDuong = 0;
    var soAm = 0;
    var kq = "";
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            soDuong++;
        }else if(arr[i] < 0){
            soAm++;
        }
        
    }
    if(soDuong > soAm){
        kq = "Số dương nhiều hơn số âm";
    }else if(soDuong < soAm){
        kq = "Số âm nhiều hơn số dương";
    }else{
        kq = "Số lượng 2 số bằng nhau";
    }
    getEle("kq").innerHTML = `Có ${soDuong} số dương và có ${soAm} số âm <br/>${kq}`;

}