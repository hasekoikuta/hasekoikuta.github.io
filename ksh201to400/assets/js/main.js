var n = 400;
var s = 200;
var m = n;
var k = 0;
var Repeat = 1;

var Q = new Array;
var A = new Array;
var C = new Array;
var randArr = new Array;
var quizData = document.getElementById("quiz");
var answerData = document.getElementById("answer");
var columnData = document.getElementById("column");
var nextBtn = document.getElementById("next");
var frame = document.getElementById("frame");
var showAnswer = document.getElementById("showAnswer");
var bd = document.getElementById("bd");

makeQuizList();

function makeQuizList() {
  var arr = new Array;
  for (i = 0; i < n; i++) {
    arr[i] = i;
  } //arr[]=[0,1,2,,,n-1]
  var h = 0;
  for (i = 0; i < m; i++) {
    h = s + Math.floor(Math.random() * n - i);
    randArr[i] = arr[h];
    arr.splice(h, 1);
  } //randArr[] = [1,4,5,3,2]
  var a = new Array;
  for (i = 0; i < Repeat; i++) {
    a = a.concat(randArr);
  } //randArr[] = [1,4,5,3,2,1,4,5,,,,]
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
  showAnswer.innerHTML = k + 1;
}

function MaruClick() {

  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  m_btn.classList.add('gray');

  if (answerData.innerHTML == "×") {

    quizData.classList.add("warning");
    
    if (Q.length >= 40) {
      var rArr = [40, 20, 10, 5, 2, 1];
      for (i = 0; i < rArr.length; i++) {
        Q.splice(rArr[i], 0, Q[0]);
        A.splice(rArr[i], 0, A[0]);
        C.splice(rArr[i], 0, C[0]);
        randArr.splice(rArr[i], 0, "再出題");
      }
    }
  } else if (randArr[0] !== "再出題") {
    if (Q.length >= 35) {
      var rArr = [40, 15, 5];
      for (i = 0; i < rArr.length; i++) {
        Q.splice(rArr[i], 0, Q[0]);
        A.splice(rArr[i], 0, A[0]);
        C.splice(rArr[i], 0, C[0]);
        randArr.splice(rArr[i], 0, "再出題");
      }
    }
  }
}

function BatsuClick() {

  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  b_btn.classList.add('gray');

  if (answerData.innerHTML == "o") {

    quizData.classList.add("warning");

    if (Q.length >= 40) {
      var rArr = [40, 20, 10, 5, 2, 1];
      for (i = 0; i < rArr.length; i++) {
        Q.splice(rArr[i], 0, Q[0]);
        A.splice(rArr[i], 0, A[0]);
        C.splice(rArr[i], 0, C[0]);
        randArr.splice(rArr[i], 0, "再出題");
      }
    } else if (randArr[0] !== "再出題") {
      if (Q.length >= 35) {
        var rArr = [40, 15, 5];
        for (i = 0; i < rArr.length; i++) {
          Q.splice(rArr[i], 0, Q[0]);
          A.splice(rArr[i], 0, A[0]);
          C.splice(rArr[i], 0, C[0]);
          randArr.splice(rArr[i], 0, "再出題");
        }
      }
    }
  }
}

function showAnswer() {
  columnData.style.visibility = "visible";
  quizData.classList.add('warning');
  nextBtn.style.visibility = "visible";
  if (Q.length >= 40) {
    var rArr = [40, 20, 10, 5, 2, 1];
    for (i = 0; i < rArr.length; i++) {
      Q.splice(rArr[i], 0, Q[0]);
      A.splice(rArr[i], 0, A[0]);
      C.splice(rArr[i], 0, C[0]);
      randArr.splice(rArr[i], 0, "再出題");
    }
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

  if (randArr[0] == "再出題"){
    showAnswer.innerHTML = k + 1;
    quizData.classList.add("darken");

  }else{
    k++;
    quizData.classList.remove("darken");
    showAnswer.innerHTML = k + 1;
  }

}

function finish() {
  frame.style.visibility = "visible";
  quizData.innerHTML = "<a href='javascript:makeQuizList()'>Finish</a>";
}