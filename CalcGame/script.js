document.getElementById('start').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    generateQuestion();
});

document.getElementById('reveal').addEventListener('click', function() {
    document.getElementById('choices').style.display = 'block';
});

const choicesButtons = document.querySelectorAll('.choice');
choicesButtons.forEach(button => {
    button.addEventListener('click', function() {
        const feedback = document.getElementById('feedback');
        feedback.style.display = 'block'; // フィードバック領域を表示
        if (parseInt(this.textContent) === correctAnswer) {
            feedback.textContent = '正解!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = '不正解!';
            feedback.style.color = 'red';
        }
        generateQuestion();
        document.getElementById('choices').style.display = 'none';
    });
});

let correctAnswer;

function generateQuestion() {
    const operation = document.getElementById('operation').value;
    const digits1 = parseInt(document.getElementById('digits1').value);
    const digits2 = parseInt(document.getElementById('digits2').value);
    const num1 = generateRandomNumber(digits1);
    const num2 = generateRandomNumber(digits2);
    let questionText;
    switch(operation) {
        case 'add':
            correctAnswer = num1 + num2;
            questionText = `${num1} + ${num2}`;
            break;
        case 'subtract':
            correctAnswer = num1 - num2;
            questionText = `${num1} - ${num2}`;
            break;
        case 'multiply':
            correctAnswer = num1 * num2;
            questionText = `${num1} × ${num2}`;
            break;
        case 'divide':
            if (num2 === 0) num2 = 1;  // 0除算を避ける
            correctAnswer = parseFloat((num1 / num2).toFixed(4));
            questionText = `${num1} ÷ ${num2}`;
            break;
    }

    document.getElementById('question').textContent = questionText;
    generateChoices(correctAnswer);
}

function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(correct) {
    let choices = [correct];
    while (choices.length < 3) {
        let randomChoice = generateRandomNumber(correct.toString().length);
        if (!choices.includes(randomChoice) && randomChoice !== correct) {
            choices.push(randomChoice);
        }
    }
    choices.sort(() => Math.random() - 0.5); // 選択肢をシャッフル
    choicesButtons.forEach((button, index) => {
        button.textContent = choices[index];
    });
}
