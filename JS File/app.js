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

// ANCHOR: JSON course at 9/8/2022
// NOTE: this course derived

// import data from "../JSON & AJAX File/data.jsonc" assert {type: 'json'};


// console.log(data.Array[1]);
    // // JSON Obj
    // const obj = '{"user": "Ehmaed", "age": "26"}'
    // let objParse = JSON.parse(obj);
    
    // // string from server
    // console.log(obj);
    // console.log(typeof (obj));

    // // object to modifier.
    // console.log(objParse);
    // console.log(typeof (objParse));

    // let jsonObj = JSON.stringify(objParse);
    
    // console.log(jsonObj);
    // console.log(typeof (jsonObj));


// $(function () {
//     $.getJSON("/JSON & AJAX File/data.jsonc", data,
//         function (data) {
//             console.log(data);
//             // console.log(textStatus);
//             // console.log(jqXHR);
//         }
//     );
// });

// $(function () {
//     $('#show').click(function () { 
//         // e.preventDefault();
//         $('h1').hide()
//         console.log('hide h1');
        
//     });
// });