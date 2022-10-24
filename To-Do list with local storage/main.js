let input = document.querySelector('.input');
let btn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

let ArrayOfTask = [];

if (localStorage.getItem('task')) {
    ArrayOfTask = JSON.parse(localStorage.getItem('task'));
}

getDataLocal();

btn.onclick = function () {
    if (input.value != "") {
        taskOfArray(input.value);
        input.value = "";
    }
}

tasks.addEventListener('click', (element) => {
    if (element.target.classList.contains("del")) {
        deleteTask(element.target.parentElement.getAttribute('data-id'));
        element.target.parentElement.remove();
    }

    if (element.target.classList.contains("task")) {
        toggleComplete(element.target.getAttribute('data-id'));
        element.target.classList.toggle('done');
    }
});

function taskOfArray(value) {
    const task = {
        id: Date.now(),
        text: value,
        complete: false
    };

    ArrayOfTask.push(task);
    addElement(ArrayOfTask);
    setArrLocal(ArrayOfTask);
}

function addElement(arr) {
    tasks.innerHTML = "";
    
    arr.forEach((task) => { 
        let div = document.createElement('div');
        div.className = "task";

        if (task.complete) {
            div.className = "task done";
        }

        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.text));


        let span = document.createElement('span');
        span.className = 'del';
        span.appendChild(document.createTextNode('Delete'));
        div.appendChild(span);

        tasks.appendChild(div);
    });
}

function setArrLocal(arrayOfTasks) {
    localStorage.setItem("task", JSON.stringify(arrayOfTasks));
}

function getDataLocal() {
    let data = localStorage.getItem("task");

    if (data) {
        let task = JSON.parse(data)
        addElement(task);
    }
}

function deleteTask(idTask) {
    // for (let i = 0; i < ArrayOfTask.length; i++) {
    //     // console.log(`${ArrayOfTask[i].id} == ${idTask}`);
    // }

    ArrayOfTask = ArrayOfTask.filter((task) => task.id != idTask);
    setArrLocal(ArrayOfTask);
}

function toggleComplete(idTask) {
    for (let i = 0; i < ArrayOfTask.length; i++){
        if (ArrayOfTask[i].id == idTask) {
            ArrayOfTask[i].complete == false ?
                (ArrayOfTask[i].complete = true) : (ArrayOfTask[i].complete = false);
        }
    }
    setArrLocal(ArrayOfTask)
}