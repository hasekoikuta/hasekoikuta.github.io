next_quiz();
var i = 0;

function clear() {
  var animation = document.getElementById("_animation");
  animation.id = "animation";
  var circle = document.getElementById("_circle");
  circle.id = "circle";
  var check = document.getElementById("_check");
  check.id = "check";
  window.setTimeout("rename()", 300);
}

function rename() {
  var animation = document.getElementById("animation");
  animation.id = "_animation";
  var circle = document.getElementById("circle");
  circle.id = "_circle";
  var check = document.getElementById("check");
  check.id = "_check";
}
// ボタンがクリックされたとき呼び出されるハンドラ
function MaruClick() {
  var answer = document.getElementById("answer");
  var column = document.getElementById("column");
  var b_btn = document.getElementById("b_btn");
  if (answer.innerHTML == "○") {
    document.getElementById("quiz").innerHTML = "";
    window.setTimeout("next_quiz();", 300);
    clear();
  } else {
    column.style.visibility = "visible";
    answer.style.visibility = "visible";
  }
}

function BatsuClick() {
  var answer = document.getElementById("answer");
  var column = document.getElementById("column");
  var m_btn = document.getElementById("m_btn");
  if (answer.innerHTML == "×") {
    document.getElementById("quiz").innerHTML = "";
    window.setTimeout("next_quiz();", 300);
    clear();
  } else {
    answer.style.visibility = "visible";
    column.style.visibility = "visible";
  }
}


function next_quiz() {
  var quizData = document.getElementById("quiz");
  var answerData = document.getElementById("answer");
  var columnData = document.getElementById("column");
  var max = quiz.length;
  var r = Math.floor(Math.random() * max);
  quizData.innerHTML = quiz[r];
  answerData.innerHTML = answer[r];
  columnData.innerHTML = column[r];
  columnData.style.visibility = "hidden";
  answerData.style.visibility = "hidden";
  i++;
  document.getElementById("count").innerHTML = i + "問目";
}