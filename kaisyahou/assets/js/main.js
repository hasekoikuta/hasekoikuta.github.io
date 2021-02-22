var n = quiz.length;
var m = 5;
var k = 0;
var Repeat = 4;

var Q = new Array;
var A = new Array;
var C = new Array;
var randArr = new Array;

var quizData = document.getElementById("quiz");
var answerData = document.getElementById("answer");
var columnData = document.getElementById("column");
var nextBtn = document.getElementById("next");
var frame = document.getElementById("frame");


makeQuizList ();

function makeQuizList () {
  var arr = new Array;
  for (i = 0; i < n; i++) {
    arr[i] = i;
  }//arr[]=[0,1,2,,,n-1]


  var h = 0;
  for (i = 0; i < m; i++) {
    h = Math.floor(Math.random() * n - i);
    randArr[i] = arr[h];
    arr.splice(h, 1);
  }//randArr[] = [1,4,5,3,2]

  var a = new Array;
  for (i = 0; i < Repeat; i++) {
    a = a.concat(randArr);
  }//randArr[] = [1,4,5,3,2,1,4,5,,,,]
  randArr = a;

  for (i = 0; i < randArr.length; i++) {
    Q[i] = quiz[randArr[i]];
    A[i] = answer[randArr[i]];
    C[i] = column[randArr[i]];
  }
  start();
}

function start() {
  quizData.innerHTML = Q[0];
  answerData.innerHTML = A[0];
  columnData.innerHTML = C[0];
  columnData.style.visibility = "hidden";
  answerData.style.visibility = "hidden";
  nextBtn.style.visibility = "hidden";
  frame.style.visibility = "hidden";
}

function MaruClick() {
  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  
  m_btn.classList.add('gray');
  
  
  if (answerData.innerHTML == "×") {

    quizData.classList.add("warning");
    if(Q.length >= 5){
      Q.splice(5, 0, Q[0]);
      A.splice(5, 0, A[0]);
      C.splice(5, 0, C[0]);
      Q.splice(2, 0, Q[0]);
      A.splice(2, 0, A[0]);
      C.splice(2, 0, C[0]);
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
    } else {
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
    }
  }
}

function BatsuClick() {
  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";

  b_btn.classList.add('gray');

  if (answerData.innerHTML == "o") {
    quizData.classList.add('warning');

    if(Q.length >= 5){
      Q.splice(5, 0, Q[0]);
      A.splice(5, 0, A[0]);
      C.splice(5, 0, C[0]);
      Q.splice(2, 0, Q[0]);
      A.splice(2, 0, A[0]);
      C.splice(2, 0, C[0]);
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
    } else {
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
      Q.splice(1, 0, Q[0]);
      A.splice(1, 0, A[0]);
      C.splice(1, 0, C[0]);
    }
  }
}
function showAnswer() {
  columnData.style.visibility = "visible";
  quizData.classList.add('warning');
  nextBtn.style.visibility = "visible";

  if(randArr.length >= 5){
    Q.splice(5, 0, Q[0]);
    A.splice(5, 0, A[0]);
    C.splice(5, 0, C[0]);
    Q.splice(2, 0, Q[0]);
    A.splice(2, 0, A[0]);
    C.splice(2, 0, C[0]);
    Q.splice(1, 0, Q[0]);
    A.splice(1, 0, A[0]);
    C.splice(1, 0, C[0]);
  } else {
    Q.splice(1, 0, Q[0]);
    A.splice(1, 0, A[0]);
    C.splice(1, 0, C[0]);
    Q.splice(1, 0, Q[0]);
    A.splice(1, 0, A[0]);
    C.splice(1, 0, C[0]);
  }
}

function next() {
  randArr.shift();
  Q.shift();
  A.shift();
  C.shift();

  b_btn.classList.remove("gray");
  m_btn.classList.remove("gray");
  quizData.classList.remove("warning");


  columnData.style.visibility = "hidden";
  answerData.style.visibility = "hidden";
  nextBtn.style.visibility = "hidden";
  if (Q.length == 0) {
    finish();
    return;
  }

  quizData.innerHTML = Q[0];
  answerData.innerHTML = A[0];
  columnData.innerHTML = C[0];
}

function finish() {
  frame.style.visibility = "visible";
  quizData.innerHTML = "<a href='javascript:makeQuizList()'>Finish</a>";
}