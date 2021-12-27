

q_sel = 3;

setReady();

function setReady() {
	count = 0;
	i = 0;
	h = 0;
	f = 20;
	g = 1;
	u = 0;
	w = "";
	r = 900;
	ansers = new Array();
	mis_one = [];
	mis_two = [];
	mis_three = [];
	mis_four = [];
	mis_five = [];
	quiz();

}


function quiz() {
	num++;
	var expire = new Date();
	expire.setTime(expire.getTime() + (100 * 24 * 60 * 60 * 10000000));
	document.cookie = 'COUNT=' + num + ';expire=' + expire.toUTCString();
		document.getElementById("number").innerHTML = num;



	h++;

	if (h == f){
		g++;
		h = 0;
		f = f+ 14*g;
	}
	
	randA = Math.floor(Math.random() * al[0].length);
	randB = Math.floor(Math.random() * al[0].length);
	randC = Math.floor(Math.random() * al[0].length);
	randD = Math.floor(Math.random() * al[0].length);

	x = Math.random();

       		if(x < 0.4){if(mis_one.length > 0){
        		E = Math.floor(Math.random() * mis_one.length);
        		randE = mis_one[E];
        		mis_two.push(Number(randE));
        		mis_one.splice(E,1);
       			randA = Number(randE);
       		}}else if(0.4 < x < 0.55){if(mis_two.length > 0){
       			F = Math.floor(Math.random() * mis_two.length);
        		randF = mis_two[F];
        		mis_three.push(Number(randF));
        		mis_two.splice(F,1);
       			randA =  Number(randF);
       			
       		}}else if(0.55 < x < 0.65){if(mis_three.length > 0){
       			G = Math.floor(Math.random() * mis_three.length);
        		randG = mis_three[G];
        		mis_four.push(Number(randG));
        		mis_three.splice(G,1);
       			randA =  Number(randG);
       		}}else if(0.65 < x < 0.70){if(mis_four.length > 0){
        		H = Math.floor(Math.random() * mis_four.length);
        		randH = mis_four[H];
        		mis_five.push(Number(randH));
        		mis_four.splice(H,1);
       			randA =  Number(randH);
       		}}else if(0.70 < x < 0.72){if(mis_five.length > 0){  
        		I = Math.floor(Math.random() * mis_five.length);
        		randI = mis_five[I];
        		mis_five.splice(I,1);
       			randA =  Number(randI);
		}}

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
		document.getElementById('anser').style.backgroundColor = '#ff7f50';
	w =  "<div class='a-anser'><div class='q'>"+al[0][randA]+"</div><div class='anser'>"+t+"</div></div>" + w;
	document.getElementById("text_a").innerHTML = w;
		mis_one.unshift(Number(randA));
		document.getElementById("text_a").innerHTML = w;
	}
}


function big(){
	document.getElementById("text_a").className="bigger";
}


function small(){
	document.getElementById("text_a").className="";
}
