// let arr = [1, 2, 3]

// function app(msg) {
//     return msg;
// };

// // export {
// //     arr,
// //     app
// // }


// export {
//     arr as Array,
//     app as Application
// }

// let a = 100;
// let b = 200;

// export {
//     a, b
// }

// export default function fun(msg) {
//     return msg;
// };


// class User{
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	info() {
// 		console.log(`Your Name: ${this.name} and your age: ${this.age * 365}`);
// 	};
// };

// export {User}

// ANCHOR: JS Part practical.
// at: 11/9/2022.

// //SECTION: 1- Slider


// // Get slider item | Array.from [ES feature]

// var slideImage = Array.from(document.querySelectorAll(".slider-container img"));

// // Get number of slide:
// var slideCount = slideImage.length;

// // set current index/slide:
// var currentSlide = 1;

// // slide number element:
// var slideElement = document.getElementById('slide-number');

// // previous and Next button:
// var next = document.getElementById('next');
// var previous = document.getElementById('prev');

// // create the main ul:
// var paginationElement = document.createElement('ul');

// // set id on main ul 
// paginationElement.setAttribute('id', 'pagination-ul');

// // add li - list item in ul:
// for (var i = 1; i <= slideCount; i++){
    
//     // create list item
//     var paginationList = document.createElement('li');
//     //set attribute customize
//     paginationList.setAttribute("data-index", i);
//     // set item content
//     paginationList.appendChild(document.createTextNode(i));
//     // append item to the ul
//     paginationElement.appendChild(paginationList);
// }

// // add ul item in the page:
// document.getElementById('indicators').appendChild(paginationElement)

// // get pagination list items | Array.from [ES6]
// var bullets = Array.from(document.querySelectorAll('#pagination-ul li'))

// for (var i = 0; i < bullets.length; i++){

//     bullets[i].onclick = function () { 
//         currentSlide = this.getAttribute('data-index');

//         checkSlide();
//     };
// }

// // trigger the check function:
// checkSlide();

// // Handle click on previous and next:

// next.onclick = nextSlide;
// previous.onclick = previousSlide;

// // function next slide:
// function nextSlide() {

//     // increase current element slide.
//     if (next.classList.contains('disabled')) {
//         // nothing do.
//         return false
//     } else {
//         currentSlide++;
//         checkSlide();
//     }
// };

// // function previous slide:
// function previousSlide() {
    
//     // decrease current element slide.
//     if (previous.classList.contains('disabled')) {
//         // nothing do.
//         return false
//     } else {
//         currentSlide--;
//         checkSlide();
//     }
// };

// // check current slide:
// function checkSlide() {

//     // set the slide number:
//     // slideElement.textContent = 'Slide #' + (currentSlide) + ' of' + (slideCount);
//     slideElement.textContent = `Slide # ${currentSlide} of ${slideCount}`;

//     // remove all active classes.
//     removeActive()

//     // set active class on current slide
//     // list of array
//     slideImage[currentSlide - 1].classList.add('active');

//     // set active class on pagination current.
//     paginationElement.children[currentSlide - 1].classList.add('active');
//     // console.log(paginationElement.children);

//     // check if slider in first:
//     if (currentSlide == 1) {
//         // add disable class on previous button.
//         previous.classList.add('disabled');
//     } else {
//         // Remove Disabled Class From previous Button
//         previous.classList.remove('disabled');
//     }

//     // check if slider in last:
//     if (currentSlide == slideCount) {
//         // add disable class on next button.
//         next.classList.add('disabled');
//     } else {
//         next.classList.remove('disabled');
//     }
// };

// // remove active class from image and list item.
// function removeActive() { 

//     // Loop through Image:
//     slideImage.forEach(function (img) {
//         img.classList.remove('active');
//     });

//     // loop through pagination bullets.
//     bullets.forEach(function (bullets) { 
//         bullets.classList.remove('active');
//     });
// };