// console.log(document);

// //HTML selector

// //Lấy theo id
// const app = document.getElementById("app");
// console.log(app);


// //Lấy theo className
// const nameDiv = document.getElementsByClassName("div-1");
// console.log(nameDiv[0]);


// //Lấy theo tagName
// const divList = document.getElementsByTagName("div");
// console.log(divList); // div nhưu là mảng


// //Lấy theo query và querySelectorAll
// const appQuery =  document.querySelector("#app");
// console.log(appQuery);

// const queryAll = document.querySelectorAll(".div-1");
// console.log("a");
// console.log(queryAll);


// //important properties and method
// console.dir(app);


// //text and content
// /*Thường chỉ dùng innerHTML*/
// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);
// app.innerHTML = "<b>good morning</b>"
// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);
// app.innerText = "<b>good afternoon</b>"
// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);
// app.textContent = "<b>good night</b>"
// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);


// //style
// console.log(app.style);

// console.log(app.style.backgroundColor);//không có gì

// app.style.backgroundColor = 'pink';
// console.log(app.style.backgroundColor);//ra màu pink

// /*Exercise: Cho 1 thẻ div chứa nội dung bên trong.
//  Sau đó thay đổi màu, nội dung và in đậm nó*/

// const exer = document.getElementsByClassName("exercise");
// console.log(exer);
// exer[0].style.backgroundColor = 'blue';
// exer[0].innerHTML = "<b>Nội dung đã sửa và in đậm</b>";

// /*Exercise 2: Cho 3 thẻ div, lấy tất cả các phẩn tử của nó
// và thay đổi màu sắc của từng phần tử*/
// const exer2 = document.getElementsByClassName("exercise2");//hoặc dùng document.querySelectorAll(".exercise2");
// console.log(exer2);
// console.log(exer2[0]);
// console.log(exer2[1]);
// console.log(exer2[2]);
// exer2[0].style.backgroundColor = 'red';
// exer2[1].style.backgroundColor = 'green';
// exer2[2].style.backgroundColor = 'pink';




//chidren, parentElement

const ul = document.getElementById("list");
console.log(ul);
console.log(ul.children);

const li = ul.children[0];
console.log(li);
console.log(li.parentElement);//truy cập ngược vào phần tử cha từ phần tử con


//classList, id
console.log(ul.id); // Lấy ra id của ul
console.log(ul.classList);
console.log(ul.className);


//add class
ul.classList.add("cl4");
console.log(ul);
//remove class
ul.classList.remove("cl1");
console.log(ul);

// Method: remove(), createElement(), appenChild

// const ul = document.getElementById("list");

// console.log(li);
// li.remove();


const newLi = document.createElement("li")
ul.appendChild(newLi);

newLi.innerHTML = "Đi Chơi vs gái";


// event and click event

// const btn = document.getElementById("btn");
// console.log(btn);

// btn.onclick = function() {
//     alert("Hello");
// }


// Cho 1 thẻ div và 1 button. sau khi click vào button
// thì thay đổi nội dung, cỡ chữ, màu sắc,
// của thẻ div 

const btn = document.getElementById("btn");
const change = document.getElementById("change");

btn.onclick = function () {
    change.innerHTML = "đã thay đổi";
    change.style.fontSize = "30px",
    change.style.color = "red";
}
