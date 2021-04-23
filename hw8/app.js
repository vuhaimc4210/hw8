//bai 1

const btn = document.getElementById("btn");
const content = document.getElementById("content");
let index = 0;
btn.onclick = function () {
    if(index % 2 === 0){
        content.style.backgroundColor = "white";
        content.style.color = 'white';
    }
    else{
        content.style.backgroundColor = "red";
        content.style.color = 'black';
    }
    index++;
}

//bai 2

const btn2 = document.getElementById("btn2");
const content2 = document.getElementById("content2");
let index2 = 1;
let ColorRandom = ['pink', 'red', 'blue', '#789', 'green', 'yellow'];
btn2.onclick = function () {
    if(index2 >= ColorRandom.length) index2 = 0;
    content2.style.backgroundColor = ColorRandom[index2];
    index2 ++;
}

//bai 3
const btn3 = document.getElementById("btn3");
const content31 = document.getElementById("content31");
const content32 = document.getElementById("content32");
let index3 = 0;
btn3.onclick = function () {
    if(index3 % 2 === 0){
        content31.innerHTML = "Đã đảo nội dung khối 2";
        content32.innerHTML = "Đảo nội dung khối 1 thành khối 2 và ngược lại";
    }
    else{
        content32.innerHTML = "Đã đảo nội dung khối 2";
        content31.innerHTML = "Đảo nội dung khối 1 thành khối 2 và ngược lại";
    }
    index3++;
}

//bai 4
const btn4 = document.getElementById("btn4");
const content4 = document.getElementById("content4");
let index4 = 15;
btn4.onclick = function () {
    content4.style.fontSize = `${index4}px`; 
    index4++;
}