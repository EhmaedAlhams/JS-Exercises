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



// ANCHOR: Load JSON Data With jQuery $ Ajax

// $.ajax({
//     url: "https://api.github.com/users/ehmaedalhams/repos",
//     dataType: "json",
//     cache: false,
//     success: function (data, status) {
//         var content = "";

//         for (var x in data) {
//             content += data[x].username;
//         }
//         console.log(content);
        
//     },
//     error: function(xhr, textStatus, error){
//         console.log(xhr);   // xml http request.
//         console.log(textStatus);
//         console.log(error);
//     }
// });


//NOTE: with other way:



// $.ajax({
//     url: "/JSON & AJAX File/data.json",
//     dataType: "json",
//     cache: false,
//     success: function (data, status) {
//         console.log(data);
//         console.log(status);
//         $.each(data, function (index) {
//             // element == this
//             $("#username").append("<div>" + data[index].username + "</div>");
//         });
        
//     },
//     error: function(xhr, textStatus, error){
//         console.log(xhr);   // xml http request.
//         console.log(textStatus);
//         console.log(error);
//     }
// });


// ANCHOR: AJAX => Asynchronous java Script and xml.

// XML/JSON => Get & Send data to the server.
// XML Http Request => making communication with the server.

// NOTE: we use ajax to bring data without refresh.

// xhr: [X]ML [H]ttp [R]equest

// Function to do the request:

// function getRepositories() {
    
//     // assign the request
//     // XMLHttpRequest() => object exchange data with server in background.
//     var request = new XMLHttpRequest();

//     // on ready state change => call function when ready state change.
//     request.onreadystatechange = function () {
        
//         /*
//         - Ready State => the state of request.
//         - [0] => request not initialized.
//         - [1] => server connection established.
//         - [2] => request received.
//         - [3] => processing received
//         - [4] => request is finished and response is ready.

//         status:
//         Response status code.
//         [200] => ok.
//         like not found page 404.
//         */
        
//         // NOTE: if request is finished and response is ready and status code is ok 200
//         // Output:
//         // the response text.
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//         }
//     };

//     // XMLHttpRequest().open(Method, URL, Async, User, Password)
//     request.open("GET", "https://api.github.com/users/ehmaedalhams/repos", true);
//     request.send();
// };


// ANCHOR: Learn AJAX - Convert Response Text And Loop On It


// function getRepositories() {
//     var request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
    
//         if (this.readyState === 4 && this.status === 200) {
//             // console.log(this.responseText);         // string
//             // console.log(JSON.parse(this.responseText));     //JSON

//             // Convert response text to JSON:
//             var json = JSON.parse(this.responseText);
//             var content = '';

//             for (var i = 0; i < json.length; i++){
//                 console.log(json[i]);   // all data
//                 console.log(json[i].username);      // username repository
//                 content += json[i].username + '<br>'
//             }
//             document.getElementById('username').innerHTML = content
//         }
//     };

//     request.open("GET", "https://api.github.com/users/ehmaedalhams/repos", true);
//     request.send();
// };


// ANCHOR: jQuery - Ajax Load

// $(function () {
//     $('button').click(function () {
//         $('#jquery').
//             load("https://api.github.com/users/ehmaedalhams/repos",
//                 function (response, status, request) {
//                     // this; // dom element
//                     console.log(response);
//                     console.log(status);
//                     console.log(request);
//         });
        
//     });
// });


// ANCHOR: jQuery - $ Get And $ Post

// Get
// $.get("url", data,
//     function (data, textStatus, jqXHR) {
        
//     },
//     "dataType"
// );

// // Post
// $.post("url", data,
//     function (data, textStatus, jqXHR) {
        
//     },
//     "dataType"
// );


// ANCHOR: jQuery - $.Ajax

// $.ajax({
    
//     // caches: true,       // caches the request. default is true.
//     // async: true,        // asynchronous. default is true.
//     // dataType: "dataType",  // data expected from server response.
//     data: "data",       
//     method: "GET",      // method use for the request.
//     type: "method",     // allies name method.
//     url: "url",         // URL to send the request.
//     timeout: 3000,      // time out for the request
//     username: '',       // for authentication.
//     password: '',

//     // content type for the request. default is application/x-www-form-urlencoded.
//         // to upload image the content type: multipart/form-data.

//     contentType: '',    
//     beforeSend: function (responseXHR) {
//         // return response 
//     },
//     success: function (data, status, response) {
//         //NOTE: function run when request success.

//         // data => data in they're
//         // status => request status.
//         // response => XHR object response.
//     }, 
//     error: function (responseXHR, status, error) {
//         // responseXHR => XHR Object
//         // status => request status.
//         // error => message error.
//     },

//     complete: function (responseXHR, status) {
//         //NOTE: function run when request complete.

//         // responseXHR => XHR Object
//         // status => request status.
//     }
// });