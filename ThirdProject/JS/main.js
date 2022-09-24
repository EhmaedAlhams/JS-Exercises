// SECTION: Task/Project Three: To Do List


let input = document.querySelector('.add input');
let add = document.querySelector('.add .plus')

let TaskContent = document.querySelector('.task-content');
let TaskCount = document.querySelector('.task-count span');
let TaskComplete = document.querySelector('.task-complete span');

window.onload = function () {
    input.focus()
};


add.onclick = function () {
    if (input.value === '') {
        console.log('empty input');
        // sweet alert here

    } else {

        let NoMsg = document.querySelector('.none-task');
        
        if (document.body.contains(document.querySelector('.none-task'))) {
            NoMsg.remove();
        };

        let MainSpan = document.createElement('span');
        let DeleteElement = document.createElement('span');

        let text = document.createTextNode(input.value);
        let Delete = document.createTextNode("Delete");

        MainSpan.appendChild(text);
        MainSpan.className = 'task-box';

        DeleteElement.appendChild(Delete)
        DeleteElement.className = 'delete';

        MainSpan.appendChild(DeleteElement);
        TaskContent.appendChild(MainSpan);

        input.value = "";
        input.focus();

        CalculateTasks()
        // let [MainSpan, DeleteElement] = [0,0].map(_ => document.createElement("span"));
    };
};


document.addEventListener('click', function (event) {
    
    if (event.target.className == 'delete') {
        event.target.parentNode.remove();

        if (TaskContent.childElementCount == 0) {
            NoMessage();
        };
    }

    if (event.target.classList.contains('task-box')) {
        event.target.classList.toggle('finished');
    };

    CalculateTasks();
});


function NoMessage() {
    let Msg = document.createElement('span');
    let MsgText = document.createTextNode('No tasks to show');

    Msg.appendChild(MsgText);
    Msg.className = 'none-task';

    TaskContent.appendChild(Msg)
};

function CalculateTasks() {

    TaskCount.innerHTML = document.querySelectorAll('.task-content .task-box').length;
    TaskComplete.innerHTML = document.querySelectorAll('.task-content .finished').length;
};

