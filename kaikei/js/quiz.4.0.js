setReady()
function setReady() {
	a = 0;
	new_array = [];	
	new_array_answer = [];
	w = "";
	for (var i = al[0].length - 1; i > 0; i--) {
	    var r = Math.floor(Math.random() * (i + 1));
	    var tmp = al[0][i];
	    var tmp2 = al[1][i];
	    al[0][i] = al[0][r];
	    al[1][i] = al[1][r];
	    al[0][r] = tmp;
	    al[1][r] = tmp2;
	}
	Countup();
}
function Countup(){
	b = al[0][a];
	c = al[1][a];
	document.getElementById("text_k").innerHTML = b;
	document.getElementById("text_g").innerHTML ="";
	a++;
}
function show(){
	document.getElementById("text_g").innerHTML = c;
}
function maru(){
	window.setTimeout("Countup();", 10);
}
function batsu(){
	new_array.push(b);
	new_array_answer.push(c);
	window.setTimeout("Countup();", 20);
}
function next(){
	document.getElementById("section_1").className ="close";
	document.getElementById("section_2").className ="";
	qa = [];
        quiz();
}
function back(){
	document.getElementById("section_2").className ="close";
	document.getElementById("section_1").className ="";
	new_array=[];
	new_array_answer=[];
}
function quiz() {
	randA = Math.floor(Math.random() * new_array.length);
	randB = Math.floor(Math.random() * al[0].length);
	randC = Math.floor(Math.random() * al[0].length);
	randD = Math.floor(Math.random() * al[0].length);
	if(randA == randB){
		window.setTimeout("quiz();", 0);
	}
	if(randC == randB){
		window.setTimeout("quiz();", 0);
	}
	if(randA == randC){
		window.setTimeout("quiz();", 0);
	}
	qa[0] = [new_array[randA],new_array_answer[randA],al[1][randB],al[1][randC],1];
	qa[1] = [new_array[randA],al[1][randB],new_array_answer[randA],al[1][randC],2];
	qa[2] = [new_array[randA],al[1][randC],al[1][randB],new_array_answer[randA],3];
	rnd = Math.floor(Math.random() * qa.length);
	document.getElementById("sec2_question").innerHTML = qa[rnd][0];

	s = "";

	for (n=1;n<=3;n++) {
		if (qa[rnd][n] != "") {
			if (qa[rnd][n] == al[1][randA]){
				s += "<a href='javascript:anser(" + n + ")' id='anser'>" + qa[rnd][n] + "</a>";
			} else if (qa[rnd][n] == al[1][randB]){
				s += "<a href='javascript:anser(" + n + ")' id='randB'>" + qa[rnd][n] + "</a>";
			} else {
				s += "<a href='javascript:anser(" + n + ")' id='randC'>" + qa[rnd][n] + "</a>";
			}
		}
	}
	document.getElementById("sec2_answer").innerHTML = s;
}
function anser(num) {
	var s,t,u;
        t = al[1][randA];
	
	if (num == qa[rnd][3 + 1]) {
	//正解
		document.getElementById('anser').style.backgroundColor = '#0431B4';
		window.setTimeout("quiz();", 20);
	} else {
	//不正解
		document.getElementById('anser').style.backgroundColor = '#ff7f50';
	}
}