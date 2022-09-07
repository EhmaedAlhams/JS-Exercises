// document.querySelector("h1").style.color = "Blue";

// import { User } from "./app";

// func();

// function func() {
//     // window.alert("Hello From JS file");

// }

// document.write("<h1>Hello <span>JavaScript</span></h1>");
// console.log("Hello From JS");

// console.error("Error");

// console.log(typeof (['Ahmad', 55]));
// console.log(typeof (false));
// console.log(typeof (undefined));
// console.log(typeof (null));

// var name = "Ehmaed",
//     age = 26;

// var num = 10;
// var num = 2;
// let number = 10;
// const numberTwo = 10;

// console.log(num);
// console.log(number);
// console.log(numberTwo);
// console.log("Elzero \\Web'\Schools\'");
// console.log("Welcome \nline continue");

// console.log(`${num} ${number} ${numberTwo}`); //ECMA6

// var NumberOne = 10;
// console.log(NumberOne);
// var NumberTwo = 20;
// console.log(NumberTwo);
// console.log(NumberOne + NumberTwo);
// console.log(`${NumberOne} \n ${NumberTwo}`);

// var html = `
//     <div>
//         <div>
//             <h1>Welcome</h1>
//         </div>
//     </div>
// `;

// document.write(html);

// let TheTitle = "Elzero", DescriptionPage = "Elzero Web Schools", TheDate = 25 / 10;

// let html = `
//     <div>
//         <p></p>
//         <span></span>
//     </div>
// `;

// document.write(html.repeat(4));

// console.log(var1.innerHTML);

// console.log(10 / 50);
// console.log(1 - "a");
// console.log(typeof NaN);

// console.log(2 ** 4);
// console.log(- "-100");
// console.log(typeof - "-100");

// let count = 0;
// let sum = document.getElementById("sum");

// function increment(){
//     count++;
//     sum.innerText = count;
// }
// function decrement(){
//     count--;
//     sum.innerText = count;
// }

// console.log(100..toString());
// console.log(100.55.toFixed(3));
// console.log(parseInt("100"));

// console.log(Number.isInteger(10));
// console.log(Number.isNaN("Ahmad" / 10));

// let st = "Elzero Web Schools";

// console.log(TheName.trim());
// console.log(TheName.length);
// console.log(TheName.trim().charAt(1).toUpperCase());

// console.log("10" === "10");

// let i = 10;
// var i = 100;
// console.log(`${i} ${i}`);

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Palestine";
// let student = true;

// brief if condition:
// discount === true ? price -= discountAmount : country === "Palestine";

// let result = price === 100 ? "Yes." : "No.";
// console.log(result);
// document.write(result);

// if (discount === true) {

//     price -= discountAmount;
//     console.log(price)

// } else if (country === "Palestine") {           //equal == equal value just, but 3 equal === equal value and type;

//     price -= discountAmount;
//     // console.log(price);

//     if (student == true) {
//         price -= 50;
//         console.log(price);
//     }
//     else {
//         price -= discountAmount;
//         console.log(price);
//     }

// } else {

//     price -= 10;
//     console.log(price);

//}

// day = "Design";

// switch (day) {
//     case "Design":
//         console.log(`${day}.`);
//         break;
//     case "First":
//         console.log(`${day}.`);
//         break;
//     default:
//         console.log("Unknown.");
// }

// let NewArray = ['Ahmad', 'Ahmad', "Ahmad"];

// NewArray[NewArray.length] = "moho";
// NewArray.unshift();

// console.log(NewArray.indexOf("Ehmaed"));
// console.log(NewArray.sort());
// console.log(NewArray.slice(0, 2));
// console.log(NewArray);
// console.log(NewArray.splice(2, 0, "A"));

// let TwoArray = ['Ahmad', 'Moh', "EHmae"];
// console.log(TwoArray);

// for (let i = 0; i < TwoArray.length; i++){
//     console.log(TwoArray[i]);
// }

// let arr = [1, "Ahmad", "Yasser", "Emad", 12, ['esraa', 'Ehmaed']];
// let newArr = [];

// MainLoop: for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'string') {
//         // console.log(newArr.push(arr[i]));
//         newArr.push(arr[i]);
//     }
//     nestedLoop: for (let ind = 0; ind < newArr.length; ind++){
//         // console.log(`- ${newArr[ind]}`);
//         break;
//     }
// }

// document.write(newArr);

// let arr = [1, "Ahmad", "Yasser", "Emad", 12, ['esraa', 'Ehmaed']];

// let index = 0;

// while (index <= arr.length) {
//     console.log(arr[index]);
//     index += 1;
// }

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let myAdmins = ["Ahmed", "Osamah", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amjad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let ii = myAdmins[i][0];

// for (let i = 0; i < myAdmins.length; i++) {
//     if (myAdmins[i] === "Stop" || myAdmins[i] === "stop") {
//         document.write(`<div>We Have ${i}  Admins</div>`);
//         console.log(`We Have ${i} Admins`);
//         // document.write(`<hr>`);
//         break;
//     } else {
//         for (let j = 0; j < myEmployees.length; j++) {

//             document.write(`\nThe Admins for Team ${i+1} Is ${myAdmins[i]}`);
//             document.write(`<hr>`);
//         }

//     }

//     // if (myAdmins[j] === "Stop" || myAdmins[j] === "stop") {
//     //     document.write(`<div>The Admins for Team ${j + 1}  Is ${myAdmins[j]}</div>`);
//     //     console.log(`We have ${j} and ${myAdmins[j]}`);
//     // }
//     // document.write(`- ${j + 1} ${myEmployees[j]}`);
//     // console.log(`We Have ${j} Team`);

// }

// function sayHello(userName) { //parameter and variable.
//     console.log(`Welcome ${userName}`);
// }

// // sayHello("Ehmaed"); //argument and value.

// document.getElementById("show").onclick = function () {
//     console.log("Show me Details");
// }

// document.getElementById("show").onclick = sayHello("Ehmaed");

// setTimeout(function () {
//     console.log("Shows");
// }, 3000);

// let number = function () {
//     return 10;
// }

// console.log(number());

// let num = () => 10;

// console.log(num());

// let result = num1 => num1;
// console.log(result(100));

// let a = 1;
// function parent() {
//     let a = 10;
//     console.log(a);

//     function child() {
//         let a = 100;
//         console.log(a);

//         function grand() {
//             let a = 1000;
//             console.log(`From Local Grand : ${a + 100000}`);
//         }
//         grand();
//     }
//     child();
// }
// parent();

// let newArr = [1, 2, 3, 4, 5];
// let addArr = newArr.map(function (Element, index, array) {
//     return Element + Element;
// }, 10);

// console.log(addArr);

// let add = newArr.map((Element) => Element + Element);
// console.log(typeof add);

// let str = "elZERo";
// let newArr = [];

// function swappingCase(str) {
//     for (let i = 0; i < str.length; i++){
//         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//             newArr.push(str.charAt(i).toLowerCase());
//             // newArr[i].push();
//             // return
//         }
//         else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             newArr.push(str.charAt(i).toUpperCase());
//             // newArr[i].push();
//             // return
//         }
//     }
//     console.log(`Done Function ${newArr}`);
// }

// swappingCase(str)
// console.log(str);
// function swappingCase(str) {
//     for (let i = 0; i < str.length; i++){
//         if (str.charAt(i).toLowerCase() === true) {
//             newArr.push(str.charAt(i).toUpperCase());
//         }
//         else {
//             newArr.push(str.charAt(i).toUpperCase());
//         }
//     }
//     console.log(`done function ${newArr}`);
// }

// swappingCase(str);

// let str = "elZERo";

// let sw = str.split("").map(function (element) {
//     return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
// }).join();

// // let sws = str.split("").map((element) => element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()).join("");

// console.log(sw);

// let invertedNumbers = [1, -10, -20, 15, 100, -30];

// function Inverted(invertedNumbers) {
//     for (let i = 0; i < invertedNumbers.length; i++){
//         if (invertedNumbers[i] > 0) {
//             console.log(`The Number positive: ${invertedNumbers[i] * -1}`);

//         }
//         else {
//             console.log(`The number negative: ${invertedNumbers[i] * -1}`);
//         }
//     }
// }

// // console.log(Inverted(invertedNumbers));

// Inverted(invertedNumbers);

// let invertedNumbers = [1, -10, -20, 15, 100, -30];

// let inv = invertedNumbers.map(function (element) {
//     return -element;
// });

// console.log(inv);

// let ignoreNumbers = "Elz123er4o";
// let newArr = [];

// function ignoring(ignoreNumbers) {
//     for (let i = 0; i < ignoreNumbers.length; i++){
//         if (isNaN(parseInt(i)) === true) {
//             console.log("string");
//             // newArr.push(ignoreNumbers[i]).join("");
//         }
//     }
//     console.log(newArr);
// }

// ignoring(ignoreNumbers);

// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers.split("").map(function (element) {
//     return isNaN(parseInt(element)) ? element : "";
// }).join("");

// console.log(ign);

// let sentence = "I love Foood Code Too Palying Much";

// let filter = sentence.split(" ").filter(function (element) {
//     return element.length <= 4;
// }).join(" ");

// console.log(filter);

// let mix = "A13BS2ZX";

// let multiplyFiltering = mix.split("").filter(function (element) {
//     return !isNaN(element);
// }).map(function (element) {
//     return element * element;
// }).join(' ');

// console.log(multiplyFiltering);

//reduce(callBackFunc(Accumulator, Current Value, Current Index, Source Array) initialValue);

// let arr = [1, 'a'];
// let sentence = "I love Foood Code Too Palying Much";

// arr instanceof Array
// let filter = sentence.split(" ").reduce(function (accumulator, current) {
//     return accumulator.length > current.length ? accumulator : current;
// });

// console.log(filter);

// let arr = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

// let arrRemove = arr.filter(function (element) {
//     return element.indexOf("@"); //return element value: position.
// })
//     .reduce(function (element, accumulator) {
//         return element.includes("@") == accumulator ? accumulator : element + accumulator;
//         //includes: return true or false.
// });

// console.log(arrRemove);

// let arr = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

// let forSearch = arr.forEach(function (element, index, array) {
//     console.log(`Element: ${element}`);
//     console.log(`index: ${index}`);
//     console.log(`array: ${array}`);
// }, this);

// let arr = "1, 2, 3, EE, L, Z, E, R, O, _, W,e,b, _, S, c, h, o, o, 2, 0, Z";

// let solveProblem = arr.split().map(function (previousValue, accumulator, current) {
//     return previousValue === "_" ?  current : previousValue + accumulator;
// })
// //     .split("").map(function (element) {
// //     return arr !== ("_") ? element : "";
// // }).join("")

// console.log(solveProblem);

// // let variable = {};
// let variable = new Object();
// let user = {
//     //Property.
//     firstName: "Ehmaed Alhams",
//     YourAge: 26,

//     //methods
//     behavior: function(firstName){
//         return `Your name: ${this.firstName} and Your Age:${this.YourAge}`;
//     },
//     pop: function () {
//         return `Nothing`;
//     }
// };

// variable.newArr = ['Ahmad', 'Emad'];
// console.log(user.firstName);
// console.log(user.YourAge);
// console.log(user["YourAge"]);
// console.log(user.behavior("Ehmaed"));
// console.log(user.pop());

// console.log(variable.newArr[1]);
// variable.sayHello = function () {
//     return `Hello Function class variable`;
// }
// console.log(variable.sayHello());

// let variable = new Object();
// variable.oop = ['a', 'a']
// let newObj = Object.assign({}, variable, {propriety: "propity"});

// console.log(newObj);

/* Document Object Model: */

// let idElement = document.getElementById("var1");

// console.log(idElement);

// let element = document.getElementsByTagName("h1");

// console.log(element[1]);

// let head2 = document.getElementsByClassName("head2");
// let head4 = document.getElementsByClassName("head");
// console.log(`Here we can get head4: ${head4}`);

// let head3 = document.title;
// console.log(head2[0]);
// console.log(head3);

//document object models.
// function boolToWord( bool ){
//     //...
//     return typeof bool === "string" ? "Yes" : "No";
// }
// //By name
// let spans = document.getElementsByTagName("span");

// //By Class Name
// let SpansSelector = document.getElementsByClassName("head2");

// //By Select any object like class
// let SpansQuerySelector = document.querySelector(".special");
// let SpansQuerySelectorTwo = document.querySelector("#H1");

//By All Select any object like class
// let QuerySelectAll = document.querySelectorAll(".head2");

// console.log(SpansQuerySelectorTwo.innerHTML);
// console.log(SpansQuerySelectorTwo.textContent);

// document.images[0].src = "../ThirdProject/image/160-trenging-up-outline.gif";
// document.images[0].title = "Up-Arrow";

// console.log(document.querySelector(".special").getAttribute('class'));

// let myLink = document.querySelector("a");
// let myImg = document.querySelector("img");

// console.log(myLink.getAttribute("href"));

// myImg.setAttribute("src", '../ThirdProject/image/virus.gif');

// console.log(spans[1]);
// spans[1].innerHTML = "Convert span 2 to Test Span";
// console.log(SpansSelector[0]);
// console.log(SpansQuerySelector);
// console.log(SpansQuerySelectorTwo);
// console.log(QuerySelectAll[2]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.images);
// console.log(document.forms[0].one.value);

// let SpansQuerySelector = document.querySelector(".special");

// if (SpansQuerySelector.hasAttribute("style")) {
//     console.log("Found and Remove");
//     // SpansQuerySelector.removeAttribute("style");
//     if (SpansQuerySelector.getAttribute("style")) {
//         SpansQuerySelector.setAttribute("style", "font-size: 50px");
//     } else {
//         SpansQuerySelector.removeAttribute("style");
//     }
// } else {
//     console.log("Not Found");
// }

// let spans = document.getElementsByTagName("span")[0];

// if (spans.getAttribute("style")) {
//     console.log("Found");
// } else {
//     console.log("Not Found");
// }

// if (document.querySelector("div").hasAttribute("class")) {
//     console.log("Found it");
// } else {
//     console.log("Not Found")
// }

// let myElement = document.createElement("div");

// myElement.className = "Divs"
// myElement.style = "color: red; font-size: 50px";

// let myAttr = document.createAttribute("data-custom");

// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing data-test");
// myElement.setAttribute("data-custom", "Testing data-custom");

// // Create Attribute And Set it into Element div.
// let myTwoAttr = document.createAttribute("data-connect");
// myElement.setAttributeNode(myTwoAttr);

// // Append Text To Element
// let TextAttrTwo = document.createTextNode("Product Attribute One");
// myElement.appendChild(TextAttrTwo);

// // Type Comment
// let myComment = document.createComment("This is div")
// myElement.appendChild(myComment);

// // Append Element To Document
// document.body.appendChild(myElement);
// console.log(myElement);

// function repeatStr (num, string) {
//     for (i = 0; i < num; i++){
//         // return typeof string === 'string' ? string : `the Char not String ${string}`;
//         console.log(charAt(string));
//     }
// }

// repeatStr(5, 'welcome');

// function repeatStr (n, s) {
//     string = ""
//     for (i = 0; i < n; i++){
//         string += s;
//     }
//     return string;
// }
// console.log(repeatStr(5, 'welcome'))

// let myElement = document.createElement("div");
// let head = document.createElement("h3");
// let paragraph = document.createElement("p");

// myElement.style = "color: gray; font-size: 50px";
// head.style = "font-size: 30px";
// paragraph.style = "font-size: 20px";

// //Create Attribute
// let Attr = document.createAttribute("Attribute")
// myElement.setAttributeNode(Attr);

// // Type text into three element.
// let textElementOne = document.createTextNode("into h3");
// let textElementTwo = document.createTextNode("into h3");
// let textElementThree = document.createTextNode("into p");

// // insert three attribute into element and body
// myElement.appendChild(textElementOne)
// head.appendChild(textElementTwo);
// paragraph.appendChild(textElementThree)

// myElement.appendChild(head);
// myElement.appendChild(paragraph);
// // document.body.appendChild(myElement);

// //type comment
// let Comment = document.createComment("Append some element");
// myElement.appendChild(Comment);
// // myElement.textContent = "Test";

// for (i = 0; i < 10; i++){
//     let span = document.createElement("span");
//     span.style = "color: red; display: block";

//     let text = document.createTextNode(`paragraph ${i + 1}`);
//     span.appendChild(text);
//     myElement.appendChild(span);
// }

// document.body.appendChild(myElement);
// // document.body.appendChild(head);
// // document.body.appendChild(paragraph);

// console.log(myElement);
// console.log(myElement.children[9].innerHTML = "<span style='color:yellow;'>Welcome</span>");
// console.log(myElement.childNodes[0]);
// console.log(myElement.firstChild);
// console.log(myElement.lastChild);
// console.log(myElement.firstElementChild.innerHTML = "First Child");
// console.log(myElement.lastElementChild.innerHTML = "Last Child");

// console.log(head);// console.log(head);
// console.log(paragraph);

// let button = document.getElementById("btn").onclick = () => { console.log("Clicked"); };

// let butt = document.getElementById("button").onclick = myfunc

// let but = document.getElementById("btn");

// but.onclick = function () {
//     console.log("Clicked");
// };

// let butt = document.getElementById("btn");

// butt.onmouseleave = function () {
//     console.log("Clicked");
// }

// function onLoad() {
//     alert("Welcome!");
// }

// window.onscroll = function () {
//     console.log("Scrolling");
// }

// window.onload = function () {
//     alert("Welcome!");
// }

// document.links[0].onclick = function (event) {
//     window.alert("Welcome!");
//     console.log(event);
//     event.preventDefault();
// }

// let UserInput = document.querySelector("input[name='username']");
// let AgeInput = document.querySelector("input[type='password']");

// console.log(UserInput);
// console.log(AgeInput);

// document.forms[0].onsubmit = function (event) {
//     let userValid = false;
//     let ageValid = false;

//     // console.log(UserInput.value);
//     // console.log(UserInput.value.length);

//     // console.log(ageValid.value);
//     // console.log(ageValid.value.length);
//     // console.log(AgeInput);

//     if (UserInput.value !== "" && UserInput.value.length <= 10) {
//         userValid = true;
//         console.log("Valid user");
//     }

//     if (AgeInput.value !== "") {
//         ageValid = true;
//         console.log("Valid pass");
//     }

//     if (userValid === false || ageValid === false) {
//         event.preventDefault();
//         console.log("Prevent Default");
//         console.log(event);
//     }
// }

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// one.onblur = function () {
//     two.onfocus();
// }

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// }

// document.onmousemove = function () {
//     if (one.value.length <= 10) {
//         console.log("The Password is unless 10 characters")
//     }
// }

// let kabab = document.querySelector(".one");
// let kofta = document.querySelector(".two");
// let ksa = document.querySelector("input[type='submit']");

// let kosaa = kabab.oninput = function () {
//     if (kabab.value.length === 1) {
//         kabab.blur();
//         kofta.focus();
//     }
// };

// kofta.oninput = function () {
//     if (kofta.value.length === 1) {
//         kofta.blur();
//         ksa.focus();
//     };
// };

// let element = document.getElementById("id");

// console.log(element.classList);
// console.log(element.classList.contains("one"));

// element.onclick = function () {
//     this.classList.add("ClassOne", "ClassTwo");
// }

// let elementOne = document.querySelector("img");
// let elementTwo = document.querySelector("button");

// elementTwo.onclick = function () {
//     elementOne.src = "../ThirdProject/image/34-code-outlinee.gif";
//     elementOne.alt = "Alternative"
// }

// let firstElement = document.querySelector("input[type='number']");
// let secondElement = document.querySelector(".result");

// document.onclick = function (firstElement) {

//     // if (typeof firstElement === "number") {
//     //     // console.log("done")
//     //     // firstElement.preventDefault();
//     //     // console.log(firstElement)

//     // }

//     let inputValue = firstElement.value;
//     let result = (inputValue * 15.6).toFixed(2);

//     secondElement.innerHTML =
//         ``
// }

// let division = document.getElementById("id-div");

// console.log(division.classList);

// // If function see class he say true false boolean.
// console.log(division.classList.contains("show"));

// console.log(division.classList.item("1"));

// let list = ["func1", "func2"]
// let btnAdd = document.getElementById("btn-add");
// let btnRemove = document.getElementById("btn-remove")
// btnAdd.onclick = function () {
//     for (let i = 0; i < list.length; i++){
//         btnAdd.classList.add(list[i]);
//     }
// }

// btnRemove.onclick = function () {
//     for (let i = 0; i < list.length; i++){
//         btnAdd.classList.remove(list[i]);
//     }
// }

// let division = document.getElementById("id-div");

// division.style.color = "green";
// division.style.backgroundColor = "yellow";

// division.style.cssText ="opacity: 0.3; font-size: 30px";

// console.log()
// console.log(document.styleSheets[0])

// let element = document.getElementById("id-div");
// // element.style.color = "red";
// // element.style.fontWeight = "bold";
// // element.style.cssText = "font-weight: bold; color: green; opacity:0.9";
// // element.style.removeProperty("color");
// // element.style.setProperty("font-size", "40px", "important");
// document.stylesheets[0].rules[0].style.removeProperty("line-height");
// document.stylesheets[0].rules[0].style.setProperty("background-color", "red", "important");

// function greet(name){
//     //your code here
//   //   greet = "Hello, {0} how are you doing today?"
//     // name = ""
//     return "Hello, ${name} how are you doing today?"
// }

// greet("Ahmad")

// let elementDiv = document.getElementById("id-div");
// let elementPar = document.querySelector("p");

// elementDiv.before("Welcome To JS");
// elementDiv.append("Welcome To JS");
// elementDiv.append(elementPar);

// let element = document.getElementById("id-div");

// let span = document.querySelector(".span");

// console.log(span.nextSibling);
// // console.log(span.nextElementSibling);
// // console.log(span.previousElementSibling);
// // console.log(span.previousSibling);

// // console.log(span.parentElement);

// // span.onclick = function () {
// //     span.parentElement.innerHTML = "Clicked span.";
// // }

// let elementDiv = document.querySelector(".show").cloneNode(true);
// let spanClone = document.querySelector(".span");

// spanClone.appendChild(elementDiv);
// elementDiv.after("Welcome To JS");

// console.log(elementDiv)
// elementDiv.id = `${elementDiv.id}-clone`;

// spanClone.onclick = Events;

// function Events() {
//     console.log("Welcome");
// }

// spanClone.addEventListener("click", function () {
//     console.log("Message from event 1")
// })

// let elementPar = document.querySelector("p");

// elementPar.onclick = function () {
//     elementPar.cloneNode(true);
//     elementPar.className = "Cloned";
//     document.body.appendChild(elementPar);
// }

// document.addEventListener("click", function (event) {
//         if (event.target.className === 'Cloned') {
//             console.log("i'm event");
//         }
//     });

// Browser Object Model.

// setTimeout(function () {
//     console.log("Msg")
// }, 10000);

// function Msg(name, age) {
//     console.log(`Welcome ${name} your age: ${age} years.`);
// }

// let setTime = setTimeout(Msg, 10000, "Ehmaed", 26);

// let btn = document.querySelector("button");

// btn.onclick = function () {
//     clearTimeout(setTime);
//     console.log("clearTimeout");
// }

// setInterval(Msg, 1000);

// function Msg() {
//     console.log(`I'm Message.`);
// }

// setInterval(function () {
//     console.log(`I'm Message.`);
// }, 1000);

// let div = document.querySelector("div");

// function countDown() {
//     div.innerHTML -= 1;
//     if (div.innerHTML === '0') {
//         clearInterval(counter);
//     }
// }

// let counter = setInterval(countDown, 1000);

// console.log(location)
// console.log(location.href)

// let btn = document.querySelector("button");

// window.onscroll = function () {
//     if (window.scrollY >= 500) {
//         // console.log(`Scrolling in :${window.scrollY}`);
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// };

// btn.onclick = function () {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// };

// window.localStorage.setItem("color", "rgb(130, 129, 130)");
// window.localStorage.fontWeight = 'bold';
// window.localStorage['fontSize'] = '20px';

// console.log(window.localStorage.getItem('color'))

// document.body.style.backgroundColor = window.localStorage.getItem('color');

// window.localStorage.clear()

// let arr = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

// arr.forEach(function (element, index, ar ray) { });

// arr.forEach(function (element, index, arr) {
//     console.log(`Element: ${element}`);
//     console.log(`index: ${index}`);
//     console.log(`arr: ${arr}`);
//     console.log(`This => ${this}`)
// }, 10);

// let element = document.querySelectorAll("ul li");

// let ele = document.querySelector("li")
// element.forEach(function (li) {}, this)

// ele.addEventListener("click", ele.d)

// let print = (num1, num2) => {
//     return num1 + num2;
// }

// let list = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment")

// list.forEach((element) => {
//     element.addEventListener("click", (ele) => {
//         // console.log(ele.currentTarget.dataset.color)
//         list.forEach((li) => {
//             li.classList.remove("active");
//         });
//         ele.currentTarget.classList.add("active");

//         window.localStorage.setItem("color", ele.currentTarget.dataset.color);

//         exp.style.backgroundColor = ele.currentTarget.dataset.color;
//     });
// });

// if (window.localStorage.getItem("color")) {
//     // console.log("Found")

//     exp.style.backgroundColor = window.localStorage.getItem("color");

//     list.forEach(function (item) {
//         item.classList.remove("active");
//     });

//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");

// } else {
//     console.log("Not Found")
// }

// list.forEach(function (li) {
//     li.addEventListener("click", function (element) {
//         // list.forEach(function (item) {
//         //     item.classList.remove("active");
//         // });
//         // element.currentTarget.classList.add("active")

//         window.localStorage.setItem("color", element.currentTarget.dataset.color);

//         // exp.style.backgroundColor = element.currentTarget.dataset.color;
//     });
// });

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//     // If There Is Color In Local Storage
//     // [1] Add Color To Div
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//     // [2] Remove Active Class From All Lis
//     lis.forEach((li) => {
//         li.classList.remove("active");
//     });
//     // [3] Add Active Class To Current Color
//     document
//         .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//         .classList.add("active");
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         // Remove Active Class From all Lis
//         lis.forEach((li) => {
//             li.classList.remove("active");
//         });
//         // Add Active Class To Current Element
//         e.currentTarget.classList.add("active");
//         // Add Current Color To Local Storage
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);
//         // Change Div Background Color
//         exp.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });

// let a = 1;
// let b = 1;
// let c = 2;

// let arr = ['ahmad', 'emad', 'somaya', 'ehmaed', ['1', '2']];

// [, b, c, d, e = "unknown" ] = arr;

// [, , , , d,a] = arr;
// let [, , , a, [, b]] = arr;


// console.log(a)
// console.log(b);
// console.log(c)
// console.log(d)
// console.log(e)

//swapping variables.

// let a = 1;
// let b = 2;

// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// const users = {
//     name: "Ehmaed",
//     age: 26,
//     job: "developer",
//     country: "Palestine",
//     skills: {
//         html: 80,
//         js: 100,
//         css: 10,
//     }
//     // fun: function () {
//     //     return 'welcome';
//     // }
// };

// console.log(users.name.indexOf('d')); //index of characters.
// console.log(users.name.includes("d")); //if it include or not.
// console.log(users.name); //if it include or not.
// console.log(users.fun());


// let name = users.name;
// console.log(name);

// ({ name, age } = users);
// let { name: n, age, color: backgroundColor = "red", skills: {html}, css: scss } = users;

// console.log(n);
// console.log(age);
// // console.log(color);
// console.log(backgroundColor);
// console.log(html);
// console.log(scss);

// let arr = ['A', 'B', 'C', ['D', 'E', ['F', 'G']]];

// // [a, b, c] = arr;
// [, , , [a, , [b, ]]] = arr;


// console.log(a, b);

// let users = {
//     theName: "Ehmaed",
//     theAge: 26,
//     country: "Pal",
//     skills: {
//         html: 70,
//         css: 80,
//     }
// };

// let { html: skillsOne, css } = users.skills;
// console.log(skillsOne);

// console.log(users.theAge)

// let variable1 = users.theName;
// let variable2 = users.theAge;
// let variable3 = users.country;

// ({ theName, theAge } = users);
// let {
//     theName: var1,
//     theAge: var2,
//     country,
//     phone: ph = "059",
//     skills: { html, css },
// } = users;



// console.log(html);

// console.log(variable1);
// console.log(variable3);
// console.log(theName);
// console.log(theAge);
// console.log(variable1)

// console.log(var1)
// console.log(var2)
// console.log(phone)
// console.log(ph);

// let users = {
//     TheName: "Ehmaed",
//     skills: {
//         html: 1,
//         css: 2,
//     },
// };

// Details(users);

// // Destructuring Function Parameters.
// function Details({theName, skills: {css}}) {
//     console.log(`Your name: ${theName}`);
//     console.log(`Your skills: ${css}`);
// };


//destructuring mixed content.

// let users = {
//     TheName: "Ehmaed",
//     MySkills: ['html', 'css'],
//     MyJob: {
//         first: "developer",
//     },
// };

// let = { TheName, MySkills: [One, Two], MyJob: { first } } = users;

// console.log(One);
// console.log(first);

// let arr = [1, 2, 1, 4, 5, 1]; //array
// let arrUnique = new Set([1, 2, 1, 4, 5, 1]); //set

// console.log(arr);
// console.log(arrUnique);

// // console.log(arrUnique.has('A'))
// // console.log(arrUnique.add('A'))
// console.log(arrUnique.forEach(function (element) {
//     console.log(`Element: ${element}`);
// }));


// let set = new Set([1, 2, 4, 1, '1']);
// let setKeys = set.keys();
// console.log(setKeys.next().value);

// let newWeakSet = new WeakSet([])

// let obj = Object.create();

// let map1 = new Map(); // data type like dictionary in python.
// let obj = new Object();

// console.log(`Mapping: ${map1.set('element')}`);

// console.log(obj)
// map1.set('A', "Testing");


// // console.log(obj)
// console.log(map1.get('A'))

// Map kind of data like dictionary in python.
// WeakMap occur collect garbage.
// Set type of unique data.

// console.log(Array.from("Ehmaed"));
// console.log(Array.from("123456", function (num) {
//     return +num + +num;
// }));

// console.log(Array.from("123456", (num) => +num + +num));

// let array = [1, 1, 1, 2, 3, 4];
// let set = new Set(array)

// console.log(set)
// console.log(`Array from set ${Array.from(set)}`);

// function args() {
//     return arguments;
// };

// console.log(args("E", "H", "M", "A", "E", "D"));

// function argsFunc() {
//     return Array.from(arguments);
// };

// console.log(argsFunc('E', 'H', 'M' , 'A'))

// let array = [1, 1, 1, 2, 3, 4];

// array.copyWithin(3, 0, 1);
// console.log(array)

// let array = [1, 1, 1, 2, 3, 4, 5, 6, 7];

// let checkMap = array.map(function (element) {
//     return element > 5;
// });

// let checkReduce = array.reduce(function (accumulator, element) {
//     return accumulator + element;
// });

// let checkFilter = array.filter(function (element) {
//     return element > 5;
// });

// let checkSome = array.some(function (element) {
//     return element > 5;
// });

// console.log(checkMap);
// console.log(checkReduce);
// console.log(checkFilter);
// console.log(checkSome);

// let array = [1, 1, 1, 2, 3, 4, 5, 6, 7];

// function CheckIf(arr, val) {
//     return arr.some(function (element) {
//         return element === val;
//     });
// };

// console.log(CheckIf(array, 10));

// let array = [1, 1, 1, 2, 3, 4, 5, 6, 7];

// let range = {
//     min: 10,
//     max: 20,
// };

// let CheckIfRange = array.some(function (element) {
//     return element >= this.min && element <= this.max;
// }, range);

// console.log(CheckIfRange)

// const Locations = {
//     100: 'place 1',
//     20: 'place 2',
//     50: 'place 3',
//     40: 'place 4',
// }

// let MainLocation = 15;

// let LocationKey = Object.keys(Locations);

// console.log(LocationKey);

// let FunLocation = LocationKey.map((element) => +element);

// console.log(FunLocation);

// let Methods = FunLocation.every(function (element) {
//     console.log(element);
//     return element > this;
// }, MainLocation);

// console.log(Methods)

// let located = Object.keys(Locations).map((element) => +element).every(function (element) {
//     console.log(element);
//     return element > this;
// }, MainLocation);

// console.log(located);
// let method = [..."Ehmaed"];

// console.log([..."Ehmaed"]);

// // console.log(method.indexOf("E"));

// let arr = "Ehmaed";

// console.log(arr.split(""));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let array = arr1.concat(arr2);
// console.log(array);

// let arrAll = [...arr1, ...arr2];
// console.log(arrAll);
// arr1.push(...arr2);
// console.log(arr1);

// Spread Syntax

// let email = "my email: ehmaed@gmail.com and ehmaedalzhar@gmail.com";

// let regexOne = /@gmail/i; // case-insensitive.
// let regexTwo = /@gmail/ig; // case-insensitive and global.

// console.log(email.match(regexOne));
// console.log(email.match(regexTwo));


// let tld = "Com Org Info Net Code Io";

// let tldReg = /(info|org|com)/ig;
// console.log(typeof tldReg);
// let arr = [];

// [a, b, c] = tldReg;
// console.log(tld.match(tldReg));

// console.log(a, b)

// let arr = ['A', 'B', 'C', ['D', 'E', ['F', 'G']]];

// // [a, b, c] = arr;
// [, , , [a, , [b, ]]] = arr;

// let nums = "12345";

// let numsRe = /[0-2]/g;
// let NotnumsRe = /[^0-2]/g;

// // nums.match(numsRe);
// console.log(nums.match(numsRe));
// console.log(nums.match(NotnumsRe));


// let operating = "Os1 Os10 Os29Os";

// let operatingReg = /[^0-9 & ^""]/g;

// let methods = operating .match(operating  Reg).filter((element) => element !== "" ? "space" : element);
// console.log(operating  .match(operating  Reg));
// console.log(methods)

// let operatingReg = /Os[0-9]Os/g;

// console.log(operating.match(operatingReg));

// let characters = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, earum commodi similique laborum aspernatur numquam laboriosam consequuntur velit consequatur dicta dolores iste eius itaque ea. Quas, placeat? A, animi impedit!";
// let AtoZ = /[^a-z & ^""]/g;
// let dot = /./g;
// let word = /\w/g;           //match any characters word.
// let Word = /\W/g;

// console.log(characters.match(AtoZ));
// console.log(characters.match(dot));
// console.log(characters.match(word));
// console.log(characters.match(Word));


// let email = "e@e.com ..@g.com @hotmail.com @s.org ehmaed@gmail.com ehmaed@hotmail.com e@gmail.com";

// let valid = /\w@\w.(\com|\org)/g;     //very simple validation.
// console.log(email.match(valid));


// let valid = "ehmaed112, myAge: 26";

// // let digit = //g;
// // console.log(valid.match(digit));

// console.log(/(\bspam|spam\b)/ig.test("osmah"));
// console.log(/(\bspam|spam\b)/ig.test("1spam"));

// let email = "@hotmail.com ehmaed@gmail.com ehmaed@hotmail.com e@gmail.com ehmaed@gaza.com ehmaed1996@gmail.com ehmaed@gmail.info ehmaed@gmail.org";

// let nums = "102 00 05000  021280 350 0110";
// // let valid1 = /(\w+@\w+.com)/g;
// let valid2 = /(\w+@\w+.(com|info) )/g;
// let valid3 = /(\w+@\w+.)/g;
// let valid4 = /0\d*0/;       //zero or more.

// // console.log(email.match(valid2));
// // console.log(email.match(valid3));
// console.log(nums.match(valid4));


// let urls = "https://www.w3schools.com/ https://www.google.com/  https://ehmaedalhams.github.io";

// // let urlsReg = /(https:?\/\/)?(www.)?\w+.\w+/gi;
// let urlsRegular = /(https:\/\/)/gi;

// // console.log(urls.match(urlsReg));
// console.log(urls.match(urlsRegular));

// let serials = "S100s S3000s S500000s S950000S";
// let valid = /s\d{3}s/gi;

// let validTwo = /s\d{4, 6}s/gi;
// let validThree = /s\d{4,}s/gi;

// console.log(serials.match(valid));
// console.log(serials.match(validTwo));
// console.log(serials.match(validThree));

// let myString = "We Love Programming";
// let names = "2SamaZ 10Ahmad0 EEhmaed10";

// console.log(/ing$/ig.test(myString));   //End the world.
// console.log(/z$/ig.test(names));        //End the world.
// console.log(/\d+$/ig.test(names));      //End the world.
// console.log(/^\d+/ig.test(names));      //Start the world.
// console.log(/^\w/g.test(names));      //Start the world.

// let word = /^E/g;
// console.log(names.match());      //Start the world.

// console.log(/\d$/gi.test(names));      //Start the world.

// console.log(names.match(/\w{5}(?=Z)/gi))
// console.log(names.match(/\w{5}(?!Z)/gi))

// let myString = "We Love Programming @ and because @ is amazing";

// var Regular = /@/g;
// console.log(myString.replaceAll(Regular, "JavaScript"));


//validation input:

// document.getElementById("register").onsubmit = function () {
//     let phoneNum = document.getElementById("phone").value;
//     let NumReg = /\(\d{4}\)\s\d{3}-\d{4}/;
//     // let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let validation = NumReg.test(phoneNum);
//     if (validation === false) {
//         return false;
//     };
//     return true;
// };

// Construction

// function User(id, username, salary) {
//     this.id = id;
//     this.username = username;
//     this.salary = salary;
// };

// let userOne = new User(1, "Ehmaed Alhams", 10000);

// class User{
//     constructor(id, username, salary) {

//         //Properties.
//         this.id = id;
//         this.username = username;
//         this.salary = salary < 6000 ? salary + 500 : salary;
//         this.msg = function () {
//             // Operation
//             return `Hi Mr.${this.username} and Your id: ${this.id}`;
//         };
//     };


//     // Methods
//     writeMsg() {
//         return `Hello Mr.${this.username} and Your id: ${this.id}`;
//     }
// };

// let userOne = new User(1, "Ehmaed Alhams", 4000);
// console.log(userOne.msg())
// console.log(userOne.writeMsg())


// class User{
//     // static property
//     static count = 0;
//     constructor(id, username, salary) {
//         this.id = id;
//         this.username = username;
//         this.salary = salary;
//         User.count++;
//     }

//     update(newName) {
//         this.username = newName;
//     };

//     static method() {
//         return `static method`;
//     }
//     static funCount() {
//         return `${this.count} Members Created`;
//     }
// };

// let userOne = new User(1, "Ehmaed Alhams", 4000);
// let userTwo = new User(2, "Aseel", 5000);

// // userOne.update("Ahmad");
// // console.log(userOne.username);
// // console.log(User.count);
// // console.log(User.method())

// console.log(User.funCount());

// userTwo.update("Sara");
// console.log(userTwo.username)


// class User{
//     static count = 0;
//     constructor(id, username, salary) {
//         this.id = id;
//         this.username = username;
//         this.salary = salary;
//         User.count++;
//     }

//     update(newName) {
//         this.username = newName;
//     };
// };

// class Admin extends User{
//     static count = 0;

//     //Private Property:
//     #expectedSalary;
//     constructor(id, username, salary, permission) {
//         super(id, username, salary);
//         this.permission = permission;
//         this.#expectedSalary = salary * 0.29;
//         User.count++;
//     }

//     getSalary() {
//         return parseInt(this.#expectedSalary);
//     };
// };

// let admin = new Admin(1, "Ehmaed", 10000, 1);

// // console.log(admin.update("Ahmad"))
// console.log(admin.id, admin.username, admin.permission);

// //Encapsulation.
// // Hide implementation.
// console.log(`Based Salary: ${admin.salary}, expected Salary: ${admin.getSalary() * 0.29}`);


// class Time extends Admin {
//     // constructor
//     #pass;
//     #time;
//     constructor(id, username, salary, permission, time) {
//         super(id, username, salary, permission);
//         this.#time = time;
//         this.#pass = id + username;
//         this.msg = function () {
//             return `Hello`;
//         };
//     };

//     setPass(pass) {
//         this.#pass = pass
//     };

//     getPass() {
//         return this.#pass
//     };

//     getTime() {
//         this.#fun();
//         return this.#time;
//     };

//     setTime(time) {
//         this.#time = time
//     };

//     #fun() {
//         return `My Functions return: ${this.setTime(Date.now())}`;
//     }
// };

// let user = new Time(1, "Ehmaed", 100, 1, 12)
// // console.log(user.getTime());

// // console.log(user.msg())

// class Country extends Time{
//     constructor(id, username, salary, permission, time, Country) {
//         super(id, username, salary, permission, time);
//     }

// }
// // let Timing = new Time(1, "Ehmaed", 100, 1, 12);

// // // console.log(Timing.time);
// // // console.log(Time)
// // console.log(Timing.getTime());

// // Timing.setTime(14);

// // console.log(Timing.getTime());

// // // console.log(Timing.getPass())


// class User{
//     constructor(id, username) {
//         this.id = id;
//         this.username = username;
//     }

//     sayHello() {
//         return `Hello ${this.username}`;
//     }
// }

// let userOne = new User(1, "Ehmaed");
// console.log(userOne.username);
// console.log(userOne.sayHello());

// console.log(User.prototype)
// console.log(userOne)


// User.prototype.sayWell = function () {
//     return `Hello ${this.username}`;
// }

// Object.prototype.love = `I love Elzero Web Schools.`
// Object.prototype.fun = function () {
//     `Say Hello`;
// }

// // let String = "Ehmaed";

// // String.prototype.addDot = function (value) {
// //     return `[${this}]`;
// // };

// Object.prototype.addDot = function (value) {
//     return `[${this}]`;
// };

// let string = "Ehmaed";



// const Obj1 = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperty(Obj1, "c", {

//     //Default: All false.
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     value: 3
// });

// Obj1.c = 100;

// for (let prop in Obj1) {
//     // for in loop: statement loops through the properties of an object:

//     console.log(prop);
//     console.log(Obj1[prop])
// }
// console.log(Obj1);

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//     console.log(`propeties: ${x}, the value: ${person[x]}`)
// }


// let language = "JavaScript";

// for (let x of language) {
//     console.log(x);
//     // console.log(language[x])
// }


// const Obj1 = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperties(Obj1, {
//     c: {
//         configurable: true,
//         value: 3,
//     },
//     d: {
//         configurable: true,
//         value: 4,
//     },
//     e: {
//         configurable: true,
//         value: 5,
//     },
// });

// console.log(Obj1);
// console.log(Object.getOwnPropertyDescriptor(Obj1, "e"))


// let date = new Date();
// let birthday = new Date("jun 12, 96");
// let calculate = date - birthday;

// console.log(calculate / 60 / 60 /24 / 365)
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours())

// console.log(birthday)
// console.log(date.toJSON())



// let date = new Date();
// date.setTime(0);
// console.log(date)
// console.log("#".repeat(66));



// function* generateFun() {
//     yield 1;
//     console.log("after yield 1");
//     yield 2;
//     yield 3;
// };

// let generate = generateFun();
// // console.log(generate.next())

// // for (let value of generate) {
// //     console.log(value);
// // }

// // for (let value of generateFun()) {
// //     console.log(value);
// // }

// for (let value of generateFun()) {
//     console.log(value);
// }


// function* generateFunNumber() {
//     yield 1;
//     console.log("after yield 1");
//     yield 2;
//     yield 3;
// };

// function* generateFunLetters() {
//     yield '';
//     console.log("after yield 1");
//     yield 'B';
//     yield 'C';
// };

// function* generate() {
//     yield* generateFunNumber();
//     yield* generateFunLetters();
// };

// let gen = generate();

// // console.log(gen.next().value);


// for (let value of gen) {
//     console.log(value)
// }

// for (let value of generate()) {
//     console.log(value)
// }


// export function* generateFunNumber() {
//     yield 1;
//     // return "A";
//     yield 2;
//     yield 3;
//     yield 4;
//     return "a";
//     yield 5;
//     yield 6;
// };

// // // // console.log(generateFunNumber().next());
// // // for (let value of generateFunNumber()) {
// // //     console.log(value)
// // // }


// // //وحدة برمجية تنفذ وظيفة معينة.

// // export default function () {
// //     return `Welcome JS!.`;
// // }

// export let a = 10
// // console.log("Welocme to js")

// export { a as myNumber, generateFunNumber };


// JSON: JavaScript Object Notation.
// Formatting for share date between client and server.


// API:
//Application Programming Interface.

// let JsnoFromServer = '{"username": "Ehmaed", "age": 26}';

// const json = JSON.parse(JsnoFromServer);
// json["username"] = "Ahmad";

// const jsnoToServer = JSON.stringify(json);

// console.log(jsnoToServer);


// AJAX

// const pre = new Promise(function (resolveFun, rejectFun) {
//     let connect = true;
//     if (connect) {
//         resolveFun("Connection Established");
//     } else {
//         rejectFun(Error("Connection Failed"));
//     }
// })
// let pro = new Promise((resolveFun, rejectFun) => {
//
// })



// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

// const pre = new Promise(function (resolveFun, rejectFun) {
//     let connect = true;
//     if (connect) {
//         resolveFun("Connection Established");
//     } else {
//         rejectFun(Error("Connection Failed"));
//     }
// }).then(function () {

// }).catch(function () {

// })

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//     if (this.readyState === 4 && this.status === 200) {
//     console.log(`This respone text: ${this.responseText}`);
//     }
// };

// AjAX user XMLHttpRequest

// asynchronous javascript and XML.                 // 2000 lines
// use XMLHttpRequest to interact with server.

// let request = new XMLHttpRequest();
// request.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// // request.open("GET", "jsonFile.json")
// request.send()
// // console.log(request)

// request.onreadystatechange = function () {
//     console.log(`at this time the reade state: ${request.readyState}`);
//     console.log(`at this time status: ${request.status}`);

//     if (request.readyState === 4 && request.status === 200) {
//         // console.log(request.responseText);
//         // console.log(request.statusText)
//         let jsonData = JSON.parse(this.responseText)        //convert text data to JS Object.
//         // console.log(jsonData);
//         for (var i = 0; i < jsonData.length; i++) {
//             let div = document.createElement("div");
//             let jsonName = document.createTextNode(jsonData[i].full_name);
//             div.appendChild(jsonName);
//             document.body.appendChild(div);
//         }
//     };
// };


// const promise = new Promise(function(resolveFun, rejectFun) {
//     const arrayOfName = ['a', 'b', 'c', 'd'];

//     if (arrayOfName.length === 4) {
//         resolveFun(arrayOfName);
//     } else {
//         rejectFun(Error("Num of array not 4"));
//     }
// })

// promise.then(
//     function resolve(resolveValue) {
//         resolveValue.length = 2;
//         // return resolveValue
//         console.log(resolveValue)
//     }
// )

// promise.then(
//     function reject(rejectValue) {
//         rejectValue.length = 1;
//         console.log(rejectValue)
//     }
// ).catch((catchError) => console.log(catchError)).finally(
//     console.log("The Programming is done.")
// );

// const obj = '{"User": "Ehmaed", "Age": 26}';

// let jsonToObject = JSON.parse(obj);     //json to object
// // console.log(json)

// jsonToObject["Ehmaed"] = "Ahmad";

// let objectToJson = JSON.stringify(jsonToObject)
// console.log(objectToJson)



// request.open("GET", "jsonFile.json")
// request.send()
// console.log(request)

// request.onreadystatechange = function () {
//     console.log(`at this time the reade state: ${request.readyState}`);
//     console.log(`at this time status: ${request.status}`);

//     if (request.readyState === 4 && request.status === 200) {
//         // console.log(request.responseText);
//         // console.log(request.statusText)
//         let jsonData = JSON.parse(this.responseText)        //convert text data to JS Object.
//         // console.log(jsonData);
//         for (var i = 0; i < jsonData.length; i++) {
//             let div = document.createElement("div");
//             let jsonName = document.createTextNode(jsonData[i].full_name);
//             div.appendChild(jsonName);
//             document.body.appendChild(div);
//         };
//     };
// };

// const get = function (APILink) {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         request.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//                 // let text = JSON.parse(this.responseText)
//                 // console.log(typeof text)
//             } else {
//                 reject(Error("Error 404"))
//             }
//         };
//         request.open("GET", APILink);
//         request.send();
//     });
// };

// get("https://api.github.com/users/elzerowebschool/repos")
//     .then((result) => {
//     result.length = 10;
//     return result;
// })
//     .then((result) => console.log(result[0].name))
//     .catch((reject) => console.log(reject))
//     .finally((end) => console.log(`This end code`))

// fetch('https://api.github.com/users/elzerowebschool/repos').
//     then((result) => console.log(result))

// let promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("iam first resolve");
//     }, 5000);
// });

// let promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("iam first resolve");
//     }, 1000);
// });

// let promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject("iam first resolve");
//     }, 2000);
// });

// // Promise.all([])     // all resolve if found reject return it.
// // Promise.allSettled([])     // return resolves and rejects.
// Promise.race([promiseOne, promiseTwo, promiseThree])     // return first one

// function get() {
//     return new Promise(function (resolve, reject) {
        // let users = ['a', 'b'];

        // if (users.length > 0) {
        //     return Promise.resolve("found")
        // } else {
        //     return Promise.reject("not found")
        // }
//     });
// }


// function get() {
//     let users = ['a', 'b'];

//     if (users.length > 0) {
//         return Promise.resolve("found")
//     } else {
//         return Promise.reject("not found")
//     }
// }

// get().then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log("reject " + rejectValue)
// )


// async function get() {
//     let users = ['a', 'b'];

//     if (users.length > 0) {
//         return "found"
//     } else {
//         throw new Error("not found")
//     }
// }


// // console.log(get())
// // get().then(

// //     // when promise happen
// //     (resolveValue) => console.log(resolveValue),
// //     (rejectValue) => console.log("reject " + rejectValue)
// // )

// console.log("first")
// console.log(get().then((resolve) => console.log("await" + resolve)))


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject("im promise")
//     }, 3000);
// });

// async function promiseCheck() {
//     console.log("before")

//     try {
//         console.log(await promise)
//     } catch (reason){
//         console.log(`Reasons: ${reason}`)
//     } finally {
//         console.log("after")
//     }
// };

// promiseCheck()

// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("im promise")
//     }, 3000);
// });

// async function fetchCheck() {
//     console.log("before fetch")

//     try {

        // ANCHOR: Used to indicate a section in your file. (fetch return promise.)
        // TODO: An item that is awaiting completion.
        // FIXME: An item that requires a bugfix,
        // STUB: Used for generated default snippets.
        // NOTE: An important note for a specific code section.
        // REVIEW: An item that requires additional review
        // SECTION: Used to define a region (See 'Hierarchical anchors').
        // LINK: Used to link to a file that can be opened within the editor (See 'Link Anchors').


//         let api = await fetch("https://api.github.com/users/elzerowebschool/repos");
//         console.log(await api.json())
//     } catch (reason){
//         console.log(`Reasons: ${reason}`)
//     } finally {
//         console.log("after fetch")
//     }
// };

// fetchCheck()

//NOTE:
// var
//         - Function Scope
//         - Can be redeclare
//         - Can assign different value
//         - When you call variable before declare it var will return undefined
//         - It generates property with the name of the variable inside the window object but var shouldn't be inside any scope, so it's not organized and accessable from everywhere

//     let
//         - Block Scope
//         - Cannot be redeclare
//         - Can assign different value
//         - When you call variable before declare it let will return error which is more logical
//         - It doesn't generates property with the name of the variable inside the window object and it will return undefined

//     const
//         - Block Scope
//         - Cannot be redeclare
//         - Cannot assign new value
//         - When you call variable before declare it let will return error which is more logical
//         - It doesn't generates property with the name of the variable inside the window object and it will return undefined


// var x = 1;
// x = 2;
// console.log('x:' + x)

// let y = 1;
// y = 2;
// console.log('y' + y)

//ANCHOR:
// const SETTING = {
//     'color':"red"
// };

// Object.freeze(SETTING);
// SETTING.color = 'black';
// console.log(SETTING);

// let test = function () {
//     return 2
// };

// console.log(test());

//SECTION:
// let test = function (){
//     document.getElementById("show").innerHTML = this;

// }

// window.onload = test()

// document.getElementById('button').addEventListener('click', test)

//NOTE:
//backtick => this is Template Literals/strings
// let firstName = "ehmaed",
//     age = 26;


// const html = `
// <div class ="card">
//     <h2 class="name">${firstName}</h2>
//     <span class="age">${age}</span>
// </div>
// `

// // console.log(html);
// document.body.innerHTML = html;

//REVIEW: Spread Operator

// let arr1 = [1, 2, 3],
//     arr2 = [4, 5, 6];


// function sum(x, y, z) {
//     return x + y + z
// }

// console.log(arr1)

// // extract array and object.
// console.log(...arr1);
// console.log(sum(...arr1));


//REVIEW: Default Parameter
// function sum(parameter) {
//     // true false patterns.
//     parameter = parameter || 'arguments'    // if parameter or arguments.

//     role = role  === undefined ? "Default role" : role; // short if.
// }

// // let variable = variable ?? "abood";

// console.log(variable)

//REVIEW: Rest Parameter

// function info(a, ...parameter) {
//         console.log(`first parameter: ${a}`);
//         console.log(`my parameter: ${parameter}`);
//         console.log('my parameter: ', parameter);

//         return `all parameter done.`
// };

// console.log(info("a", "b", "c", "d"))

// we use rest parameter to input any value then put it in array.
// function allParameter(...Parameter) {
//         let number = 0;

//         for (let para of Parameter) {
//                 console.log(`parameter: ${para}`)
//                 number += para;
//         }
//         return `result: ${number}`;
// }

// console.log(allParameter(1));
// console.log(allParameter(1, 2, 3));


//REVIEW: string methods - includes and repeat
//find if any a word.
// includes = string.include(search string, position = 0)
// let title = "Ehmaed Emad ALhams";

// console.log(title.includes("Ehmaed"))

//REVIEW: Destructuring object.

/* Destructuring:
- Object
- Array
- Parameter
*/

// Object:

// let Name = "default",
//         age = "default";

// const user = {
//         name: 'Ehmaed',
//         age: 26,
//         gender: 'male',
//         theme: 'black',
//         langs: {
//                 html: '70%',
//                 js: '20%'
//         }
// };

// var u = user.name,
//         a = user.age;

// const { name, age } = user;
// ({ name, age } = user);


// const { name: theName, age, theme: theTheme = "default" } = user;

// const { name: theName, age, theme: theTheme = "default", langs: {html, css = "Perfect" ,js} } = user;

// // const { html, css = "default", js } = user.langs;

// console.log(`my name ${theName}, and my age ${age}, my theme ${theTheme}`);
// //object instead.
// console.log(`i have langs: ${html}, ${css}, ${js}`);
// // console.log(`the html: ${html}, ${css}, ${js}`);


// Destructuring array.
// const arr = ['a', 'b', 'c'];

// const [one, two, three] = arr;
// console.log(`first element ${one}, second element ${two}`);

//swiping:
// var book = 'book',
//     videos = 'video';

// // stash = book
// // videos = book
// // book = videos
// // [book, videos] = [videos, book];
// console.log(`book ${book} and video ${videos} stash ${stash}`);

//SECTION: Enhanced Object Literals.
// let key = "k";
// let value = "v";

// const obj = {
//         [key]: value,
// };

// console.log(obj);

//ANCHOR: Set resemble array
// kind of data, a collection of unique values.
// A Set can hold any value of any data type.



// set: new Set(Iterable)
//Iterable: any element we can do loop within.

// let set = new Set("iterable")
// set.add('One')

// console.log(set);

//ANCHOR: Map resemble object

// Map: kind of data allow to use key and value (key items).
// allow to set any kind of data in key, at variance object.

// let map = new Map([
//     [function doSomething() { }, "function"],
//     [false, "Boolean"],
//     [1, "like that"],
// ]);

// map.set("id", "1000")
// map.set(1, 'ehmaed')
// map.set(true, "yes");
// console.log(map);


//REVIEW: Symbol
//new kind of data - unique and uneatable.
// Primitive data type like string and number and boolean.
// to pass overwrite.
// to get privacy in any iteration.


// let age = "im in my year 26"
// const symbol = Symbol();

// const obj = {
//     firstName: "ehmaed",
//     [symbol]: "this hidden msg from iteration",
// };

// for (let value of Object.entries(obj)) {
//     console.log(value);
// };

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));

// const symbolOne = Symbol.for("Testing"); // symbol not exist, then create it.
// const symbolTwo = Symbol.for("Testing"); // symbol exist, selected and return it.

// // console.log(Symbol.for("Testing"));
// console.log(Symbol.keyFor(symbol));


//REVIEW: forEach()
// for each element do a function.

/* forEach(current, index, array){
        forEach(function (element, index, array)
}
*/
//NOTE:
// 1- in forEach skip empty value.
// 2- not doing function and the value callback fun.


// let arr = ['a', 'b', 'c', , 'd'];

// for (let i = 0; i < arr.length; i++){
// 	console.log(`index: ${i + 1} - array: ${arr[i]}`);
// };

// console.log("#".repeat(20));
// // #######################

// arr.forEach((element, index) => {
// 	console.log(`index: ${index + 1} - array: ${element}: `);
// });

// function looping(element, index) {
// 	console.log(`index: ${index} - element ${element}`);
// };

// SECTION: used Set() in forEach()
// Set.forEach(currentKey, currentValue, Set)


// let arr = ['a', 'b', 'c', , 'd', 'd', 'a', 'm', 'q', 'c'];

// let set = new Set(arr);

// // because set doesn't have key.
// set.forEach((item1, item2) => {
// 	console.log(`item 1: ${item1}, item 2: ${item2}`);
// });


// forEach(value, key, Map)

// let map = new Map()

// let map = new Map([
//     [function doSomething() { }, "function"],
//     [false, "Boolean"],
//     [1, "like that"],
// ]);

// map.forEach(function (value, key) {
// 	console.log(`key: ${key} - value: ${value}`);
// });

// SECTION: Set vs WeakSet And Garbage Collection

/*
Set:
- contain any value.
- can get keys
- can loop with forEach 
- get element size and count.

Weak Set:
- just contain object.
- cannot get element size and count
*/

//NOTE:
// Set Vs. WeakSet:
// =================================
// Set:
//         -- References To Objects Are Strong.
//             ==> Object Can NOT Be Garbage Collected If There Is No Other Reference To It.
//         -- Contain Any Type Of Values.
//         -- Has size Property To Get Set Elements Count.
//         -- Has add(), delete(), has(), clear(), keys(), values(), entries(), forEach() Methods.
//         -- Set Is Iterable.


// WeakSet:
//         -- References To Objects Are Weak.
//             ==> Object Can Be Garbage Collected If There Is No Other Reference To It.
//             ==> (i.e. The JS Engine Will Free The Memory Which Object Reference Was Pointing To).
//         -- Contain ONLY Object Type Values.
//             ==>  NO Primitive Values (e.g. int, boolean, string) Are Allowed.
//         -- Does NOT Have size Property To Get WeakSet Elements Count.
//         -- Has add(), delete(), has() Methods Only.
//         -- WeakSet Is Not Iterable.



//// SECTION:	Symbol Iterator And For Of Loop

// Symbol Iterator And For...of Loop
// ===============================================

// - Iterable ==> Object Has Symbol.iterator Method.

// - Iterator:
//         -- Object With Interface Designed For Iteration.
//         -- All Iterators Has Next() Method Which Return Result Object.
//         -- The Result Object Has Two Properties:
//                 [1] Value ==> The Next Value.
//                 [2] Done  ==> Boolean Value To Tell If The Next Value Exists Or No:
//                         --- Next Value Exist                    ==>  done: false  ==>  Itaration Not Finished.
//                         --- Next Value Does Not Exist  ==>  done: true    ==>  Itaration Finished.
    
// - How Do You Check If A Type Is Iterable Or Not ???
//         -- By using: typeof <obj>[Symbol.iterator] === "function";
//                 --- true    ==>  Iterable
//                 --- false  ==>  Not Iterable
    
// - Built-In Types With Default @@iterator Method Are:
//         -- String.prototype[@@iterator]()             ==>     Syntax:  str[Symbol.iterator]()
//         -- Array.prototype[@@iterator]()              ==>     Syntax:  arr[Symbol.iterator]()
//         -- TypedArray.prototype[@@iterator]()   ==>     Syntax:  arr[Symbol.iterator]()
//         -- Set.prototype[@@iterator]()                 ==>     Syntax:  set[Symbol.iterator]()
//         -- Map.prototype[@@iterator]()               ==>     Syntax:  map[Symbol.iterator]()

// - For...of Loop, Behind The Scenes:
//         [1] Call Symbol.iterator With Next() Method.
//         [2] Save Value Inside Variable.
//         [3] Check For Done:
//                 -- Done: false  ==>  Go To Next Value Using Next() Method, Then Repeat [2] and [3] Steps.
//                 -- Done: true    ==>  Exit The Loop.


// SECTION: generate within yield

// function* generate() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	yield 4;
// 	yield 5;
// };

// let gen = generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next().value);

// let arr = [1, 2, 3, 4, 5];

// function* generateFun(nums) {
//         for (let i = 0; i < nums.length; i++){
//                 yield nums[i];
//         };
// };

// let generate = generateFun(arr);
// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next().value);
// console.log(generate.next().value);
// console.log(generate.next().value);

// console.log("#".repeat(20));
// function* gen() {
//     yield* [1, 2, 3]
// };

// let gener = gen()
// console.log(gener.next().value);

// function* skills() {
//     yield* ['html', 'css', 'js', 'python'];
// };

// let generateSkills = skills();

// for (let skill of skills()){
//     console.log(skill);
// };

// console.log('#'.repeat(20));

// for (let sk of generateSkills) {
//     console.log(sk);
// }

// REVIEW: New Array Methods

// Array.of(element to create array)

// let arr = Array.of(100, 200);
// console.log(arr);

// Array.from(iterable, mapFun, this)

// let arr = [1, 2, 3, 4, 5];
// let nums = Array.from(arr, nums => nums + 10);
// console.log(nums);

// Array.fill(value to fill, start (default value 0), end (default Array.length))

// let arr = [1, 2, 3, 4, 5];

// arr.fill(100, 2);
// console.log(arr);

// Array.find() 	find value in array.

// Array.findIndex()

// Array.copyWithin(Target, start (default value 0), end (default Array.length))

// let arr = [1, 2, 3, 4, 5];

// function app(msg) {
//     return msg;
// };

// // let msg = "Welcome To JS";
// console.log(app(12));


//SECTION: Modules - Import & Export

// import and export file and value in file.
// import { app, arr } from './app.js';

// console.log(arr);
// console.log(app("Welcome App from main.js"));

// for (let nums of arr) {
// 	console.log(nums);
// }

// import { app, arr } from './app.js';

// console.log(arr);
// console.log(app("Welcome App from main.js"));

// for (let nums of arr) {
// 	console.log(nums);
// }

//Import All And Aliases
// import { Array, Application } from './app.js';

// console.log(Array);
// console.log(Application("Welcome App from main.js"));

// for (let nums of Array) {
// 	console.log(nums);
// }


// import * as all from './app.js';

// console.log(all.Array);
// console.log(all.Application("Welcome App from main.js"));

// for (let nums of all.Array) {
// 	console.log(nums);
// }

// import { a as valueOne, b as valueTwo } from './app.js';

// console.log(`first value: ${valueOne}, second value: ${valueTwo}`);

// Named Export Vs Default Export

//NOTE: every module have one default export without named and parenthesis {}.
// Named export:
// import {fun} from './app.js';

// Default export:

// you can name fun or functionality as you want.
// import functionality from './app.js';
// or you can call fun default with another.


// import functionality, { a , b } from './app.js';

// console.log(functionality('Welcome from main.js to app.js'));
// console.log(`it's right value one: ${a}, and value two: ${b}`);

// SECTION: new syntax class.

// class User{
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	info() {
// 		console.log(`Your Name: ${this.name} and your age: ${this.age * 365}`);
// 	};
// };

// const firstUser = new User('ehmaed', 26);

// let myName = firstUser.name;
// console.log(myName);

// firstUser.info()

// REVIEW
// import {User} from './app.js';

// something wrong in this exercise
// class Admin extends User{
// 	constructor(id, pass) {
//// NOTE: super call parent constructor. right now call name and age from class User in app.js
// 		super(name, age)
// 		this.id = id
// 		this.pass = pass
// 	}
// }

// let firstAdmin = new Admin('ehmaed', 26, 111, 'pass');
// console.log(firstAdmin);

// import { User } from './app.js';

// class Admin extends User{
// 	constructor(id, pass, name, age) {
// 	// NOTE: super call parent constructor. right now call name and age from class User in app.js
// 		super(name, age);
// 		this.id = id;
// 		this.pass = pass;
// 	}
// }

// // 1, 'ggoodd', 'ehmaed', 26
// let firstAdmin = new Admin(1, 'ggoodd', 'ehmaed', 26);
// console.log(firstAdmin);

// firstAdmin.info()

//SECTION: Call Stack, Web API, Event Loop, Callback Queue

// - Call Stack
// ---- Mechanism To Make Interpreter Track Your Calls
// ---- When You Call A Function Its Added To The Stack
// ---- When Function Executed Its Removed From The Stack
// ---- The Interpreter Continue Calling From The Last Point Reached
// ---- Calls Stack Detect Web API And Leave It To The Browser To Handle It

// - Web API
// ---- Methods Available From Environnement => Browser
// ---- When Complete It Add The Callback To Callback Queue

// - Event Loop
// ---- Wait The Call Stack To Finish
// ---- Get Callback From Callback Queue
// ---- Add Callback To Call Stack
// - Callback Queue


// Call Stack:

// set in stack ony by one.
// let a = 10
// setTimeout(() => {
// 	console.log(30);
// }, 0);
// let b = 20


// console.log('one');
// setTimeout(() => {
// 	console.log('three');
// }, 0);
// console.log('two');

// NOTE: Javascript is a single threaded language. This means it has one call stack and one memory heap


// SECTION: Promise and Async.

// let promise = new Promise(function (resolve, reject) {
	
// 	/*
// 	Asynchronous Operation
// 	-- FulFilled => resolve.
// 	-- Rejected => reject.
// 	*/
// });

// let request = new XMLHttpRequest();

// request.onreadystatechange = function () {
	
// };


// const getFirstRepo = (API) => {

// 	return new Promise((resolve, reject) => {
// 		let request = new XMLHttpRequest();
// 		request.onload = function () {
// 			if (this.readyState === 4 && this.status === 200) {
// 				console.log(JSON.parse(this.responseText)[0].name);
// 				resolve(JSON.parse(this.responseText))
// 			} else {
// 				reject(Error(this.statusText));
// 			}
// 		};
// 		request.open("GET", API, true);
// 		request.send()
// 	});
// };

// getFirstRepo('https://api.github.com/users/ehmaedalhams/repos').then(
// 	(result) => console.log(result),
// 	(error) => console.log(error)
// );

// NOTE: fetch return promise and then get chain then.

// fetch('https://api.github.com/users/ehmaedalhams/repos').
// then()

// Promise.all([first Promise, Seconde Promise]) - return all promise.
// Promise.race([first Promise, Seconde Promise])

// REVIEW: JavaScript OOP at 24/8/2022.

// const obj = {
// 	obj1: "obj1",

// 	ObjMethod: function (msg) {
// 		return msg;
// 	},

// 	objmethodarrow: () => `obj: ${obj1}`,
// }

// console.log(obj.ObjMethod);  Dot Notation.
// console.log(user["firstName"]); Bracket Notation.

// let obj = {
// 	1: 'obj1',
// 	'obj2': 'obj2',
// };

// // NOTE: this reasons to use bracket notation.
// console.log(obj['1']);
// console.log(obj['obj2']);

// SECTION: Defining Object With Object.create
// inheritance


// Object.assign()
// Copy the values of all

// From StackOverFlow , i will show the difference between them in a object to practice with you all : (use this snippet)
// ======
// const difference= {
//           "Object.assign()": "provides shallow copying (Only properties and methods) and it will override the method and property declared.",
// "Object.assign()": "while Object.create() provides Deep copying provides prototype chain.",
// showDiff: function () {
//       return ` The difference between assign and create that first is  ${this["Object.assign()"]} and  last is ${this["Object.assign()"]}, source is StackOverFlow`


// in more dynamic way :

// const key1= "object.assign()"
// const key2 = "object.create()"
// const difference= {
//          [key1]: "provides shallow copying (Only properties and methods) and it will override the method and property declared.",
// [key2]: "while Object.create() provides Deep copying provides prototype chain.",
// showDiff: function () {
//       return ` The difference between ${key1} and ${key2} that first is  ${this[key1]} and  last is ${this[key2]}, source is StackOverFlow`

// }
// }


// - You Can Delete Property And Method But Not Object
// - You Can't Delete Variables like ( Let, Const,  Var )
// - You Can't Delete Property And Method Of Freezed Object

// const obj = {};
// Object.defineProperty(obj, 'a', { value: 1, configurable: false });

// SECTION: For..in loop
// loop through the properties of the object.

// import { User } from "./app";

// const obj = {
// 	prop1: "property one",
// 	prop2: "property two",
// 	prop3: "property three",
// };

// // show me the key:
// // for (let properties in obj) {
// // 	console.log(properties);
// // };

// // show me the value:
// for (let properties in obj) {
// 	console.log(properties, obj[properties]);
// };


// // import { User } from "./app";

// NOTE:
// for(... of ...) loop works in Symbol.iterator like strings
// but here we used  for( ... in ...)  loop which works for  objects!

// SECTION: Constructor Function

// function Phone(serial) {
// 	// this is create object from constructor function.
// 	console.log(this);
// 	this.serial = serial;
// 	this.toFixed = function (string) {
// 		return `my function return string: ${string}`
// 	}


// 	function toStand(string) {
// 		return `string stand ${string}`
// 	}
// }

// let phone1 = new Phone(123);
// console.log(phone1);

// let num = new Number(1)
// let phone2 = Phone(456);
// console.log(phone2);

// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);


// function User(fname){this.firstName = fname}

// let user = new User('Ehmaed')
// console.log(user);

// String.prototype.zFill = function (width) {
// 	let result = this;

// 	while (result.length < width) {
// 		result = `.${result}`;
// 	}
// 	return result.toString();
// };

// console.log('1234'.zFill(10));

// class User{
// 	static counter = 0;
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		User.counter++;
// 	}

// 	show() {
// 		return `your name:${this.name} and your age: ${this.age}`;
// 	}

// 	// static methods:
// 	static countObj = function () {
// 		return `${this.counter} object`;
// 	}
// }

// let user1 = new User('ehmaed', 26);
// let user2 = new User('ehmaed', 26);
// let user3 = new User('ehmaed', 26);
// let user4 = new User('ehmaed', 26);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

// console.log(User.countObj());


// class Admins extends User{

// 	#id;
// 	constructor(name, age, id) {
// 		super(name, age)
// 		this.#id = id
// 	}

// 	// Accessors Getters & Setters
// 	get info() {
// 		return `${this.name}, ${this.age} ${this.#id}`;
// 	}
// 	/**
// 	 * @param {any} onchange
// 	 */
// 	set change(id) {
// 		this.id = id;
// 	}
// };

// let adm1 = new Admins('ehmaed', 26, 10);
// // console.log(adm1);
// // console.log(adm1.counter);
// // console.log(adm1.countObj());
// // console.log(adm1.info);
// // console.log(adm1.show);
// // console.log(Admins.counter); 	// NOTE: count any object instead.


// // adm1.change = 1000;
// // console.log(adm1.id);

// // adm1.info = 'inf'
// console.log(adm1.info);
// adm1.change = 12;
// console.log(adm1);


// SECTION: Object Meta Data And Descriptor
// const object = {
// 	a: 1,
// 	b: 2,
// };


// Object.defineProperty(object, "c", {
// 	writable: true, 		// able to change the value or not.
// 	enumerable: true,		// can or not do looping in.
// 	configurable: true,		// can't change any setting in these descriptor.
// 	value: 3,
// });

// console.log(object);
// console.log(Object.getOwnPropertyNames(object));	// can bring the key but isn't loop.

// Object.defineProperties(object, {
// 	e: {
// 		writable: true, 		// able to change the value or not.
// 		enumerable: true,		// can or not do looping in.
// 		configurable: true,		// can't change any setting in these descriptor.
// 		value: 3,
// 	},
// 	f: {
// 		writable: true, 		// able to change the value or not.
// 		enumerable: true,		// can or not do looping in.
// 		configurable: true,		// can't change any setting in these descriptor.
// 		value: 3,
// 	}
// });

// console.log(object);
/*
	an writable property means that we can change his key, unwritable means it is read only property 

	An enumerable property  means that a property can be viewed if it is iterated using the for…in loop or Object.keys() 
	method.

	an configurable property means that we can delete it by delete keyword, and also we can redefine it by Object.defineProperty

	** Default this value is false.
	Object.keys => bring all keys who can loop.
*/

// console.log(Object.getOwnPropertySymbols(object));

// end 8/31/2022;

// ------------------------------------------
// SECTION: JQuery	30/8/2022
//Syntax:

// $("p").hide()
// $(document).ready(function () {
// 	// Your code here.
// });

// $(document).ready(function () {
// 	$("p").hide();
// });
/*global $ */
// $("p").hide()

// $(document).ready(function(){

// 	// jQuery methods go here...
  
//   });

// $(function () {
// 	$("button").click(function () {
// 		$("p").hide()
// 	})
// })

// $("p").click(function () {
// 	$("p").hide();
// });

// $(document).ready(function () {
// 	$("p").dblclick(function () {
// 		$(this).hide();
// 	});
// });

// on dblclick event
// $("p").dblclick(function () {
// 	$("p").hide();
// });

// on mouse enter
// $("p").mouseenter(function () {
// 	alert("You entered p1!")
// }

// $(document).ready(function () {
// 	$("p").mouseenter(function () {
// 		alert("You entered p!");
// 		console.log('you entered');
// 	})
// })

// NOTE: The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

// $(document).ready(function () {
	// $("p").hover(function(){
	// 	alert("You entered p1!");
	// },
	// function(){
	// 	alert("Bye! You now leave p1!");
	// }); 
// })

// on hover event.

// $(document).ready(function(){
// 	$("p").hover(function(){
// 	  alert("You entered p1!");
// 	},
// 	function(){
// 	  alert("Bye! You now leave p1!");
// 	}); 
//   });

// NOTE: (document).ready 	=> execute the function immediately.

// on click event
// $(document).ready(function () {
// 	$("p").click(function () {
// 		$("p").hide()
// 	})
// })

// on focus and blur events.
// $(document).ready(function () {
// 	$("input").focus(function () {
// 		$(this).css("background-color", "black");
// 	});

// 	$("input").blur(function () {
// 		$(this).css("color", "white")
// 	})
// });

// NOTE: one event => method attaches one or more event handlers for the selected elements.

// $("p").on("click", function () { 
// 	$(this).hide();
// });

// $(document).ready(function () { 
// 	$("p").on("dblclick", function () { 
// 		$(this).hide();
// 	});
	
// });

// have one or other event in this case:

// $(document).ready(function () { 
// 	$("p").on({
// 		mouseenter: function () {
// 			$(this).css("background-color", "yellow");
// 		},
// 		mouseleave: function () {
// 			$(this).css("background-color", "green");
// 		},
// 		click: function () {
// 			$(this).css("background-color", "red");
// 		}
// 	});
// });


// SECTION: jQuery Effects

// 1- hide and show with on effects.

// $(document).ready(function () { 
// 	$(".hide").on({
// 		click: (function () {
// 			$("p").css("background-color", "black");
// 		}),
// 		dblclick: (function () {
// 			$("p").hide();
// 		})
// 	});

// 	$(".show").on({
// 		click: (function () { 
// 			$("p").css("background-color", "red");
// 		}),
// 		dblclick: (function () {
// 			$("p").show()
// 		}),
// 	});
// });


// hide and show:
/*
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
*/

// $(function () { 
// 	$(".hide").click(function () { 
// 		$("p").hide(1000);
// 	});
	
// 	$(".show").click(function () { 
// 		$("p").show(1000);
// 	});
	
// });

// $(function () { 
// 	$(".show").click(function () { 
// 		// $("p").toggle("slow");
// 		$("p").toggle("fast");
// 	});
// });

// 2- Fading effects: 

// ANCHOR: JS Part practical - 7/9/2022.

// 1 - Slider:

