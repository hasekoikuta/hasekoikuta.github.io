var n = quiz.length;
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
var showAnswer = document.getElementById("showAnswer");
var bd = document.getElementById("bd");
var stt = document.getElementById("stt");
makeQuizList();


stt.onclick = function (){
  makeQuizList();
}
function makeQuizList() {
  Q=[];
  A=[];
  C=[];
  k=0;
  var arr = new Array;
  for (i = 0; i < n; i++) {
    arr[i] = i + 1;
  } //arr[]=[0,1,2,,,n-1]
  var h = 0;
  var j = n;
  for (i = 0; i < n; i++, j--) {
    h = Math.floor(Math.random() * j);
    randArr.push(arr[h] - 1);
    arr[h] = arr[j - 1];
  } //randArr[] = [1,4,5,3,2]
  var a = new Array;
  for (i = 0; i < Repeat; i++) {
    a = a.concat(randArr);
  } //randArr[] = [1,4,5,3,2,1,4,5,,,,]
  randArr = a;

    for (i = 0; i < randArr.length; i++) {
      try{
    if (document.fn.B.value !== ""){
      if (quiz[randArr[i]].indexOf(document.fn.B.value)
       + column[randArr[i]].indexOf(document.fn.B.value) !== -2){
         Q[k] = quiz[randArr[i]];
         A[k] = answer[randArr[i]];
         C[k] = column[randArr[i]];
         k++;
      }
    }

  }catch{

  }

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
  k=1;
  showAnswer.innerHTML = "検索結果：出題数" + Q.length/Repeat + "問"; 
}

function MaruClick() {

  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  m_btn.classList.add('gray');

  if (answerData.innerHTML == "×") {
    quizData.classList.add("warning");
      var rArr = [10, 5, 2];
      for (i = 0; i < rArr.length; i++) {
        Q.splice(rArr[i], 0, Q[0]);
        A.splice(rArr[i], 0, A[0]);
        C.splice(rArr[i], 0, C[0]);
        randArr.splice(rArr[i], 0, "再出題");
      }
  }

}

function BatsuClick() {

  columnData.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  b_btn.classList.add('gray');

  if (answerData.innerHTML == "o") {

    quizData.classList.add("warning");
      var rArr = [10, 5, 2];
      for (i = 0; i < rArr.length; i++) {
        Q.splice(rArr[i], 0, Q[0]);
        A.splice(rArr[i], 0, A[0]);
        C.splice(rArr[i], 0, C[0]);
        randArr.splice(rArr[i], 0, "再出題");
      }
    }
}

function showAnswer() {
  columnData.style.visibility = "visible";
  quizData.classList.add('warning');
  nextBtn.style.visibility = "visible";
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
    quizData.classList.add("darken");

  }else{
    k++;
    quizData.classList.remove("darken");
    showAnswer.innerHTML = k + "<span style='font-size:13px;'>問目</span>";
  }
}

function finish() {
 makeQuizList();
}