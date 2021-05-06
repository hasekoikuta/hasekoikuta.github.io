var nFrom = eval(document.numbers.nFrom.value);
var nTo = eval(document.numbers.nTo.value);
var nRange = nTo - nFrom;
var k = 0;
var Repeat = 3;

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
var navOpen = document.getElementById("navOpen");
var map = document.getElementById("map");
var show_max = document.getElementById("show_max");

show_max.innerHTML = quiz.length;
makeQuizList();

navOpen.onclick = function () {
  map.classList.toggle("visi");
}
flesh.onclick = function () {
 nFrom = eval(document.numbers.nFrom.value);
 nTo = eval(document.numbers.nTo.value);
 nRange = nTo - nFrom;
  makeQuizList();
  map.classList.toggle("visi");
}

function makeQuizList() {
  var arr = new Array;
  randArr = [];
  for (i = 0; i < nRange; i++) {
    arr[i] = i + 1;
  } //arr[]=[0,1,2,,,nRange-1]
  var h = 0;
  for (i = 0,j = nRange; i < nRange; i++, j--) {
    h = Math.floor(Math.random() * j );
    randArr.push(arr[h] + nFrom);
    arr[h] = arr[j - 1];
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
  } 
}

function BatsuClick() {

  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  b_btn.classList.add('gray');

  if (answerData.innerHTML == "○") {

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