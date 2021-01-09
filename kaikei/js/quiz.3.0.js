

q_sel = 3;

setReady();

function setReady() {
	a=0;
	count = 0;
	i = 0;
	h = 0;
	f = 20;
	g = 1;
	u = 0;
	w = "";
	r = 900;
	p = 0;
	ansers = new Array();
	mis_one = [];
	mis_two = [];
	mis_three = [];
	mis_four = [];
	mis_five = [];
	ar = [];
	arr = [];
for(var i = al[0].length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = al[0][i];
    var tmp2 = al[1][i];
    al[0][i] = al[0][r];
    al[1][i] = al[1][r];
    al[0][r] = tmp;
    al[1][r] = tmp2;
}
	quiz();

}


function quiz() {
	l = eval(document.fn.B.value);
	num++;
	var expire = new Date();
	expire.setTime(expire.getTime() + (100 * 24 * 60 * 60 * 10000000));
	document.cookie = 'COUNT=' + num + ';expire=' + expire.toUTCString();
		document.getElementById("number").innerHTML = num;



	h++;
	document.getElementById("level").innerHTML = h + "/" + f;
        document.getElementById('level').setAttribute('data-content',g);

	if (h == f){
		g++;
		h = 0;
		f = f+ 14*g;
	}
	
	randA = Math.floor(Math.random() * l);
	randB = Math.floor(Math.random() * l);
	randC = Math.floor(Math.random() * l);
	randD = Math.floor(Math.random() * l);
	if(randA == randB){
		h--;
		num--;
		window.setTimeout("quiz();", 0);
	}
	if(randC == randB){
		h--;
		num--;
		window.setTimeout("quiz();", 0);
	}
	if(randA == randC){
		h--;
		num--;
		window.setTimeout("quiz();", 0);
	}
	x = Math.random();


	qa = new Array();

	qa[0] = [al[0][randA],al[1][randA],al[1][randB],al[1][randC],1];
	qa[1] = [al[0][randA],al[1][randB],al[1][randA],al[1][randC],2];
	qa[2] = [al[0][randA],al[1][randC],al[1][randB],al[1][randA],3];

	var s, n;

	rnd = Math.floor(Math.random() * qa.length);
	document.getElementById("text_q").innerHTML = qa[rnd][0];

	s = "";

	for (n=1;n<=q_sel;n++) {
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
	document.getElementById("text_s").innerHTML = s;
}
//解答表示
function anser(num) {
	r = eval(document.fm.A.value)*10;

	var s,t,u;
        t = al[1][randA];
	
	if (num == qa[rnd][q_sel + 1]) {
	//正解
		document.getElementById('anser').style.backgroundColor = '#0431B4';
		count++;
		window.setTimeout("quiz();", r);
	} else {
	//不正解
	ar[p] = al[0][randA];
	arr[p] = t;
	p++;
		document.getElementById('anser').style.backgroundColor = '#ff7f50';
	w =  "<div class='a-anser'><div class='q'>"+al[0][randA]+"</div><div class='anser'>"+t+"</div></div>" + w;
	document.getElementById("text_a").innerHTML = w;
		document.getElementById("text_a").innerHTML = w;
	}
}


function big(){
	document.getElementById("text_a").className="bigger";
}
function check(){
	document.getElementById("check").className="checked";
	document.getElementById("text_a").className="hidden";	
	Countup();
}
function Countup(){	

		b = ar[a];
		c = arr[a];
	document.getElementById("text_k").innerHTML = b;
	document.getElementById("text_g").innerHTML ="";
	a++;
}
function show(){
	document.getElementById("text_g").innerHTML = c;
}
function maru(){
	window.setTimeout("Countup();", 10);
	if(p <= a){
	document.getElementById("check").className="check";
	document.getElementById("text_a").className="";	

}

}
function batsu(){	
	p++;
	ar.push(b);
	arr.push(c);
	window.setTimeout("Countup();", 10);

}


function small(){
	document.getElementById("text_a").className="";
}
