let CountSpan = document.querySelector(".count span");
let bullets = document.querySelector('.bullets');
let BulletsSpans = document.querySelector(".bullets .spans");
let QuizArea = document.querySelector('.quiz-area');
let AnswerArea = document.querySelector('.answers-area');
let button = document.querySelector('.submit-button');
let Results = document.querySelector('.results');
let Time = document.querySelector('.countdown');

let CurrentIndex = 0;
let RightAnswer = 0;
let CountDownInterval;

function Questions() {
    
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 & request.status === 200) {
            let question = JSON.parse(this.responseText)
            let CountQuestion = question.length;
            GetQuestion(CountQuestion);

            AddQuestion(question[CurrentIndex], CountQuestion);

            Timer(5, CountQuestion);
            button.onclick = function () { 
                let theRightAnswer = question[CurrentIndex].right_answer;

                CurrentIndex++;

                CheckAnswer(theRightAnswer, CountQuestion);
                QuizArea.innerHTML = "";
                AnswerArea.innerHTML = "";
                AddQuestion(question[CurrentIndex], CountQuestion);
                HandleBullets();
                // clearInterval(Timer);
                // Timer(5, CountQuestion);
                ShowResults(CountQuestion);
            };
        }

    };
    request.open('GET', "question.json", true);
    request.send();
}

Questions();


function GetQuestion(Count) { 
    CountSpan.innerHTML = Count;
    
    for (let i = 0; i < Count; i++){
        let bullets = document.createElement("span");
        
        if (i === 0) {
            bullets.className = 'on';
        }
        BulletsSpans.appendChild(bullets);
    }
};

function AddQuestion(question, LengthQuestion) {
    if (CurrentIndex < LengthQuestion) {
        let title = document.createElement('h2');
        let AnswerQuestion = document.createTextNode(question.title);
        title.appendChild(AnswerQuestion);
        QuizArea.appendChild(title);
    
        for (let i = 1; i <= 4; i++) { 
            let answer = document.createElement("div");
    
            answer.className = "answer";
            let input = document.createElement('input');
            input.name = 'question';
            input.type = 'radio';
            input.id = `answer_${i}`;
            input.dataset.answer = question[`answer_${i}`];
            
            if (i === 1) {
                input.checked = true;
            }
    
            let label = document.createElement('label');
            label.htmlFor = `answer_${i}`;
            let LabelText = document.createTextNode(question[`answer_${i}`]);
            label.appendChild(LabelText);
            
            answer.appendChild(input);
            answer.appendChild(label);
            AnswerArea.appendChild(answer);
        };
    }
};

function CheckAnswer(RAnswer, CountQuestion) {
    let CheckAnswer = document.getElementsByName('question');
    let ChooseAnswer;
    
    for (let i = 0; i < CheckAnswer.length; i++) {

        if (CheckAnswer[i].checked) {
            let ChooseAnswer = CheckAnswer[i].dataset.answer;
            console.log(ChooseAnswer);
        }
        if (RAnswer === ChooseAnswer) {
            RightAnswer++;
        }
    };
};

function HandleBullets() {
    let Bullets = document.querySelectorAll('.bullets .spans span');
    let ArrayOfBullets = Array.from(Bullets);

    ArrayOfBullets.forEach((span, index) => {
        if (CurrentIndex === index) {
            span.className = "on";
        }
    });
}

function ShowResults(CountQuestion) {
    let Result;
    
    if (CurrentIndex === CountQuestion) {
        QuizArea.remove();
        AnswerArea.remove();
        button.remove();
        bullets.remove();

        if (RightAnswer > (CountQuestion / 2) && RightAnswer < CountQuestion) {
            Result = `<span class="Good">Good Answer</span>: ${RightAnswer} From ${CountQuestion}.`;
        } else if (RightAnswer === CountQuestion) {
            Result = `<span class="perfect">Good Answer</span>: All Answers Perfect.`;
        } else {
            Result = `<span class="bad">Fail Answer</span>:  ${RightAnswer} Answers From ${CountQuestion}`;
        }

        Results.innerHTML = Result;
        Results.style.padding = "10px";
        Results.style.backgroundColor = "white";
        Results.style.margin = "10px";
    }
};

function Timer(duration, NumberOfQuestion) {
    if (CurrentIndex < NumberOfQuestion) {
        let minutes, seconds;
        CountDownInterval = setInterval(function () { 
            minutes = parseInt(duration / 60); 
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            Time.innerHTML = `${minutes}:${seconds}`;

            if (--duration < 0) {
                clearInterval(CountDownInterval);
                button.click();
            }
        }, 1000);
    }
}