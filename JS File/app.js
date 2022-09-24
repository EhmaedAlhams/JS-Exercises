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


// Get slider item | Array.from [ES feature]

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


// slide 1 above

// SECTION: 2- Memory Games

// let cards = document.querySelector('.img-contain');
// let blocks = Array.from(cards.children);
// let duration = 1500;
// // index of array
// let range = [...Array(blocks.length).keys()];

// // index of element in array.
// // range[0]
// // range[1]
// // range[2]
// // let range = Array(block.length).keys();

// // here shuffle index of array (range number) and then put in order in next for.
// // console.log(range);
// shuffle(range);
// // console.log(range);

// blocks.forEach(function (card, index) {
//     // console.log(index);
//     // index of array after shuffling
//     // console.log(card);

//     card.style.order = range[index];
//     card.addEventListener('click', function () {
//         // card.classList.add('.has-match')
//         // is flipped()
//         IsFlipped(card);
//     });
// });

// function shuffle(array) {
//     let current = array.length,
//         temporary,
//         random;
    
//     while (current > 0) {
//         random = Math.floor(Math.random() * current);
//         current--;

//         temporary = array[current];
//         array[current] = array[random];
//         array[random] = temporary;

//         // Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
//         /*
//         [1] Save Current Element in Stash temp
//         [2] Current Element = Random Element
//         [3] Random Element = Get Element From Stash
//         */
//     }
//     return array
// };
// >>>>>>> Stashed changes

// // add ul item in the page:
// document.getElementById('indicators').appendChild(paginationElement)

// <<<<<<< Updated upstream
// // get pagination list items | Array.from [ES6]
// var bullets = Array.from(document.querySelectorAll('#pagination-ul li'))

// for (var i = 0; i < bullets.length; i++){

//     bullets[i].onclick = function () {
//         currentSlide = this.getAttribute('data-index');
// =======
// function IsFlipped(SelectCard) {
//     SelectCard.classList.add('is-flipped');

//     // let FitchCard = range.filter(function (card) {
//     //     card.classList.contains('is-flipped');
//     // });
    
//     let FitchCard = blocks.filter(flipped => flipped.classList.contains('is-flipped'));

//     // let FitchCard = blocks.filter(function (flipped) {
//     //     return flipped.classList.contains('is-flipped');
//     // });
// >>>>>>> Stashed changes

//         checkSlide();
//     };
// }

// <<<<<<< Updated upstream
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
// =======
//     if (FitchCard.length === 2) {
//         // stop click
//         StopFlipped()

//         // check if match or not
//         CheckIfMatch(FitchCard[0], FitchCard[1]);
//     }

// }

// function StopFlipped() {
//     cards.classList.add('no-click');

//     setTimeout(() => {
//         cards.classList.remove('no-click')
//     }, duration);
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

// function CheckIfMatch(FirstCard, SecondCard) {

//     let tries = document.querySelector('.tries span');

//     // if match two same card
//     if (FirstCard.dataset.tech === SecondCard.dataset.tech) {
//         FirstCard.classList.remove('is-flipped');
//         SecondCard.classList.remove('is-flipped');

//         FirstCard.classList.add('has-match');
//         SecondCard.classList.add('has-match');

//         document.getElementById('success').play();
//     }
//     else {
//         tries.innerHTML = parseInt(tries.innerHTML) + 1;

//         setTimeout(() => {
//             FirstCard.classList.remove('is-flipped');
//             SecondCard.classList.remove('is-flipped');
//         }, duration);

//         document.getElementById('fail').play();

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

// Space Testing

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n'];

// let current = arr.length,
//     temp,
//     random;
    

// while (current > 0) {
//     random = Math.floor(Math.random() * current);
//     current--;
//     temp = arr[current];
//     arr[current] = arr[random];
//     console.log(arr[current]);
// }


// console.log(temp = arr[0]);
// console.log(arr[0] = arr[2]);
// console.log(arr[2] = temp);

