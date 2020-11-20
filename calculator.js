
var a, b, c; // đây là khai báo biến global
//console.log(c);
function Sum() {
    return parseInt(a) + parseInt(b); //Chuyển đổi dạng text(a), text(b) sáng dạng số để cộng
    //document.getElementById("result").value = c;
    //document.getElementById("no.1").innerHTML = c; // Hiển thị giá trị c tại ô có id là result,  câu lẹnh innerHTML là xuất giá trị ra ô ở html
    //console.log(c);
}

function Difference() {
    return parseInt(a) - parseInt(b);
    //document.getElementById("result").value = c;
    //document.getElementById("no.1").innerHTML = c;

}
function Multiply() {
    return parseInt(a) * parseInt(b);
    //document.getElementById("result").value = c;
    //document.getElementById("no.1").innerHTML = c;
}

function Divide() {
    return parseInt(a) / parseInt(b);
    // document.getElementById("result").value = c;
    //document.getElementById("no.1").innerHTML = c;
}

function Calculate(e) {
    e.preventDefault();
    a = document.getElementById("number1").value; //Khai báo biến a là số thứ nhất khi nhập
    b = document.getElementById("number2").value; //Khai báo biến b là số thứ 2 khi nhập

    const value = document.getElementById('selectId').value;
    if (value === 'Select') {
        alert("Please select a calculator")
    }
    if (value === '+') {
        c = Sum(); //nếu muốn tạo mạng thì gán c = Sum(c).concart....
    }
    if (value === '-') {
        //Difference();
        c = Difference();
    }
    if (value === 'x') {
        //Multiply();
        c = Multiply();
    }
    if (value === ':') {
        //Divide();
        c = Divide();
    }

    document.getElementById("result").value = c;
    var ul = document.getElementById("history-list"); //khai báo biến ul là list ul
    var li = document.createElement("li"); //Thêm các phần tử li
    li.style.color = "blue"; //màu cho li
    li.style.fontWeight = "bold"; //kiểu chữ cho li

    li.appendChild(document.createTextNode(c));
    ul.appendChild(li);
    //ul.prepend(li); // đưa kết quả mới nhất của li lên đầu
}

function numberChange(e) {
    e.preventDefault();

    if (isNaN(e.target.value)) {
        alert("Please import type of number");
    }
}

function Clear() {
    document.getElementById("result").value = "";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("selectId").value = "Select";
}
function Randomnumber() {
    var x = Math.floor((Math.random() * 10000) + 1);
    var y = Math.floor((Math.random() * 10000) + 1);
    document.getElementById("number1").value = x;
    document.getElementById("number2").value = y;

    var select = document.getElementById('selectId'); //Khai báo gán giá trị trong ô select cho biến select
    var items = select.getElementsByTagName('option'); //Chọn 1 cái trong các dòng cùng tên "Option"
    var index = Math.floor(Math.random() * (items.length - 1)); // Chọn random 1 cái
    select.selectedIndex = index + 1; //Chọn 1 giá trị trong mục select gán cho index
    return false;
}
// string, number, null, undefined, function, ...
// array, object

// createElement, appendChild
// tag = '<li>' + c + '</li>' (x)
// document.createElement('li') (o)

// 태그는 <li style='color:blue; font-weight: bold'color:blue; font-weight: bold'>{결과값}</li>